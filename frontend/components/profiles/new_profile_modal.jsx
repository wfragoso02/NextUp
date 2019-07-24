import React, { useState } from "react";

const newProfileModal = props => {
  const images = ['https://s3.amazonaws.com/nextup-seed/marcus.png', 'https://s3.amazonaws.com/nextup-seed/nicolas.png', "https://art-s.nflximg.net/a7774/574ffd46d2bcef69802752f39db6320328fa7774.png", "https://occ-0-999-1001.1.nflxso.net/art/16763/5ef8a49350c96ef8ef702b554285b23e4f616763.png", "https://occ-0-999-1001.1.nflxso.net/art/6f579/22a7771cd88f0743bbdc28030498013d9cf6f579.png", "https://occ-0-999-1001.1.nflxso.net/art/179a8/514618e1d7554648a39e294f43585ddba07179a8.png", "https://occ-0-999-1001.1.nflxso.net/art/59fbc/1ce9bcd3d6f26195c1ab49cd2c691f5fc8f59fbc.png"];
  const image_url = images[Math.floor(images.length * Math.random())];
  const [state, setState] = useState({
    name: '',
    image_url: image_url
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProfile(state).then(() => props.handleClose()).then(() => {
      setState({
        name: '',
        image_url: images[Math.floor(images.length * Math.random())],
      });
    });
  };

  const handleInput = (type) => {
    return (e) => {
      setState({ ...state, [type]: e.target.value });
    };
  };

  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  const errorClass = props.error && state.name.length < 1 ? "error-profile" : "edit-form-mid-text";
  const error = props.error && state.name.length < 1 ? props.error : "";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="new-profile-text">
          <h1 className="add-profile">Add Profile</h1>
          <h3 className="new-profile-small-text">Add a profile for another person watching Nextup</h3>
        </div>
        <form >
          <div className="edit-form-mid">
            <img className="profile-pic" src={state.image_url} alt="" />
            <input className={`${errorClass}`} type="text" value={state.name} onChange={handleInput('name')} placeholder="Name"/>
          </div>
          <h6 className="error-message-profile">{error}</h6>
          <div className="Edit-form-submit">
            <input onClick={handleSubmit} className="edit-from-save-button" type="submit" value="CONTINUE" />
            <button className="edit-from-save-cancel" onClick={props.handleClose} >CANCEL</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default newProfileModal;