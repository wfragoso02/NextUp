import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';

const receiveProfiles = (profiles) => {
    return{
        type: RECEIVE_ALL_PROFILES,
        profiles
    };
};

export const fetchProfiles = () => dispatch => (
    ProfileApiUtil.fetchProfiles().then(profiles => dispatch(receiveProfiles(profiles)))
);