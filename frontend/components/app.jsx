import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './session/splash_container';
import ProfileContainer from './profiles/profile_container';


const App = () => (
  <div>
    <div className="home">
    </div>
    <div>
      <ProtectedRoute path="/home" component={ProfileContainer} />
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <AuthRoute exact path="/" component={SplashContainer}/>
      <div className="Footer">
        <p>Footer Goes Here</p>
      </div>
    </div>
  </div>
);

export default App;