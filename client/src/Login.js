import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Authenticate, isAuth} from './helpers/auth'
import {Redirect, Link, useHistory} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

//images
import background_1 from './assets/background5.png'

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
    &:after{
            content:"";
             background: rgba(63,63,179,1);
             display:block;
             height:3px;
             width:100%;
             
        }
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
    width:80%;
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

function Login(props){
  let history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  //submit data to backend
  const handleSubmit = e => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password
        })
        .then(res => {
          Authenticate(res, () => {
            setFormData({
              ...formData,
              email: '',
              password: '',
            });
            if(isAuth()){
              history.push('/Profile');
              props.setUser(JSON.parse(localStorage.getItem('user')))
              toast.success(`Hey ${res.data.user.first_name}, Welcome back!`);
            } 
          });
        })
        .catch(err => {
          console.log(err.response);
          toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
    return (
      <React.Fragment>
        <Styles>
        
        <ToastContainer style={{fontSize:'0.5em'}} />
          <div className='login-column-left'>
            <p className='welcome'>Welcome again</p>
            <p className='welcome-text'>Medical and Biology Journal is a peer-reviewed, open access, 
               current periodical journal belonging 
               to the Department of Family Medicine 
            </p>
              <Link to='/' className='welcome-home'>go back to home page !</Link>
          </div>
          <div className='login-column-right'>
          <form className='login-form' onSubmit={handleSubmit}>
            <p className='login-title'>Login</p>
            <input name='email' type='email' placeholder='Your email' className='login-input' onChange={handleChange('email')} value={email}/>
            <input name='password' type='password' placeholder='Your password' className='login-input' onChange={handleChange('password')} value={password}/>
            <p className='login-link'>
              <Link to='/users/password/forget'>Forgot Password ?</Link>
            </p>
            <button type='submit' 
                    className='login-button' 
            >
              Login</button>
            <p className='login-link'>Don't have an account?
              <Link to='/Register'>Sign Up</Link>
            </p>
            </form>
          </div>
        </Styles>
      </React.Fragment>
    );
  }
  
  export default Login;
