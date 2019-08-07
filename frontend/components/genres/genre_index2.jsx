import React, { useState, useEffect } from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndexItem from '../videos/video_index_item';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import GenreContent from './genre_content';
import Arrow from '../arrow';

const GenreIndex = props => {
  const [volume, changeVolume] = useState('1');
  const [start, changeStart] = useState(0);
  const [count, changeCount] = useState(1);
  const [genres, changeGenres] = useState([]);
  const [selectedItem, changeSelectedItem] = useState(null);
  const [length, changeLength] = useState(0);
  const [shift, changeShift]  = useState(0);
  const [promoVideo, changePromoVideo] = useState(props.promoVide);
  const [contentVideos, changeContentVideos] = useState({});
  const videoRef = React.createRef();

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  useEffect(() => {
    props.fetchVideos().then(() => {
      const promoVideo = Object.values(props.all_videos)[Math.floor(Math.random() * Object.values(props.all_videos).length)];
      if(typeof promoVideo === 'undefined') changePromoVideo(promoVideo);
    });
    props.fetchProfile(props.match.params.profileId);
    props.fetchGenres().then((res) => {
      changeGenres(Object.values(res.genres).slice(0, 1));
      changeLength(props.list.list_video_ids.length - 5);
    });
  },[]);

  useEffect(() => {
    changeSelectedItem(null);
    props.fecthProfile(props.match.params.profileId);
    props.fetchVideos();
  }, [props.match.params.profileId]);


  const updateCount = () => {
    setTimeout(() => {
      changeStart(count);
      changeCount(count + 1);
      changeGenres(genres.concat(props.genres.slice(count, count + 1)));
    }, 700);
  };

  const setMuted = (newVolume) => {
    videoRef.current.muted = videoRef.current.muted ? false : true;
    changeVolume(newVolume);
  };

  const closeContent = (id = null) => {
    id ? changeContentVideos({...contentVideos, [id]: null}) : changeSelectedItem(null) ;
  };

  const selectListItem = (video, id = null) => {
    id ? changeContentVideos({...contentVideos, [id]: video}) : changeSelectedItem(video) ;
  };

  if (!props.list || Object.values(props.all_videos).length < 1 || typeof promoVideo === 'undefined' ) return null;
  const allGenres = genres.map((genre, idx) => {
    return (
      <>
        <li key={`${genre.id}-${idx}`}>
          <GenreIndexItem
            selectListItem={selectListItem}
            currVid={contentVideos[genre.id]}
            genre={genre} />
        </li>
        <GenreContent id={genre.id} video={contentVideos[genre.id]} closeContent={closeContent} />
      </>
    )
  });

  const defaultButton = list.list_video_ids.includes(promoVideo.id) ?
    (<button onClick={() => deleteListItem({ video_id: promoVideo.id, list_id: list.id })} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
  :
    (<button onClick={() => createListItem({ video_id: promoVideo.id, list_id: list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>)
  ;

  const newVolume = volume === 0 ? 1 : 0;
  const videoVolume = volume === 0 ?
    <i className="fas fa-volume-mute fa-xs"></i>
  :
    <i className="fas fa-volume-up fa-xs"></i>
  ;

  const mainVideo = (
    <>
      <video ref='player' className="home-trailer" loop autoPlay>
        <source src={promoVideo.video_url} />
      </video>
      <div className={`main-video-title ${promoVideo.title.length > 25 ? "large-title": "small-title"}`}>
        <h1 >{promoVideo.title}</h1>
        <div className="genre-content-play-and-list">
          <Link to={`/${props.profile.id}/videos/${promoVideo.id}`} className="play-button"><h3>► Play</h3></Link>
          {defaultButton}
        </div>
      </div>
      <button onClick={() => setMuted(newVolume)} className="home-page-volume-button">{videoVolume}</button>
      <h1 className="main-video-rating">{promoVideo.rating}</h1>
    </>
  )

  arrowLeft = shift <= 0 ? null :
    <Arrow direction='left' shift={shift} id={props.list.id} changeShift={changeShift} />
  ;

  arrowRight = shift >= length ? null : 
    <Arrow direction='right' shift={shift} id={props.list.id} changeShift={changeShift} />
  ;
  
  const myList = <div className="genre-index-links"><h2 className="genre-content"><Link to={`/${props.profile.id}/myList`} >My List</Link></h2></div>
  const listVideos = props.list.list_video_ids.filter(onlyUnique).map(video_id => {
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
        className="actual-video" />
    )
  })

  return (
    <div className="genre-index-container">
      <Nav profileId={props.profile.id} />
      <div className="home" >
        {mainVideo}
      </div>
      <div>
        {myList}
        <br />
        <ul className="row">
          {arrowLeft}
          {listVideos}
          {arrowRight}
        </ul>
        <GenreContent id={null} video={selectedItem} closeContent={closeContent} />
      </div>
      <br />
      <InfiniteScroll
        dataLength={count}
        next={updateCount}
        hasMore={true}
      >
        <ul className="genre-index">
          {allGenres}
        </ul>
      </InfiniteScroll>
      <Footer />
    </div>
  )
};

export default GenreIndex;