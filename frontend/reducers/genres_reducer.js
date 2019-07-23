import { merge } from 'lodash';
import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from '../actions/types';

export default (action, state = {}) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GENRE:
      return merge({}, state, { [action.genre.id]: action.genre });
    case RECEIVE_ALL_GENRES:
      return action.genres;
    default:
      return state;
  }
};