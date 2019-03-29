import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

const receiveProfiles = (profiles) => {
    return{
        type: RECEIVE_ALL_PROFILES,
        profiles
    };
};
const receiveProfile = (profile) => {
    return{
        type: RECEIVE_PROFILE,
        profile
    }
}

export const fetchProfiles = () => dispatch => (
    ProfileApiUtil.fetchProfiles().then(profiles => dispatch(receiveProfiles(profiles)))
);

export const fetchProfile = (id) => dispatch => (
    ProfileApiUtil.fetchProfile(id).then(profile => dispatch(receiveProfile(profile)))
)