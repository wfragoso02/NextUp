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
  const rating = video.video_ratings[props.profile.id] ? video.video_ratings[props.profile.id]["like"] : null;
  const liked = rating === "like" ? "like" : "";
  const disliked = rating === "dislike" ? "dislike" : "";

  const likeButton = disliked.length > 1 ? null : (
    <button className={`like-button ${liked}`} onClick={() => changeLike('like')}>
      <i className="fas fa-thumbs-up"></i>
    </button>
  );

  const dislikeButton = liked.length > 1 ? null :(
    <button className={`dislike-button ${disliked}`} onClick={() => changeLike('dislike')}>
      <i className="fas fa-thumbs-down"></i>
    </button>
  );

  const defaultButton = props.list.list_video_ids.includes(video.id) ? 
    <button onClick={() => props.deleteListItem({ video_id: video.id, list_id: props.list.id })} className="default-button">
      <i className="fas fa-check"></i>
      <h3 className="fa-check-text-link">Remove From My List</h3>
    </button>
  :
    <button onClick={() => props.createListItem({ video_id: video.id, list_id: props.list.id })} className="default-button">
      <i className="fas fa-plus"></i>
      <h3 className="fa-check-text-link">Add to My List</h3>
    </button>
  ;

  return (
    <div className={`tile ${props.classId}`}
      onMouseEnter={() => {
        if (props.currVid && props.currVid.id !== video.id) {
          props.selectListItem(video, props.genreId)
        }
      }}
    >
      {likeButton}
      {dislikeButton}
      {defaultButton}
      <Link to={`/${props.profile.id}/videos/${video.id}`} className="video-play-button"><i className="fas fa-play"></i></Link>
      <Link to={`/${props.profile.id}/videos/${video.id}`}><img className="tile__img" src={video.image_url} /></Link>
      <Link to={`/${props.profile.id}/videos/${video.id}`}><h2 className="video-title">{video.title}</h2></Link>
      <div className="random">
        <button className="dropdown-button" onClick={() => props.selectListItem(video, props.genreId)}><i className="fas fa-chevron-down"></i></button>
      </div>
    </div>
  )
}

export default connect(msp, mdp)(videoIndexItem);