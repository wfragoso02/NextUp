import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateVideo } from '../../actions/video_actions';
import { updateRating, createRating } from '../../actions/rating_actions';

const msp = state => {
  return {
    list: state.entities.list
  };
};

const mdp = dispatch => {
  return {
    updateVideo: (video) => dispatch(updateVideo(video)),
    updateRating: (rating) => dispatch(updateRating(rating)),
    createRating: (rating) => dispatch(createRating(rating))
  };
};

const videoIndexItem = props => {
  const [state, setState] = useState(props.video);

  useEffect(() => {
    setState(props.video);
  }, [props.video]);

  const changeLike = (rating) => {
    let video = state;
    if(video.video_ratings[props.profile.id]){
      let videoRating = video.video_ratings[props.profile.id]['like'] ? null : rating;
      video.video_ratings[props.profile.id]['like'] = videoRating;
      props.updateRating(state.video_ratings[props.profile.id]);
      setState(video);
    }else{
      props.createRating({video_id: video.id, profile_id: props.profile.id, like: rating}).then((res) => {
        setState(res.video);
      });
    }
  };

  if (props.video === undefined) return null;
  const video = state;
  const list = props.list;
  const deleteListItem = props.deleteListItem;
  const createListItem = props.createListItem;
  const profile = props.profile;
  const rating = video.video_ratings[props.profile.id] ? video.video_ratings[props.profile.id]["like"] : null;
  const selectListItem = props.selectListItem;

  const liked = rating === "like" ? "like" : "";
  const disliked = rating === "dislike" ? "dislike" : "";

  let likeButton = disliked.length > 1 ? null : (
    <button className={`like-button ${liked}`} onClick={() => changeLike('like')}>
      <i className="fas fa-thumbs-up"></i>
    </button>
  );

  let dislikeButton = liked.length > 1 ? null :(
    <button className={`dislike-button ${disliked}`} onClick={() => changeLike('dislike')}>
      <i className="fas fa-thumbs-down"></i>
    </button>
  );

  let defaultButton;
  if (list.list_video_ids.includes(video.id)) {

    defaultButton = (
      <button onClick={() => deleteListItem(video.id)} className="default-button">
        <i className="fas fa-check"></i>
        <h3 className="fa-check-text-link">Remove From My List</h3>
      </button>
    )
  } else {
    defaultButton = (
      <button onClick={() => createListItem({ video_id: video.id, list_id: list.id })} className="default-button">
        <i className="fas fa-plus"></i>
        <h3 className="fa-check-text-link">Add to My List</h3>
      </button>
    )
  }

  return (
    <div className={`tile ${props.classId}`}
      onMouseEnter={() => {
        if (props.currVid && props.currVid.id !== video.id) {
          selectListItem(video, props.genreId)
        }
      }}
    >
      {likeButton}
      {dislikeButton}
      {defaultButton}
      <Link to={`/${profile.id}/videos/${video.id}`} className="video-play-button"><i className="fas fa-play"></i></Link>
      <Link to={`/${profile.id}/videos/${video.id}`}><img className="tile__img" src={video.image_url} /></Link>
      <Link to={`/${profile.id}/videos/${video.id}`}><h2 className="video-title">{video.title}</h2></Link>
      <div className="random">
        <button className="dropdown-button" onClick={() => selectListItem(video, props.genreId)}><i className="fas fa-chevron-down"></i></button>
      </div>
    </div>
  )
}

export default connect(msp, mdp)(videoIndexItem);