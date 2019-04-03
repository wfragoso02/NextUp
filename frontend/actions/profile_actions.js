import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

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
    }
}

export const fetchProfiles = () => dispatch => (
    ProfileApiUtil.fetchProfiles().then(profiles => dispatch(receiveProfiles(profiles)))
);

export const fetchProfile = (id) => dispatch => (
    ProfileApiUtil.fetchProfile(id).then(payload => dispatch(receiveProfile(payload)))
)