import { merge } from 'lodash';
import { RECEIVE_ALL_GENRES } from '../actions/genre_actions';


const genreReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_GENRES:
            return action.genres;
        default:
            return state;
    }
};

export default genreReducer;