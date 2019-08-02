import { RECEIVE_ALL_PROFILES, RECEIVE_PROFILE, REMOVE_PROFILE } from '../actions/types';

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_PROFILE:
      newState = Object.assign({}, state);
      delete newState[action.payload.profile.id];
      return newState;
    case RECEIVE_ALL_PROFILES:
      return action.profiles;
    case RECEIVE_PROFILE:
      return Object.assign({}, state, { [action.payload.profile.id]: action.payload.profile });
    default:
      return state;
  }
};