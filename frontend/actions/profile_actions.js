import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';

const receiveProfiles = (profiles) => {
    return{
        type: RECEIVE_ALL_PROFILES,
        profiles
    };
};
const receiveProfile = (payload) => {
    return{
        type: RECEIVE_PROFILE,
        payload
    };
};

const removeProfile = (payload) => {
    return{
        type: REMOVE_PROFILE,
        payload
    };
};

export const fetchProfiles = () => dispatch => (
    ProfileApiUtil.fetchProfiles().then(profiles => dispatch(receiveProfiles(profiles)))
);

export const fetchProfile = (id) => dispatch => (
    ProfileApiUtil.fetchProfile(id).then(payload => dispatch(receiveProfile(payload)))
)

export const createProfile = profile => dispatch => (
    ProfileApiUtil.createProfile(profile).then(payload => dispatch(receiveProfile(payload)))
);
  
  export const updateProfile = profile => dispatch => (
    ProfileApiUtil.updateProfile(profile).then(payload => dispatch(receiveProfile(payload)))
  );
  
  export const deleteProfile = id => dispatch => (
    ProfileApiUtil.deleteProfile(id).then(payload => dispatch(removeProfile(payload)))
  );