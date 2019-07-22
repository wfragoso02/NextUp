import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ProfileReducer from './profiles_reducer';
import GenreReducer from './genres_reducer';
import videoReducer from './video_reducer';
import ListsReducer from './list_reducer';

export default combineReducers({
  users: usersReducer,
  profiles: ProfileReducer,
  genres: GenreReducer,
  videos: videoReducer,
  list: ListsReducer
});