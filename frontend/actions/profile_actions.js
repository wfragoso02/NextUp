import * as ProfileApiUtil from '../util/profile_api_util';
import { RECEIVE_ALL_PROFILES, RECEIVE_PROFILE, REMOVE_PROFILE } from './types'

const receiveProfiles = (profiles) => ({
    type: RECEIVE_ALL_PROFILES,
    profiles
});

const receiveProfile = (payload) => ({
    type: RECEIVE_PROFILE,
    payload
});

const removeProfile = (payload) => ({
    type: REMOVE_PROFILE,
    payload
});

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