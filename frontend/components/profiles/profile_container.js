import { connect } from 'react-redux';
import ProfileIndex from './profile_index';
import { fetchProfiles } from '../../actions/profile_actions';

const msp = state => {
    return{
        profiles: Object.values(state.entities.profiles)
    };
};

const mdp = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles())
    };
};

export default connect(msp, mdp)(ProfileIndex);