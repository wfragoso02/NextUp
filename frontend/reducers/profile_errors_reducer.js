import { RECEIVE_PROFILE_ERRORS, CLEAR_ERRORS } from '../actions/types';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return ([]);
    default:
      return ([]);
  }
};