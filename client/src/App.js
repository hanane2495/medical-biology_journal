import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Activate from './Activate';
import Forget from './Forget';
import Reset from './Reset';
import Author_guideline from './Author_guideline'; 
import  NavBar  from './Components/NavBar';
import PrivateNavbar from './Components/PrivateNavbar'
import FooterPage from './Components/Footer';
import SearchRes from './SearchResults';
import Profile from './Profile';

//Private Routes
import PrivateRoute from './Routes/PrivateRoute';

//functions
import {isAuth} from './helpers/auth'

function App() {
  const[user, setUser] = useState(null)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  },[]);
  return (
    <React.Fragment>
      <Router basename='/'>
      <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path='/' component={props => <Home/>}/>
          <Route  path='/Login' component={props => <Login setUser={setUser}/>}/>
          <Route  path='/Register' component={props => <Register/>}/>
          <Route  path='/users/activate/:token' component={props => <Activate  {...props}/>}/>
          <Route  path='/users/password/forget' component={props => <Forget  {...props}/>}/>
          <Route  path='/users/password/reset/:token' component={props => <Reset  {...props}/>}/>
          <Route  path='/Author_Guideline' component={props => <Author_guideline/>}/>
          <Route  path='/Search_articles' component={props => <SearchRes/>}/>
          <PrivateRoute path="/Profile" exact component={props => <Profile/>} />
        </Switch>
        <FooterPage user={user}/>
      </Router>
      
    </React.Fragment>
  );
}

export default App;

