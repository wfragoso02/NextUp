import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
  return {
    profile: state.session.profile
  };
};

const GenreContent = ({ video, closeContent, profile, id }) => {
  if (!video) {
    return (<div></div>);
  }
  
  let videoDescription;
  video.description.indexOf(".") ? videoDescription = (video.description.slice(0, video.description.indexOf(".") + 1)) : videoDescription = video.description;
  return (
    <div id="content">
      <div className="background" >
        <Link to={`/${profile.id}/videos/${video.id}`} className="play-button-genre_content" style={{ zIndex: "7" }}>► Play</Link>
        <div className="left">
          <h1 className="genre_content_header">{video.title}</h1>
          <br />
          <h1 className="genre_content_year">{video.year} - {video.rating}</h1>
          <br />
          <p className={`genre_content_text`} >{videoDescription}</p>
        </div>
        <div className="right" style={{ background: `url(${video.image_url})` }}></div>
      </div>
      <div className="content-container">

      </div>
      <button className="bring-up-button" onClick={() => closeContent(id)}><i className="fas fa-times"></i></button>
    </div>
  )
}

export default connect(msp, null)(GenreContent);