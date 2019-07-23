import { login } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Facebook from './facebook';

const mdp = (dispatch) => {
  return {
    signup: (formUser) => dispatch(signup(formUser)),
    login: (formUser) => dispatch(login(formUser)),
  };
};

export default connect(null, mdp)(Facebook);