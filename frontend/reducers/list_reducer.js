// import { RECEIVE_LIST } from '../actions/list_actions';
import {merge } from 'lodash';
import { RECEIVE_PROFILE } from '../actions/profile_actions';


const listReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_PROFILE:
            return merge({}, {[action.payload.list.id]: action.payload.list});
        default:
            return state;
    }
}

export default listReducer;