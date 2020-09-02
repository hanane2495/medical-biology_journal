import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
import {Tab, Nav} from 'react-bootstrap';

//components
import Archive from './Components/Archive'
import Dashboard from './Components/Dashboard'

//Styled components
const Styles = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'asideLeft main';
    grid-template-rows: 100%;
    grid-template-columns: 18% 82%;
    transition:  0.9s ;
    -moz-transition:  0.9s ; /* Firefox 4 */
    -webkit-transition:  0.9s ; /* Safari 和 Chrome */
    -o-transition:  0.9s ; /* Opera */
    background:#fff;
    overflow-y:hidden;
`;

const AsideLeft = styled.aside`
  grid-area: asideLeft;
  background: #F7F7F7;
  border-right: 1px solid #999;
  padding: 5% 3%;
`;
const Main = styled.main`
  grid-area: main;
  background: #fff;
  overflow-y:scroll;
  overflow-x:hidden;
  padding: 1%;
`;

function Profile() {
  const [key, setKey] = useState("first");
    const ActiveStyle = {
        background: "rgba(2,0,36,0.9)",
        color: "#fff"
    };
    const inActiveStyle = {
        ...ActiveStyle,
        background: "transparent",
        color: "#333"
    };


    return(
        <React.Fragment>
            <Styles>
            <Tab.Container 
               id="left-tabs-example" 
               defaultActiveKey={key}
               activeKey={key} 
               onSelect={key => setKey(key)}>
              <AsideLeft>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first"  
                              style={key === "first" ? ActiveStyle : inActiveStyle}
                    >
                      Dashboard
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"  
                              style={key === "second" ? ActiveStyle : inActiveStyle}
                    >
                      Archive
                    </Nav.Link>                  
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third"  
                              style={key === "third" ? ActiveStyle : inActiveStyle}
                    >
                      Author Guideline
                    </Nav.Link>                  
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth"  
                              style={key === "fourth" ? ActiveStyle : inActiveStyle}
                    >
                      Submit Article
                    </Nav.Link>                  
                  </Nav.Item>
                </Nav>
              </AsideLeft>
                <Main>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Dashboard/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h1>Archive</h1>
                      <Archive/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Main>
            </Tab.Container>
            </Styles>
        </React.Fragment>
    )
}

export default Profile;
