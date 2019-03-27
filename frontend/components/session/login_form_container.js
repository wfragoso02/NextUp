import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session || [],
        formType: 'Sign In'
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(login(formUser)),
        formText: () => (<p>New to Next Up? <Link to="/signup">Sign up now.</Link></p>)
    };
};

export default connect(msp, mdp)(SessionForm);