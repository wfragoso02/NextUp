import {connect} from 'react-redux';
import GenreShow from './genre_show';
import {fetchGenre} from '../../actions/genre_actions';




const msp = (state, ownProps) => {
    
    return{
        genre: state.entities.genres[ownProps.match.params.genreId]
    };
};

const mdp = dispatch => {
    return{
        fetchGenre: (id) => dispatch(fetchGenre(id))
    }
}

export default connect(msp, mdp)(GenreShow);