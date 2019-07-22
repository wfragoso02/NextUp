import * as GenresApiUtil from '../util/genre_api_util';
import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from './types';

const receiveGenres = (genres) => ({
	type: RECEIVE_ALL_GENRES,
	genres
});

const receiveGenre = (genre) => ({
	type: RECEIVE_GENRE,
	genre
});

export const fetchGenres = () => dispatch => (
	GenresApiUtil.fetchGenres().then(genres => dispatch(receiveGenres(genres)))
);

export const fetchGenre = (id) => dispatch => (
	GenresApiUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)))
);