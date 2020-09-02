const express = require('express')
const router = express.Router()

//Validation
const {
   validRegister,
   validLogin,
   resetPasswordValidator,
   forgotPasswordValidator
} = require('../helpers/valid')

//Load Controllers
const {
    registerController,
    activationController,
    loginController,
    forgetPasswordController,
    resetPasswordController
} = require('../controllers/auth.controller.js')

router.post('/register', validRegister, registerController)
router.post('/activation', activationController)
router.post('/login', validLogin, loginController)
router.put('/password/forget',forgotPasswordValidator, forgetPasswordController)
router.put('/password/reset',resetPasswordValidator, resetPasswordController)

module.exports = router