import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBFooter } from "mdbreact";
import styled from 'styled-components';

//icons 
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";


const Styles = styled.div`
   .font-small{
     background: rgba(63,63,179,1);
     color:white;
   }
   .footer-copyright{
     color : white;
     border-top : solid;
     margin-top: 2%;
   }
   .footer-row{
     display:flex;
     flex-direction:row;
     padding: 0 2%;
     @media only screen and (max-width: 790px) {
       flex-direction:column;
       justify-content:center;
     }
     
   }
   .footer-column{
     display:flex;
     flex-direction:column;
     font-size:18px;
     width:33%;
     @media only screen and (max-width: 790px) {
           font-size:20px;
           width:100%;
           align-items:center;
           margin-bottom:10%;
     }
     @media only screen and (max-width: 450px) {
           font-size:18px
     }
   }
   .title{
     font-size:0.9em;
     font-weight:600;
   }

   .list-unstyled, a {
     color:white;
     font-size:0.9em;
     text-decoration:none;
     &:hover{
       color:#cd4339;
     }
   }
   .icon-section{
    width:100%;
    display:flex; 
    flex-direction:row;
    @media only screen and (max-width: 790px) {
       justify-content:center;
     }
   }
   .Style-icon{
      width:1.2em;
      height:1.2em;
      margin-right:2%;
      &:hover{
        color:#cd4339;
      }
      @media only screen and (max-width: 450px) {
        width:1em;
      height:1em;
     }
   }
   .description{
     font-size:0.8em;
     @media only screen and (max-width: 790px) {
           text-align:center;
     }
   }

   .contact-input{
     background: rgba(63,63,179,1);
     color:white;
     border:none;
     border-bottom: solid white;
     width: 100%;
     margin-bottom:2%;
     font-size:0.8em;
   }
   .bouton-contact{
     background:#4d8abc;
     color:whitesmoke;
     border:none;
     font-size:0.8em;
     font-weight:700;
     width:30%;
     height:12%;
     border-radius:5px;
     &:hover{
       color:#cd4339;
     }
   }
`;


const FooterPage = (props) => {
  
  return (
    <Styles>
      {props.user !== null ? null 
    :<MDBFooter color="blue" className="font-small pt-4 ">
        <div className='footer-row'>
          <div className='footer-column'>
            <p className="title">Medical & Biology Journal</p>
            <p className='description'>
              Exercitation culpa nostrud est velit qui culpa.
              Lorem cupidatat velit magna aliquip elit aliquip.  
            </p>
            <p className='description'><FaPhone style={{ height: '20px', width:'20px'}}/> 043 79 04 05</p>
            <p className='description'><MdMail style={{ height: '20px', width:'20px'}}/> Yafour.nabil@yahoo.fr</p>
            <p className='icon-section'>
              <FaFacebookF className='Style-icon'/>
              <FaInstagram className='Style-icon' />
              <FaLinkedin className='Style-icon'/>
              <FaTwitter className='Style-icon'/>
            </p>
          </div>
          <div className='footer-column' style={{paddingLeft:'5%'}}>
            <p className="title">Quick Links</p>
              <p className="list-unstyled">
                 <Link to="#">Medical and Biology Journal</Link>
              </p>
              <p className="list-unstyled">
              <Link to="#">Submit an article</Link>
              </p>
              <p className="list-unstyled">
              <Link to="#">Author Guideline</Link>
              </p>
              <p className="list-unstyled">
              <Link to="#">Login</Link>
              </p>
              <p className="list-unstyled">
              <Link to="#">Register</Link>
              </p>
          </div>
          <div className='footer-column'>
            <p className="title">Contact Us</p>
            <form style={{display:'block', height:'70%'}} >
                <input type='email' name='email' placeholder='Your email' className=' contact-input'/>
                <textarea name='message' placeholder='Your message...' className=' contact-input' style={{height:'70%'}}/>
            </form>
            <button type='submit' className='bouton-contact'><IoIosSend/> send</button>
          </div>
        </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.monsterstudio.org/"> Monster studio </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  }
    </Styles>
  );
}

export default FooterPage;