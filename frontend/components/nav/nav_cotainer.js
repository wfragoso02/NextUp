import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import { fetchProfiles } from '../../actions/profile_actions';

const msp = (state,ownProps) => {
    return{
        profiles: state.entities.profiles || {},
        profile: state.entities.profiles[ownProps.profile.id] || {}
    }
}

const mdp = dispatch => {
    return{
        logout: () => dispatch(logout()),
        fetchProfiles: () => dispatch(fetchProfiles())
    };
};

export default connect(msp, mdp)(Nav);

