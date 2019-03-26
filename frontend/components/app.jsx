import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <div className="home">
      <h1>Next Up</h1>
      
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/signup'>Signup</Link>
    </div>
    <div>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
    </div>
  </div>
);

export default App;