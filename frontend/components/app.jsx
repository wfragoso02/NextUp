import React from 'react';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './session/splash_container';
import ProfileContainer from './profiles/profile_container';
import GenreIndexContainer from './genres/genre_container';
import videoContainer from "./videos/video_container";
import GenreShow from './genres/genre_show_container';
import VideoContainer from './videos/video_container';
import manageProfilesContainer from './profiles/manage_profiles_container';
import ListContainer from './list/list_container';


const App = () => (
  <div>
    <div className="home"></div>
    <div>
      <Switch>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <ProtectedRoute exact path="/home" component={ProfileContainer} />
        <ProtectedRoute exact path="/manage-profiles" component={manageProfilesContainer} />
        <ProtectedRoute exact path='/:profileId/videos/:videoId' component={VideoContainer} />
        <ProtectedRoute exact path="/:profileId" component={GenreIndexContainer} />
        <ProtectedRoute exact path="/:profileId/genre/:genreId" component={GenreShow} />
        <ProtectedRoute exact path='/:profileId/videos/:videoId' component={videoContainer} />
        <ProtectedRoute exact path='/:profileId/myList' component={ListContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
      </Switch>
    </div>
  </div>
);

export default App;