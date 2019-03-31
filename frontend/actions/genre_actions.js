import * as GenresApiUtil from '../util/genre_api_util';

export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';

const receiveGenres = (genres) => {
    return{
        type: RECEIVE_ALL_GENRES,
        genres
    };
};

const receiveGenre = (genre) => {
    
    return{
        type: RECEIVE_GENRE,
        genre
    };
};

export const fetchGenres = () => dispatch => (
    GenresApiUtil.fetchGenres().then(genres => dispatch(receiveGenres(genres)))
);

export const fetchGenre = (id) => dispatch => (
    GenresApiUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)))
);