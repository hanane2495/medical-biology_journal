//My libraries
const expressJWT = require('express-jwt')
const _ = require('lodash')
const {OAuth2Client} = require('google-auth-library')
const fetch = require('node-fetch')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

//bring our models
const User = require('../models/auth.model')

//bring our helpers
const {errorHandler } = require('../helpers/dbErrorHandling')


//Register
exports.registerController = (req, res) => {
    let {email, password, title, first_name, last_name, institution, country, reviewer} = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    }
    else{
        User.findOne({
            where : {
               email 
            }
         }).then(user => {
            if (user) {
                return res.status(400).json({
                    errors: 'Email is already taken'
                });
            }
            //Generate token 
            let token = jwt.sign(
                {
                    email, password, title, first_name, last_name, institution, country, reviewer 
                },
                process.env.JWT_ACCOUNT_ACTIVATION, 
                {
                    expiresIn: '15m'
                }
            )
            //sending email -------------------------------
            //step 1 : defining email content
            const emailData = {
                from: '"Medical & Biology Journal 🔬" <test@monsterstudio.org>', // sender address
                to: email, // list of receivers
                subject: "Account Activation ✔", // Subject line
                text: "Hello", // plain text body
                html:`
                <h1>Please click this link to activate your account</h1>
                <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                <hr/>
                <p>This email contains sensitive information</p>
                <p>${process.env.CLIENT_URL}</p>
                `
            }
            //step 2 : create transporter
            let transporter = nodemailer.createTransport({
                host: "mail11.lwspanel.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: 'test@monsterstudio.org', // generated ethereal user
                pass: '57932082@Essai', // generated ethereal password
                },
            });
            
            //step 3 : send mail with defined transport object
            transporter.sendMail(emailData).then(sent => {
                return res.json({
                    message : `Email has been sent to ${email}`
                })
            }).catch(err => {
                return err.json({
                    error : errorHandler(err)
                })
            });
         }).catch(err => {
            res.send('error :' + err)
         }) 
    }
}


//activate account
exports.activationController = (req, res) => {
    const {token} = req.body

    if(token){
        //verify the token is valid or not 
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
            if(err){
                return res.status(401).json({
                    error:'Expired token . Please Sign up again'
                })
            }else{
                //if valid save to database
                //get email, password, title, first_name, last_name, institution, country, reviewer from token
                let {
                    email, password, title, first_name, last_name, institution, country, reviewer
                } = jwt.decode(token)

                bcrypt.hash(password, 10, (err, hash) => {
                    password = hash
                    //Ajouter un nouveau utilisateur a la table utilisateur 
                    const user = User.create({
                        email, password, title, first_name, last_name, institution, country, reviewer
                    }).then(() =>{
                        return res.json({
                            success : true,
                            message: 'Sign Up success'
                        })
                    })
                })
            }    
        })
    }else{
        return res.json({
            message:'error is happening please try again'
        })
    }
}        



//login
exports.loginController = (req, res) => {
    const {email, password} = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    }
    else{
        //check if user exist
        User.findOne({
            where : {
               email 
            }
         }).then(user => {
             if(!user){
                 return res.status(400).json({
                     error: 'User with that email does not exist, Please Sign Up'
                 })
             }

             //Authenticate
             if(!bcrypt.compareSync(password, user.password)){
                 return res.status(400).json({
                     error : 'Email and password do not match'
                 })
             }else{
                //generate token 
                let token = jwt.sign({
                    _id: user._id
                  }, process.env.JWT_SECRET_KEY, {
                    expiresIn: '7d'
                })
                const { user_id, first_name, last_name, email, reviewer } = user
                return res.json({
                token, user : {
                    user_id, first_name, last_name, email, reviewer
                }})
             }
         }).catch(err => {
            res.status(400).json({
                error : errorHandler(err)
            })
         })
    }
}

//forget password
exports.forgetPasswordController = (req, res) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else{
    User.findOne({
        where : {
           email 
        }
     }).then(user => {
        if(!user){
            return res.status(400).json({
                error: 'User with that email does not exist, Please Sign Up'
            })
        }
        //generate token for reseting password
        let token = jwt.sign(
            { _id: user._id }, process.env.JWT_RESET_PASSWORD,{ expiresIn: '10m' } 
          );
        
        //sending email -------------------------------
        //step 1 : defining email content
        const emailData = {
            from: '"Medical & Biology Journal 🔬" <test@monsterstudio.org>', // sender address
            to: email, // list of receivers
            subject: "Forgot password 🤔 !?", // Subject line
            text: "Hello", // plain text body
            html:`
            <h1>Please click this link to Reset your password</h1>
            <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
            <hr/>
            <p>This email contains sensitive information</p>
            <p>${process.env.CLIENT_URL}</p>
            `
        }
        //step 2 : create transporter
        let transporter = nodemailer.createTransport({
            host: "mail11.lwspanel.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: 'test@monsterstudio.org', // generated ethereal user
            pass: '57932082@Essai', // generated ethereal password
            },
        });
        
        return user.update(
            {
                resetpasswordlink: token
            }
        ).then( (err, success) => {
            //step 3 : send mail with defined transport object
            transporter.sendMail(emailData).then(sent => {
                return res.json({
                    message : `Email has been sent to ${email}`
                })
            }).catch(err => {
                return err.json({
                    error : errorHandler(err)
                })
            })
        }).catch(err => {
            console.log('RESET PASSWORD LINK ERROR', err);
            return err.json({
                error:
                  'Database connection error on user password forgot request'
              });
        })
        
     })
  }
}

//Reset password
exports.resetPasswordController = (req, res) => {
    let { newPassword, resetpasswordlink } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const firstError = errors.array().map(error => error.msg)[0];
        return res.status(422).json({
          errors: firstError
        });
    }else{
        if(resetpasswordlink){
            jwt.verify(
                resetpasswordlink, 
                process.env.JWT_RESET_PASSWORD , 
                function(err,decoded){
                    if (err){
                        return res.status(400).json({
                            error: 'Expired link. Try again'
                          });
                    }else{
                        User.findOne({
                            where : {
                                resetpasswordlink 
                            }
                        }).then( user => {
                            if (err || !user) {
                                return res.status(400).json({
                                  error: 'Something went wrong. Try later'
                                });
                              }

                              bcrypt.hash(newPassword, 10, (err, hash) => {
                                newPassword = hash

                                //replace password with the new password in our model
                                const updatedFields = {
                                    password: newPassword,
                                    resetpasswordlink: ''
                                };
                                  
                                user = _.extend(user, updatedFields);

                                //save to database
                                user.save().then(() => {
                                    res.json({
                                        message: `Great! Now you can login with your new password`
                                    });
            
                                }).catch(err => {
                                    return err.json({
                                        error : 'Error resetting user password'
                                    })
                                })                                
                            })
                        })
                    }
                   
                }
            )
        }
    }
}