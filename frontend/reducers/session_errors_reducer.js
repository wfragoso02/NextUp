import { RECEIVE_SESSIONS_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSIONS_ERRORS:
      return action.errors;
    default:
      return ([]);
  }
};

export default sessionErrorsReducer;