import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Authenticate, isAuth} from './helpers/auth'
import {Redirect, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

//images
import background_1 from './assets/background5.png'

//icons
import {FiCheckCircle} from 'react-icons/fi'

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
  .login-input{
    width:80%;
    height:12%;
    border-radius:5px;
    margin-bottom:5%;
    padding:0 4%;
    border:none;
    font-size:0.5em;
  }
  .login-button{
    width:40%;
    height:10%;
    background:rgba(63,63,179,1);
    border-radius:5px;
    border:none;
    color:white;
    font-weight:600;
    margin-bottom:5%;
    font-size:0.5em;
  }
  .login-link{
    font-size:0.5em
  }
  .login-form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width : 100%;
    height: 90%;
  }
`;

function Forget({match}){
  const [formData, setFormData] = useState({
    password : '',
    password1 : '',
    token : '',
    textChange: 'Submit'
  })

  const { password, password1, token, textChange} = formData
  useEffect(() => {
    let token = match.params.token
    if(token) {
        setFormData({...formData, token,})
    }
    
  }, [])

  function getButtonText(){
    switch(textChange){
      case 'Submitting': 
        return 'Submitting'
      case 'Submitted': 
        return(
          <div>
          <FiCheckCircle style={{marginRight:'2%'}}/>
          Submitted
        </div>
        ); 
      // .. etc
      default:
      return 'Submit'
    }
  }

  function getTextChange(){
    switch(textChange){
      case 'Submitting': 
        return(
          <div style={{display:'flex', flexDirection:'row'}}>
            <Spinner animation="border" style={{margin:'0 2%', color:'rgba(63,63,179,1)'}} />
            <p style={{fontSize:'0.5em', color:'rgba(63,63,179,1)', marginBottom:'1.5%'}}>
              Submitting...
            </p>
          </div>
        );
      case 'Submitted': 
        return(
            <p style={{fontSize:'0.5em', color:'rgba(63,63,179,1)', marginBottom:'1.5%', textAlign:'center'}}> 
              now you can login with your new password <br/>
            <Link to="/Login">go to Login page !</Link>
            </p>
        ); 
      // .. etc
      default:
      return null
    }
  }

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    if ((password === password1) && password && password1){
      setFormData({ ...formData, textChange: 'Submitting' });

      axios
        .put(`${process.env.REACT_APP_API_URL}/password/reset`, {
            newPassword: password,
            resetpasswordlink: token
        }).then(res => {
          setFormData({
            ...formData,
            password: '',
            password1: '',
            textChange: 'Submitted'
              
          });
          toast.success(res.data.message);
        }).catch(err => {
          setFormData({ ...formData, textChange: 'Submit' });
          toast.error('Something went wrong, try again');
        })
    }else{
      toast.error('Passwords don\'t matches');
    }
  }
    return (
      <React.Fragment>
        <Styles>
        <ToastContainer style={{fontSize:'0.5em'}} />
          <div className='login-column-left'>
            <p className='welcome'>Reset your password</p>
            <p className='welcome-text'>
              You're about to reset your password!. <br/> 
            </p>
              <Link to='/' className='welcome-home'>go back to home page !</Link>
          </div>
          <div className='login-column-right'>
          <form className='login-form' onSubmit={handleSubmit}>
            <p className='login-title'>Reset password</p>
            <input name='password' type='password' placeholder='Your new password' className='login-input' value={password} onChange={handleChange('password')}/>
            <input name='password1' type='password' placeholder='Confirm your new password' className='login-input' value={password1} onChange={handleChange('password1')}/>
            { getTextChange()}
            <button type='submit' className='login-button' >{textChange}</button>
            </form>
          </div>
          
        </Styles>
      </React.Fragment>
    );
  }
  
  export default Forget;
