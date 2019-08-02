import { RECEIVE_PROFILE, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/types';

const _nullState = {
  id: null
};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return Object.assign({}, state, { profile: action.payload.profile });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};