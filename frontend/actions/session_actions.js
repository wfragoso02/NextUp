
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSIONS_ERRORS = "RECEIVE_SESSIONS_ERRORS";

import * as APIUtil from '../util/session_api_util';

const receiveCurrentUser = (currentUser) => (
  {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
);

const logoutCurrentUser = () => (
  {
    type: LOGOUT_CURRENT_USER
  }
);

const receiveErrors = (errors) => (
  {
    type: RECEIVE_SESSIONS_ERRORS,
    errors
  }
);

export const login = (formUser) => dispatch => (
  APIUtil.login(formUser).then(
    (user)=>(dispatch(receiveCurrentUser(user))), 
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  ));
  
export const logout = () => dispatch => (
  APIUtil.logout().then(
    ()=>(dispatch(logoutCurrentUser())),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  ));

export const signup = (formUser) => dispatch => (
  APIUtil.signup(formUser).then(
    (user) => (dispatch(receiveCurrentUser(user))), 
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  ));