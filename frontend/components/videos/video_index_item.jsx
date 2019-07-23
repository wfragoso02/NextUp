import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateVideo } from '../../actions/video_actions';
import { updateRating } from '../../actions/rating_actions';

const msp = state => {
  return {
    list: state.entities.list
  };
};

const mdp = dispatch => {
  return {
    updateVideo: (video) => dispatch(updateVideo(video)),
    updateRating: (rating) => dispatch(updateRating(rating))
  };
};

class videoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
  }
  componentDidMount() {
    this.setState(this.props.video);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.video && this.props.video && this.props.video.id !== prevProps.video.id) {
      this.setState(this.props.video);
    }
  }

  displayVideo() {
    document.getElementById("hidden-video-show").style.display = "block";
  }
  like() {
    this.setState((prevState => {
      let video_ratings = Object.assign({}, prevState.video_ratings);
      video_ratings[this.props.profile.id]["like"] = 'like';
      return { video_ratings };
    }), () => {
      this.props.updateRating(this.state.video_ratings[this.props.profile.id])
    });
  }

  dislike() {
    this.setState((prevState => {
      let video_ratings = Object.assign({}, prevState.video_ratings);

      video_ratings[this.props.profile.id]["like"] = 'dislike';
      return { video_ratings };
    }), () => {
      this.props.updateRating(this.state.video_ratings[this.props.profile.id])
    });
  }

  render() {
    if (this.props.video === undefined) return null;
    const video = this.state;

    const list = this.props.list;
    const deleteListItem = this.props.deleteListItem;
    const createListItem = this.props.createListItem;
    const profile = this.props.profile;
    const rating = video.video_ratings[this.props.profile.id]["like"];
    const selectListItem = this.props.selectListItem;

    let likeButton;
    let dislikeButton;
    let like;
    let dislike;

    rating === "like" ? like = "like" : like = "";
    rating === "dislike" ? dislike = "dislike" : dislike = "";

    likeButton = (
      <button className={`like-button ${like}`} onClick={() => this.like()}>
        <i className="fas fa-thumbs-up"></i>
      </button>
    )

    dislikeButton = (
      <button className={`dislike-button ${dislike}`} onClick={() => this.dislike()}>
        <i className="fas fa-thumbs-down"></i>
      </button>
    )

    let defaultButton;
    if (list.video_ids.includes(video.id)) {

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
      <div className={`tile ${this.props.classId}`}
        onMouseEnter={() => {
          if (this.props.currVid && this.props.currVid.id !== video.id) {
            selectListItem(video, this.props.genreId)
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
          <button className="dropdown-button" onClick={() => selectListItem(video, this.props.genreId)}><i className="fas fa-chevron-down"></i></button>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(videoIndexItem);