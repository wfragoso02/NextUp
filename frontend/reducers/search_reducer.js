import { RECEIVE_VIDEOS } from '../actions/types';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_VIDEOS:
            return action.videos;
        default:
            return state;
    }
};