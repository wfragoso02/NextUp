import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import { fetchProfiles, fetchProfile } from '../../actions/profile_actions';

const msp = (state,ownProps) => {
    return{
        profiles: state.entities.profiles || {},
        profile: state.entities.profiles[ownProps.profileId] || {}
    }
}

const mdp = dispatch => {
    return{
        logout: () => dispatch(logout()),
        fetchProfiles: () => dispatch(fetchProfiles()),
        fetchProfile: (id) => dispatch(fetchProfile(id))
    };
};

export default connect(msp, mdp)(Nav);

