import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import { fetchProfiles, fetchProfile } from '../../actions/profile_actions';
import { fetchList } from '../../actions/list_actions';

const msp = (state,ownProps) => {
    return{
        profiles: state.entities.profiles || {},
        profile: state.entities.profiles[ownProps.profileId] || {},
        list: state.entities.list
    }
}

const mdp = dispatch => {
    return{
        logout: () => dispatch(logout()),
        fetchProfiles: () => dispatch(fetchProfiles()),
        fetchProfile: (id) => dispatch(fetchProfile(id)),
        fetchList: (id) => dispatch(fetchList(id))
    };
};

export default connect(msp, mdp)(Nav);

