// import { RECEIVE_LIST } from '../actions/list_actions';
import {merge } from 'lodash';
import { RECEIVE_PROFILE } from '../actions/profile_actions';
import { RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/list_item_actions';


const listReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_LIST_ITEM:
            newState = state;
            newState.video_ids.unshift(action.listItem.video_id);
            newState.videos.unshift(action.listItem.video);
            return newState;
        case REMOVE_LIST_ITEM:
            newState = state;
            const index = newState.video_ids.indexOf(action.listItem.video_id);
            delete newState.video_ids[index];
            delete newState.videos[index]
            return newState;
        case RECEIVE_PROFILE:
            return merge({}, action.payload.list);
        default:
            return state;
    }
}

export default listReducer;