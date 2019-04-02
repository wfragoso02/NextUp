import { RECEIVE_SESSIONS_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSIONS_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return ([]);
    default:
      return ([]);
  }
};

export default sessionErrorsReducer;