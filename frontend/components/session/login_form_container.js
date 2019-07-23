import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session || [],
    formType: 'Sign In'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(login(formUser)),
    formText: () => (<p className="form-text">New to Next Up? <Link className="session-a" to="/signup">Sign up now.</Link></p>),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);