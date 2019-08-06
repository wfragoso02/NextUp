import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewProfileModal from './new_profile_modal';
import EditProfileModal from './edit_profile_modal';

const ManageProfiles = props => {
  const [showNew, changeModalShow] = useState(false);
  const [editModal, changeEditModal] = useState({});

  useEffect(() => {
    props.fetchProfiles();
  }, []);

  const showNewModal = () => {
    changeModalShow(true);
  };

  const hideNewModal = () => {
    changeModalShow(false);
    props.clearError();
  };

  const showEditModal = (idx) => {
    return (e) => {
      changeEditModal({...editModal, [idx]: true});
    };
  };

  const hideEditModal = (idx) => {
    return (e) => {
      changeEditModal({...editModal, [idx]: false});
    };
  };

  const profiles = props.profiles.map((profile, idx) => {
    return (
      <li key={idx} className="profile-item">
        <EditProfileModal 
        deleteRating={props.deleteRating} 
        clearError={props.clearError} 
        error={props.error} 
        deleteProfile={props.deleteProfile} 
        updateProfile={props.updateProfile} 
        profile={profile} 
        show={editModal[idx]} 
        handleClose={hideEditModal(idx)} />
        <button className="manage-profile-link" onClick={showEditModal(idx)}><img className="profile-pic" src={profile.image_url} /><p className="profile-name">{profile.name}</p></button>
      </li>
    )
  });

  const link = props.profiles[0] ? 
    <Link to={`/${props.profiles[0].id}`} profile={props.profiles[0]}><img src={window.logo} className="logo2" /></Link>
  :
    null
  ;

  const newProfile = profiles.length >= 5 ? null :
    <li className="profile-item">
      <button className="manage-profile-link" onClick={showNewModal}>
        <div className="temp-manage">
          <i className="fas fa-plus-circle add-new-profile" styles={{ display: "flex" }}></i>
        </div>
        <p className="profile-name">Add Profile</p>
      </button>
      <NewProfileModal clearError={props.clearError} error={props.error} createProfile={props.createProfile} show={showNew} handleClose={hideNewModal} />
    </li>
  ;

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