import { connect } from 'react-redux';
import GenreIndex from './genre_index';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchProfile } from '../../actions/profile_actions';
import { fetchList } from '../../actions/list_actions';

const msp = (state, ownProps) => {

    return{
        genres: Object.values(state.entities.genres),
        profile: state.entities.profiles[ownProps.match.params.profileId] || {},
        list: state.entities.list || {}
    };
};

const mdp = dispatch => {
    return{
        fetchGenres: () => dispatch(fetchGenres()),
        fecthProfile: (id) => dispatch(fetchProfile(id)),
        fetchList: (id) => dispatch(fetchList(id))
    };
};

export default connect(msp, mdp)(GenreIndex);