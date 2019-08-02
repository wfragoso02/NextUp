import { RECEIVE_VIDEO, RECEIVE_ALL_VIDEOS } from '../actions/types';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.video.id]: action.video });
    default:
      return state;
  }
};