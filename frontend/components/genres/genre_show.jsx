import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import NavContainer from '../nav/nav_cotainer';
import Footer from '../footer';
import GenreContent from './genre_content';

const GenreShow = props => {
  const [volume, changeVolume] = useState(1);
  const [selectedItem, changeSelectedItem] = useState(null);
  const videoRef = React.createRef();

  useEffect(() => {
    props.fetchVideos();
    props.fetchGenre(props.match.params.genreId);
    props.fetchProfile(props.match.params.profileId);
  }, []);

  useEffect(() => {
    props.fetchGenre(props.match.params.genreId).then(() => props.fetchVideos);
  }, [props.match.params.genreId]);

  const closeContent = () => {
    changeSelectedItem(null);
  };

  const selectListItem = (video) =>{
    changeSelectedItem(video);
  };

  const setMuted = (newVolume) => {
    videoRef.current.muted = videoRef.current.muted ? false : true;
    changeVolume(newVolume);
  };

  if (!props.list.list_video_ids || !props.genre.videos || Object.values(props.all_videos).length < 1) {
    return null;
  }

  const defaultButton = props.list.list_video_ids.includes(props.genre.video_ids.sort()[0]) ? 
    <button onClick={() => props.deleteListItem({ video_id: props.genre.video_ids.sort()[0], list_id: props.list.id })} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>
  :
    <button onClick={() => props.createListItem({ video_id: props.genre.video_ids.sort()[0], list_id: props.list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>
  ;

  const newVolume = volume === 0 ? 1 : 0;
  const videoVolume = volume === 0 ?
    <i className="fas fa-volume-mute fa-xs"></i>
  :
    <i className="fas fa-volume-up fa-xs"></i>
  ;

  const mainVideo = props.genre.videos ? 
    <>
      <video ref={videoRef} className="home-trailer" loop autoPlay>
        <source src={props.all_videos[props.genre.video_ids.sort()[0]].video_url} />
      </video>
      <div className="main-video-title">
        <h1>{props.genre.name}</h1>
        <div className="genre-content-play-and-list">
          <Link to={`/${props.profile.id}/videos/${props.all_videos[props.genre.video_ids.sort()[0]].id}`} className="play-button"><h3>► Play</h3></Link>
          {defaultButton}
        </div>
      </div>
      <button onClick={() => setMuted(newVolume)} className="home-page-volume-button">{videoVolume}</button>
      <h1 className="main-video-rating">{props.all_videos[props.genre.video_ids.sort()[0]].rating}</h1>
    </>
  :
    <h1>No Video Here</h1>
  ;

  const videos = props.genre.video_ids.sort().map(video_id => {
    return (
      <VideoIndexItem
        currVid={selectedItem}
        selectListItem={selectListItem}
        profile={props.profile}
        deleteListItem={props.deleteListItem}
        list={props.list}
        createListItem={props.createListItem}
        video={props.all_videos[video_id]}
        className="actual-video"
      />
    )
  })

  return (
    <div className="genre-show">
      <NavContainer profileId={props.match.params.profileId} />
      <div className="home" >
        {mainVideo}
      </div>
      <div className="genreItems">
        <ul className="row">
          {videos}
        </ul>
        <GenreContent video={selectedItem} closeContent={closeContent} />
      </div>
      <Footer />
    </div>
  )
};

export default GenreShow;