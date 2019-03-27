import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ProfileReducer from './profiles_reducer';

export default combineReducers ({
  users: usersReducer,
  profiles: ProfileReducer
});