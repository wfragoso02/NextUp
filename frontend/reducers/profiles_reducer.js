import { RECEIVE_ALL_PROFILES}from '../actions/profile_actions';
import { merge } from 'lodash';

const profileReducer = (state ={}, action) => {
    let newState;
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_PROFILES:
            return action.profiles;
        default:
            return state;
    }
};


export default profileReducer;