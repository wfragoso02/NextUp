import { merge } from 'lodash';
import { RECEIVE_PROFILE, RECEIVE_LIST, RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/types';

export default (action, state = {}) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_LIST:
      return merge({}, action.list);
    case RECEIVE_LIST_ITEM:
      newState = merge({}, state);
      newState.video_ids.unshift(action.listItem.video_id);
      newState.videos.unshift(action.listItem.video);
      return newState;
    case REMOVE_LIST_ITEM:
      newState = merge({}, state);
      const index = newState.video_ids.indexOf(action.listItem.video_id);
      delete newState.video_ids[index];
      delete newState.videos[index];
      return newState;
    case RECEIVE_PROFILE:
      return merge({}, action.payload.list);
    default:
      return state;
  }
};