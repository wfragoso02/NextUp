import {merge} from 'lodash';
import { RECEIVE_VIDEO } from '../actions/video_actions';

const videoReducer = (state = {}, action) => {
    let newState;
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_VIDEO:
            return merge({}, state, {[action.video.id]: action.video});
        default:
            return state;
    }
};

export default videoReducer;