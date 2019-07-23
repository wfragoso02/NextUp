import { RECEIVE_ALL_VIDEOS } from '../actions/types';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};