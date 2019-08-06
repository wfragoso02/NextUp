import * as APIUtil from '../util/session_api_util';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSIONS_ERRORS, CLEAR_ERRORS } from './types';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSIONS_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (formUser) => dispatch => (
  APIUtil.login(formUser).then((user) => (dispatch(receiveCurrentUser(user))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
));

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (dispatch(logoutCurrentUser())),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
));

export const signup = (formUser) => dispatch => (
  APIUtil.signup(formUser).then((user) => (dispatch(receiveCurrentUser(user))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
));