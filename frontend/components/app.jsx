import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './session/splash_container';
import ProfileContainer from './profiles/profile_container';
import GenreIndexContainer from './genres/genre_container';
import Footer from './footer';


const App = () => (
  <div>
    <div className="home">
    </div>
    <div>
      <Switch>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <ProtectedRoute exact path="/home" component={ProfileContainer} />
        <ProtectedRoute exact path="/:profileId" component={GenreIndexContainer} />
        <AuthRoute exact path="/" component={SplashContainer}/>
      </Switch>
    </div>
      
      
  </div>
);

export default App;