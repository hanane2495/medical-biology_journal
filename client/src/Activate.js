import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Authenticate, isAuth} from './helpers/auth'
import {Redirect, Link} from 'react-router-dom'
import jwt from 'jsonwebtoken';

//images
import background_1 from './assets/background5.png'

//icons
import {FaUserCheck} from 'react-icons/fa'

const Styles = styled.div`
  background-image:url(${background_1});
  display:flex;
  flex-direction:row;
  padding: 8% 20%;
  font-size:36px;
  @media only screen and (max-width: 790px) {
    flex-direction:column;
    font-size:28px;
    padding:0;
  }
  @media only screen and (max-width: 320px) {
    font-size:24px;
  }
  .login-column-left{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:65vh;
    padding:0 3%;
    background:rgba(63,63,179,0.7);
    color:white;
    border-radius:15px 0 0 15px;
    box-shadow:5px 10px 20px 1px rgba(63,63,179, 0.553);
    @media only screen and (max-width: 790px) {
      width:100%;
      border-radius:0;
  }
  }
  .login-column-right{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:65vh;
    padding-top:2%;
    background:#F2F0F0;
    color:#555;
    border-radius:0 15px 15px 0 ;
    box-shadow:5px 10px 20px 1px rgba(0,0,0, 0.253);
    @media only screen and (max-width: 790px) {
      width:100%;
      border-radius:0;
  }
  }
  .welcome{
    font-size:0.8em;
    font-weight:bold;
  }
  .welcome-text{
    font-size:0.5em;
    text-align:center;
  }
  .welcome-home{
    font-size:0.4em;
    font-weight:bold;
    color: white;
  }
  .login-title{
    font-size:0.8em;
    font-weight:bold;
    text-align:left;
    color: rgba(63,63,179,1);
    margin-bottom:8%;
  }
  .login-button{
    width:80%;
    height:15%;
    background:rgba(63,63,179,1);
    border-radius:5px;
    border:none;
    color:white;
    font-weight:400;
    margin-bottom:15%;
    font-size:0.5em;
  }
  .register-button{
    width:80%;
    height:12%;
    background:white;
    border-radius:5px;
    border:none;
    color:rgba(63,63,179,1);
    font-weight:600;
    margin-top:10%;
    font-size:0.5em;
  }
  .activation-form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width : 100%;
    height: 100%;
  }
  .register-again{
   width: 70%; 
   text-align:center;
   font-size:0.5em;
   border-bottom: 1px solid #555; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
  }
  .register-again span{
    background:#F2F0F0;
    padding:0 10px; 
  }
`;


function Activate({match}){
    const [formData, setFormData] = useState({
        first_name:'',
        token:'',
        show:true
    })

    useEffect(() => {
        //get the from params like /activate/token then decode the token and get email
        let token = match.params.token;
        let { first_name } = jwt.decode(token);

        if(token){
            setFormData({...formData, first_name, token})
        }
    }, [])

    const {first_name, token, show} = formData
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}/activation`, {
            token
        }).then(res => {
            setFormData({...formData, show:false})
            toast.success(res.data.message)
        }).catch(err => {
            toast.error(err.response.data.error)
        })
    }
    return (
      <React.Fragment>
        <Styles>
        {isAuth()? <Redirect to='/'/> : null}
        <ToastContainer style={{fontSize:'0.5em'}}/>
          <div className='login-column-left'>
            <p className='welcome'>Hello {first_name}!</p>
            <p className='welcome-text'>
                Please click the button to activate your account. 
                to be able to access your profile and consult your activities on our journal. 
                <br/> thanks for submitting
            </p>
              <Link to='/' className='welcome-home'>go back to home page !</Link>
          </div>
          <div className='login-column-right'>
            <form onSubmit={handleSubmit} className='activation-form'>
                <p className='login-title'>Account Activation</p>
                <button type = 'submit' className='login-button' ><FaUserCheck style={{marginRight:'2%', color:'#fff'}}/>Activate your account</button> 
                <p className='register-again'><span>Or Register again</span></p>
                <button className='register-button' ><Link style={{color:'rgba(63,63,179,1)'}}to='/Register'>Register</Link></button>
            </form>
          </div>
        </Styles>
      </React.Fragment>
    );
  }
  
  export default Activate;



  /**
   * Please enter your email address to activate your account. 
                An email containing a link will be sent to you!. 
                just click this link and you'll be done.<br/> 
                thanks for your subscription !.   
   */