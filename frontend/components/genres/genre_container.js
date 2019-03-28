import { connect } from 'react-redux';
import GenreIndex from './genre_index';
import { fetchGenres } from '../../actions/genre_actions';

const msp = state => {
    return{
        genres: Object.values(state.entities.genres)
    };
};

const mdp = dispatch => {
    return{
        fetchGenres: () => dispatch(fetchGenres())
    };
};

export default connect(msp, mdp)(GenreIndex);