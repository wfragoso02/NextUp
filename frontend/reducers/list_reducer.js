import { merge } from 'lodash';
import { RECEIVE_PROFILE, RECEIVE_LIST, RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/types';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_LIST:
      return merge({}, action.list);
    case RECEIVE_LIST_ITEM:
      newState = merge({}, state);
      newState.list_video_ids.unshift(action.listItem.video_id);
      newState.videos.unshift(action.listItem.video);
      return newState;
    case REMOVE_LIST_ITEM:
      newState = merge({}, state);
      const index = newState.list_video_ids.indexOf(action.listItem.video_id);
      newState.list_video_ids = newState.list_video_ids.slice(0,index).concat(newState.list_video_ids.slice(index + 1));
      newState.videos = newState.videos.slice(0,index).concat(newState.videos.slice(index + 1));
      return newState;
    case RECEIVE_PROFILE:
      return merge({}, action.payload.list);
    default:
      return state;
  }
};