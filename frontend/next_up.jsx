import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logout} from './actions/session_actions';
import { fetchProfiles} from './actions/profile_actions';
import * as ProfileApiUtil from './util/profile_api_util';
import * as GenresApiUtil from './util/genre_api_util';
import * as VideoApuUtil from './util/video_api_util';
// import 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  //testing
  // window.fetchProfiles = ProfileApiUtil.fetchProfiles;
  window.fetchVideo = VideoApuUtil.fetchVideo;
  window.fetchGenres = GenresApiUtil.fetchGenres;
  window.getState = store.getState;
  window.dispatch= store.dispatch;
  window.logout = logout;
  //testing

  ReactDOM.render(<Root store={store}/>, root)
});