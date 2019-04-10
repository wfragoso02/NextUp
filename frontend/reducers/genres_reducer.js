import { merge } from 'lodash';
import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from '../actions/genre_actions';


const genreReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_GENRE:
            return merge({}, state, {[action.genre.id]: action.genre});
        case RECEIVE_ALL_GENRES:
            return action.genres;
        default:
            return state;
    }
};

export default genreReducer;