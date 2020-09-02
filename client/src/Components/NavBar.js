import React, { useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {toast, ToastContainer} from 'react-toastify'


import {isAuth, isLoggedIn, signout} from '../helpers/auth'

//icons
import {FiPower} from 'react-icons/fi'

const Styles = styled.div`
   .navbar, .navbar-expand-lg, .navbar-dark{
      padding: 0 2%;
      background : rgba(2,0,36,1);
      transition:0.9s;
   }
   .navbar-brand{
       padding : 0;
       margin : 0.5% 1%;
   }
   .navbar-nav{
       align-items:center;
       justify-content:center;
   }
   a{
      color : white;
      margin : 0.1rem;
      font-weight : 600;
      font-size : 1rem;
      justify-content:center;
      align-items:center;
      vertical-align: center;
      &:hover{
       color :#cd4339;
       text-decoration:none;
      }
    }
    .register{
       background : #4d8abc;
       border-radius : 5px;
    }
    .scrolled{ 
    position : fixed;
    background:rgba(63,63,179,1);
    width:100vw;
    padding:0 2%;
    z-index:1;
    transition:0.9s;
    @media only screen and (max-width: 768px) {
          width:100vw;
      }
   }
`;

const Avatar = styled.div`
  vertical-align: middle;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background:#eee;
  color: rgba(2,0,36,1);
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

function NavBar(props) {
    let history = useHistory();
    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                const isTop = window.scrollY > 0;
                const nav = document.getElementById('nav');
                if (isTop){
                    nav.classList.add('scrolled');
                }else{
                    nav.classList.remove('scrolled');
                }
            })
            return () => {
                //window.removeEventListener('scroll')
            }
        }, []
    );
    return(
        <React.Fragment>
            <ToastContainer/>
            <Styles>
               <Navbar collapseOnSelect  variant="dark" id='nav'>
                    <Navbar.Brand >
                        <Link to="/">
                        <img src={require('../assets/medical bio-09.png')}
                                width = '95'
                                height = '45'
                                alt="Medical and Biology Journal"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2}>
                            {props.user === null
                               ?<Link to="/Author_Guideline">Author Guideline</Link>
                               :<Avatar>{props.user.first_name.charAt(0).toUpperCase()}</Avatar> 
                            }
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                {props.user !== null 
                                ? <Link to='/Profile'>{props.user.first_name}</Link>
                                :<Link to="/Login">Login</Link>
                                }
                            </Nav.Link>
                            {props.user !== null 
                                ? null
                                : <Nav.Link eventKey={2} className='register'>
                                    <Link to="/Register">Join for free</Link>     
                                </Nav.Link>
                            }
                            {props.user !== null 
                                ? <Nav.Link eventKey={2}>
                                     <FiPower 
                                        onClick={() => {
                                            signout(() => {
                                                props.setUser(null)
                                                toast.error('Signout Successfully');
                                                history.push('/');
                                            });
                                        }}
                                    />                                   
                                  </Nav.Link>
                                : null
                            }
                            {props.user !== null 
                                ? <Nav.Link eventKey={2}>
                                     <Link
                                        onClick={() => {
                                            signout(() => {
                                                props.setUser(null)
                                                toast.error('Signout Successfully');
                                                history.push('/');
                                            });
                                        }}
                                    > 
                                      SignOut
                                    </Link>
                                  </Nav.Link>
                                : null
                            }
                        </Nav>   
                    </Navbar.Collapse>
               </Navbar>
            </Styles>
        </React.Fragment>
    )
}

export default NavBar;


