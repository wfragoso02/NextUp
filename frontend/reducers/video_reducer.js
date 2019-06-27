import {merge} from 'lodash';
import { RECEIVE_VIDEO } from '../actions/types';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_VIDEO:
            return merge({}, state, {[action.video.id]: action.video});
        default:
            return state;
    }
};