import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from '../actions/types';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GENRE:
      return Object.assign({}, state, { [action.genre.id]: action.genre });
    case RECEIVE_ALL_GENRES:
      return action.genres;
    default:
      return state;
  }
};