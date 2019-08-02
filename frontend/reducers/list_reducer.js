import { RECEIVE_PROFILE, RECEIVE_LIST, RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/types';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_LIST:
      return Object.assign({}, action.list);
    case RECEIVE_LIST_ITEM:
      newState = Object.assign({}, state);
      newState.list_video_ids.unshift(action.listItem.video_id);
      return newState;
    case REMOVE_LIST_ITEM:
      newState = Object.assign({}, state);
      const index = newState.list_video_ids.indexOf(action.listItem.video_id);
      newState.list_video_ids = newState.list_video_ids.slice(0,index).concat(newState.list_video_ids.slice(index + 1));
      return newState;
    case RECEIVE_PROFILE:
      return Object.assign({}, action.payload.list);
    default:
      return state;
  }
};