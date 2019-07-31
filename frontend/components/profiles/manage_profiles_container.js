import { connect } from 'react-redux';
import manageProfiles from './manage_profiles';
import { fetchProfiles, createProfile, updateProfile, deleteProfile } from '../../actions/profile_actions';
import { deleteRating } from '../../actions/rating_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = state => {
  return {
    profiles: Object.values(state.entities.profiles),
    error: state.errors.profile[0]
  };
};

const mdp = dispatch => {
  return {
    fetchProfiles: () => dispatch(fetchProfiles()),
    createProfile: (profile) => dispatch(createProfile(profile)),
    updateProfile: (profile) => dispatch(updateProfile(profile)),
    deleteProfile: (id) => dispatch(deleteProfile(id)),
    clearError: () => dispatch(clearErrors()),
    deleteRating: (data) => dispatch(deleteRating(data))
  };
};

export default connect(msp, mdp)(manageProfiles);