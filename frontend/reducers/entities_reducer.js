import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ProfileReducer from './profiles_reducer';
import GenreReducer from './genres_reducer';

export default combineReducers ({
  users: usersReducer,
  profiles: ProfileReducer,
  genres: GenreReducer
});