import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form';
import { AuthRoute } from '../util/route_util';
import Splash from './session/splash';


const App = () => (
  <div>
    <div className="home">
    </div>
    <div>
      <Route exact path="/" component={Splash}/>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <div className="Footer">
        <p>Footer Goes Here</p>
      </div>
    </div>
  </div>
);

export default App;