import React, { useState } from "react";

const editProfileModal = ({ profile, handleClose, updateProfile, deleteProfile, show, error }) => {
  const [state, setState] = useState({
    name: profile.name,
    image_url: profile.image_url,
    id: profile.id
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(state).then(handleClose);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteProfile(profile.id).then(handleClose);
  };

  const handleInput = (type) =>{
    return (e) => {
      setState({ ...state, [type]: e.target.value });
    };
  };

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const errorClass = error && state.name.length < 1 ? "error-edit-profile" : "";
  const modalError = error && state.name.length < 1 ? error : "";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="edit-profile-text">
          <h1>Edit Profile</h1>
        </div>
        <form>
          <div className="edit-form-mid">
            <img className="profile-pic" src={state.image_url} />
            <div className="edit-this-text">
              <input className={`edit-form-mid-text ${errorClass}`} type="text" value={state.name} onChange={handleInput('name')} />
            </div>
          </div>
          <h6 className="error-message-profile">{modalError}</h6>
          <div className="Edit-form-submit">
            <input className="edit-from-save-button" type="submit" onClick={handleSubmit} value="SAVE" />
            <button className="edit-from-save-cancel" onClick={handleClose} >CANCEL</button>
            <button className="edit-from-save-cancel" onClick={handleDelete}>DELETE PROFILE</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default editProfileModal;