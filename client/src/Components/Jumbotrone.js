import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Jumbotron, InputGroup, FormControl, Button} from 'react-bootstrap'


//images

//icons
import {FiSearch} from 'react-icons/fi'

//components
import HomeAnimation from './HomeAnimation'
import { Link } from 'react-router-dom';

//Styled components
const Styles = styled.div`

.jumbotron{
      transition : 0.4s;
      border-radius : 0;
      height : 65vh;
      background: linear-gradient(0deg, rgba(63,63,179,1) 0%, rgba(14,14,99,1) 55%, rgba(2,0,36,1) 100%);  
      font-size:36px;
      @media only screen and (max-width: 790px) {
           font-size:30px
        }
        @media only screen and (max-width: 590px) {
           font-size:22px
        }
        @media only screen and (max-width: 450px) {
           font-size:15px
        }
    }
     
    #suggested{
        color : white;
        opacity: 0.5;
        text-align:center;
        font-size:0.5em;
        padding:2vh;
    }
    .content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-top:8vh;
    }

    .input-group {
        width:45vw;
        height:9vh;
        @media only screen and (max-width: 790px) {
            width:59vw;
            height:8vh;
        }
        @media only screen and (max-width: 490px) {
            width:70vw;
            height:8vh;
        }
    }
    .form-control{
        height:100%;
    }
    .content-text{
        font-size:1em;
        font-weight:bolder;
        color:white;
    }

    .btn-outline-secondary{
        background: rgba(240, 85, 18, 0.83);
        color:white;
        z-index: 0;
        font-weight: bold;
        &:hover{
            background-color : #4d8abc;
        }
    }
    
`;

//window size function 
function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }


function Jumbotrone() {
  
    //window size
    const size = useWindowSize();

    return (
      <React.Fragment>
           <Styles>
           <Jumbotron fluid>
                <HomeAnimation/>
                <div className='content'>
                    <p className='content-text'>Discover Medical Knowledge And stay </p>
                    <p className='content-text'> connected to The World of Biology. </p>
                    <InputGroup className='search-section'>
                        <FormControl
                          placeholder="Search for articles..."
                          aria-label="search"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                           <Button classeName='search-button' variant="outline-secondary">
                               <Link to='/Search_articles' style={{color:'white'}}>
                                    { size.width< 790 ? <FiSearch/> : 'Search' }
                               </Link>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                   <p id='suggested'>Suggested : Title of articles, Author's name, subject, field... </p>
                </div>  
            </Jumbotron>
           </Styles>
      </React.Fragment>
      
    );
  }
  
  export default Jumbotrone;

  