import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mdp = dispatch => {
    return{
        logout: () => dispatch(logout())
    };
};

export default connect(null, mdp)(Nav);

