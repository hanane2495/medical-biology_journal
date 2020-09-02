import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {toast, ToastContainer} from 'react-toastify'


import {isAuth, signout, isLoggedIn} from '../helpers/auth'

//icons
import {FiPower} from 'react-icons/fi'

const Styles = styled.div`
   .navbar, .navbar-expand-lg, .navbar-dark{
      padding: 0;
      background:rgba(63,63,179,1);
      transition:0.9s;
   }
   .navbar-brand{
       padding : 0;
       margin : 0;
       width:6.5rem;
       height:4rem;
       @media only screen and (max-width: 768px) {
        width:6.5rem;
        height:4rem;
      }
   }
   
   a{
      color : white;
      margin : 0 ;
      padding: 0;
      font-weight : 600;
      font-size : 1rem;

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
  background:#555;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

function NavBar() {
    let history = useHistory();
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    useEffect(
        () => {
            console.log(isLoggedIn())
            window.addEventListener('scroll', () => {
                console.log(isAuth())
                console.log('component did mount')
                const isTop = window.scrollY > 0;
                const nav = document.getElementById('nav');
                if (isTop){
                    nav.classList.add('scrolled');
                }else{
                    nav.classList.remove('scrolled');
                }
            })
            return () => {
                console.log('component did not mount')
                //window.removeEventListener('scroll')
            }
        }
    );
    return(
        <React.Fragment>
            <ToastContainer/>
            <Styles>
               <Navbar collapseOnSelect expand="lg" variant="dark" id='nav'>
                    <Navbar.Brand >
                        <Link to="/">
                        <img src={require('../assets/medical bio-09.png')}
                                width = '100%'
                                height = '100%'
                                alt="Medical and Biology Journal"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2}
                                      style={{paddingTop:'2%'}}
                            >
                            {isLoggedIn 
                               ?<Avatar>{user.first_name.charAt(0).toUpperCase()}</Avatar> 
                               :<Link to="/Author_Guideline">Author Guideline</Link>
                            }
                            </Nav.Link>
                            <Nav.Link eventKey={2}
                                      style={{paddingTop:'5%'}}
                            >
                                     <p>{user.first_name}{user.last_name}</p>
                            </Nav.Link>
                            <Nav.Link eventKey={2}
                                      style={{paddingTop:'5%'}}
                                      onClick={() => {
                                        signout(() => {
                                          toast.error('Signout Successfully');
                                          history.push('/');
                                        });
                                      }}
                            >
                               <FiPower/>                             
                            </Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
               </Navbar>
            </Styles>
        </React.Fragment>
    )
}

export default NavBar;