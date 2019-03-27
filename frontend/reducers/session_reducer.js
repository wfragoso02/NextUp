import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullState = {
  id: null
};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, {id: action.currentUser.id});
    case LOGOUT_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};