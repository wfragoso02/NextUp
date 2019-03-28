import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';


const mdp = dispatch => {
    return{
        demo: (user) => dispatch(login(user))
    };
};

export default connect(null ,mdp)(Splash);