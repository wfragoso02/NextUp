import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
  return {
    profile: state.session.profile
  };
};

const GenreContent = ({ video, closeContent, profile, id }) => {
  if (!video) return (<div></div>);
  
  const descriptionIndex = video.description.indexOf(".");
  const videoDescription = descriptionIndex > 0 ? video.description.slice(0, descriptionIndex + 1) : video.description;
  return (
    <div id="content">
      <div className="background" >
        <Link to={`/${profile.id}/videos/${video.id}`} className="play-button-genre-content content">► Play</Link>
        <div className="left">
          <h1 className="genre-content-header">{video.title}</h1>
          <br />
          <h1 className="genre-content-year">{video.year} - {video.rating}</h1>
          <br />
          <p className="genre-content-text" >{videoDescription}</p>
        </div>
        <div className="right" style={{ 'backgroundImage': `url(${video.image_url})` }}></div>
      </div>
      <div className="content-container">
      </div>
      <button className="bring-up-button" onClick={() => closeContent(id)}><i className="fas fa-times"></i></button>
    </div>
  )
}

export default connect(msp, null)(GenreContent);