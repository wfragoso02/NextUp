import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session || [],
    formType: 'Sign Up'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(signup(formUser)),
    formText: () => (<p className="form-text">Already a Member? <Link className="session-a" to="/login">Sign In</Link></p>),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);