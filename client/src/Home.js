//libraries
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button, InputGroup, FormControl, Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';


//Components
import Jumbotrone from './Components/Jumbotrone';
import Tabulation from './Components/Tabulation';

//icons
import {FiSearch} from 'react-icons/fi'


//images
import background_1 from './assets/background5.png'
import background from './assets/background6.png'
import editor from './assets/editor.jpg'
import logo from './assets/medical bio-08.png'


//Styled components
const Styles = styled.div`
    
    .submit-article-section{
        background-image:url(${background});
        min-height:400px;

        position:relative;
        background-position:center;
        background-attachment:fixed;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        font-size:36px;
        @media only screen and (max-width: 790px) {
           font-size:30px
        }
        @media only screen and (max-width: 490px) {
           font-size:28px
        }
        @media only screen and (max-width: 380px) {
           font-size:22px
        }
    }
    .submit-text{
        width:100%;
        color:white;
        font-size:1em;
        text-shadow: 10px black;
        text-align:center;
        font-weight:bolder;
    }
    .submit-button{
        background: rgba(240, 85, 18, 0.83);
        color:white;
        height:auto;
        width:23%;
        border:none;
        border-radius:10px;
        font-weight:600;
        font-size:0.8em;
        margin-top:1%;
        &:hover{
            color:rgba(63,63,179,1);
            text-decoration:none;
        }
        @media only screen and (max-width: 790px) {
           width:30%;
           margin-top:3%;
        }
        @media only screen and (max-width: 490px) {
           width:60%;
           margin-top:3%;
        }
        @media only screen and (max-width: 380px) {
           width:60%;
           margin-top:3%;
        }
    }
    
    
    .about-section{
        background-image:url(${background_1});
        position:relative;
        background-attachment:scroll;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:2% 5%;
        font-size:36px;
        @media only screen and (max-width: 790px) {
           font-size:30px;
           text-align:center;
        }
        @media only screen and (max-width: 320px) {
           font-size:28px;
           text-align:center;
        }
    }
    .big_title{
        color: rgba(63,63,179,1);
        font-weight:700;
        font-size:1em;
        text-align:center;
        &:after{
            content:"";
             background: rgba(63,63,179,1);
             display:block;
             height:3px;
             width:170px;
             margin: 5px auto 20px; 
             
        }
        @media only screen and (max-width: 790px) {
           margin:5% 0;
        }
        @media only screen and (max-width: 320px) {
            margin:5% 0;
        }
    }
    .section-row{
        display:flex;
        flex-direction:row;
        @media only screen and (max-width: 790px) {
            flex-direction:column;
        }
    }

    .section-column{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:2%;
    }
    .section-column-editor{
        display:flex;
        flex-direction:column;
        align-items:left;
        padding:1% 5%;
    }
    .editor-title{
       text-align:left; 
       font-size:0.7em;
       font-weight:bold;
       color:#777;
       @media only screen and (max-width: 790px) {
            text-align:center;
        }
        @media only screen and (max-width: 320px) {
            text-align:center;
        }
    }
    .editor-description{
        font-size:0.5em;
        @media only screen and (max-width: 790px) {
            text-align:center;
        }
        @media only screen and (max-width: 320px) {
            text-align:center;
        }
    }
    
    .about{
        text-align:Left;
        font-size:0.5em;
        @media only screen and (max-width: 790px) {
            text-align:center;
        }
        @media only screen and (max-width: 320px) {
            text-align:center;
        }
    }
    .logo{
        padding-bottom:7%;
        height: 45vh; 
        width:35vw;
        @media only screen and (max-width: 790px) {
            height: 40vh; 
            width:60vw;
        }
        @media only screen and (max-width: 320px) {
            height:40vh; 
            width:100vw;
        }
    }
`;



//Home page 
function Home() {

    //collapse abstract
    const [open, setOpen] = useState(false);
    

    return (
        <React.Fragment>
          <Styles>
            <Jumbotrone/>
            <Tabulation/>
            <div className='submit-article-section'>
                <div className="submit-text">
                    Join our community and <br/>share your knowledge.<br/> 
                    <Button className='submit-button'>Submit an article</Button>
                </div>
            </div>
                <section className='about-section'> 
                    <h3 className='big_title'>A bout Our Journal</h3> 
                    <div className='section-row'>
                        <div className='section-column'>
                            <p className='about'>
                                Medical and Biology Journal is a peer-reviewed, open access, current periodical journal belonging 
                                to the Department of Family Medicine of Yıldırım Beyazıt University, Faculty of Medicine.<br/>
                                All article evaluation and publishing processes are completely afree of charge. 
                                Our journal is published four times annually and is listed in EBSCOhost, Google Scholar.
                                <br/>
                                Our Journal covers the following fields :<br/>
                            
                            <Link 
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'2%'}}
                                > 
                                Read more
                            </Link>
                            </p>
                        </div>            
                        <div className='section-column'>
                             <img alt='Medical and biology journal' src={logo} className='logo'/>
                        </div>
                    </div>
                </section>
                <section className='about-section'>  
                    <h3 className='big_title'>Editor-in-chief</h3>
                    <div className='section-row'>
                        <div className='section-column-editor'>
                            <h3 className='editor-title'>Professor YAFOUR, EHU, Algeria</h3>
                            <p className='editor-description'>Dr. Yafour's research has centred on screening, early detection and treatment of oral cancer
                                . His aspiration for high quality research for cancer can be seen from his love of science 
                                and dedication to producing research in the specialty. Apart from being Editor-in-Chief 
                                of MBJ, he has published a total of 330 publications in his area of expertise.<br/>
                            
                            <Link 
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'2%'}}
                                > 
                                Read more
                            </Link>
                            </p>
                        </div>  
                        <div className='section-column-editor'>
                            <h3 className='editor-title'>Professor Brahimi, EHU, Algeria</h3>
                            <p className='editor-description'>Dr. Yafour's research has centred on screening, early detection and treatment of oral cancer
                                . His aspiration for high quality research for cancer can be seen from his love of science 
                                and dedication to producing research in the specialty. Apart from being Editor-in-Chief 
                                of MBJ, he has published a total of 330 publications in his area of expertise.<br/>
                           
                            <Link 
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'2%'}}
                                > 
                                Read more
                            </Link>
                            </p>
                        </div>
                    </div>
                </section>
          </Styles>
      </React.Fragment>
    );
  }
  
  export default Home;

  /**#3f3fb3 
   * 

   * 
  */