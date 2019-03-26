import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session || [],
        formType: 'signup'
    };
};
const mdp = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(signup(formUser))
    };
};

export default connect(msp, mdp)(SessionForm);