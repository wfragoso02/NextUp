import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import Nav from '../nav/nav_cotainer';
import Footer from '../footer';
import GenreContent from '../genres/genre_content';
import Arrow from '../arrow';

const List = props  => {
  const [volume, changeVolume] = useState('1');
  const [selectedItem, changeSelectedItem] = useState(null);
  const [length, changeLength] = useState(0);
  const [shift, changeShift] = useState(0);
  const videoRef = React.createRef();

  useEffect(() => {
    props.fetchProfile(props.match.params.profileId).then((res) => {
      changeLength(res.payload.list.list_video_ids.length - 5);
    });
    props.fetchVideos();
  }, [props.match.params.profileId]);

  const setMuted = (newVolume) => {
    videoRef.current.muted = videoRef.current.muted ? false : true;
    changeVolume(newVolume);
  };

  const closeContent = () => {
    changeSelectedItem(null);
  };

  const selectListItem = video => {
    changeSelectedItem(video);
  };

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  if(!props.list.list_video_ids || Object.values(props.all_videos).length < 1) return null;
  if(props.list.list_video_ids.length < 1){
    return(
      <div className="genre-show">
      <Nav profileId={props.match.params.profileId} />
      <div className="no-list" >
        <h1 className="no-list-text">Add Items to your List</h1>
      </div>
      <Footer />
    </div>
    )
  }

  const arrowLeft = shift < 1 ? null : 
    <Arrow direction='left' shift={shift} id={props.list.id} changeShift={changeShift} />
  ;

  const arrowRight = shift >= length ? null :
    <Arrow direction='right' shift={shift} id={props.list.id} changeShift={changeShift} />
  ;

  const videoVolume = volume === '0' ?
    <i className="fas fa-volume-mute fa-xs"></i>
  :
    <i className="fas fa-volume-up fa-xs"></i>
  ;
  const newVolume = volume === '0' ? '1' : '0';
  const video_id = props.list.list_video_ids[Math.floor(Math.random() * props.list.list_video_ids.length)];
  const video = props.all_videos[video_id];
  const mainVideo = (
    <>
      <video ref={videoRef} className="home-trailer" loop autoPlay>
        <source src={video.video_url} />
      </video>
      <div className="main-video-title">
        <h1>My List</h1>
        <div className="genre-content-play-and-list">
          <Link to={`/${props.profile.id}/videos/${video.id}`} className="play-button"><h3>► Play</h3></Link>
        </div>
      </div>
      <button onClick={() => setMuted(newVolume)} className="home-page-volume-button">{videoVolume}</button>
      <h1 className="main-video-rating">{video.rating}</h1>
    </>
  )

  const videos = props.list.list_video_ids.filter(onlyUnique).map(video_id => {
    return (
      <VideoIndexItem
        classId={props.list.id}
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
      <Nav profileId={props.match.params.profileId} />
      <div className="home" >
        {mainVideo}
      </div>
      <div className="row">
        {arrowLeft}
        {videos}
        {arrowRight}
      </div>
      <GenreContent video={selectedItem} closeContent={closeContent} />
      <Footer />
    </div>
  )
};

export default List;