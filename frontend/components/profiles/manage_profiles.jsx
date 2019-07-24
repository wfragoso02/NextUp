import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewProfileModal from './new_profile_modal';
import EditProfileModal from './edit_profile_modal';

const ManageProfiles = props => {
  const [state, setState] = useState({
    showNew: false,
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });

  useEffect(() => {
    props.fetchProfiles();
  }, []);

  const showNewModal = () => {
    setState({ ...state, showNew: true });
  };

  const hideNewModal = () => {
    setState({ ...state, showNew: false });
    props.clearError();
  };

  const showEditModal = (idx) => {
    return (e) => {
      setState({ ...state, [idx]: true });
    };
  };

  const hideEditModal = (idx) => {
    return (e) => {
      setState({ ...state, [idx]: false });
    };
  };

  const profiles = props.profiles.map((profile, idx) => {
    return (
      <li key={idx} className="profile-item">
        <EditProfileModal clearError={props.clearError} error={props.error} deleteProfile={props.deleteProfile} updateProfile={props.updateProfile} profile={profile} show={state[idx]} handleClose={hideEditModal(idx)} />
        <button className="manage-profile-link" onClick={showEditModal(idx)}><img className="profile-pic" src={profile.image_url} /><p className="profile-name">{profile.name}</p></button>
      </li>
    )
  });

  let link;
  if (props.profiles[0]) {
    link = <Link to={`/${props.profiles[0].id}`} profile={props.profiles[0]}><img src={window.logo} className="logo2" /></Link>
  } else {
    link = " ";
  }
  let newProfile;
  if (profiles.length >= 5) {
    newProfile = null
  } else {
    newProfile = (
      <li className="profile-item">
        <button className="manage-profile-link" onClick={showNewModal}>
          <div className="temp-manage">

            <i className="fas fa-plus-circle add-new-profile" styles={{ display: "flex" }}></i>
          </div>
          <p className="profile-name">Add Profile</p>
        </button>
        <NewProfileModal clearError={props.clearError} error={props.error} createProfile={props.createProfile} show={state.showNew} handleClose={hideNewModal} />
      </li>
    )
  }

  return (
    <div>
      {link}
      <div className="profiles-page">
        <h1 className="whos-watching">Manage Profiles:</h1>
        <ul className="profiles">
          <div className="profile-container">
            {profiles}
            {newProfile}
          </div>
        </ul>
      </div>
      <Link className="done" to="/" ><h2 >DONE</h2></Link>
    </div>
  )
}

export default ManageProfiles;