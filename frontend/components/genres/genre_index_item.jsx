import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createListItem, deleteListItem } from '../../actions/list_item_actions';
import { fetchList } from '../../actions/list_actions';
import VideoIndexItem from '../videos/video_index_item';
import ArrowRight from './arrow_right';
import ArrowLeft from './arrow_left';

const msp = state => {
  return {
    all_videos: state.entities.videos,
    list: state.entities.list,
    profile: state.session.profile,
  };
};

const mdp = dispatch => {
  return {
    deleteListItem: (id) => dispatch(deleteListItem(id)),
    createListItem: (listItem) => dispatch(createListItem(listItem)),
    fetchList: (id) => dispatch(fetchList(id))
  };
};

const GenreIndexItem = props => {
  const length = props.genre.video_ids.length;
  const [shift, changeShift] = useState(0);
  const genre = props.genre;
  const profile = props.profile;
  const all_videos = props.all_videos;

  if (Object.values(all_videos).length < 1) {
    return null;
  }

  let arrowLeft;
  shift > 0 ?
    arrowLeft = (
      <ArrowLeft shift={shift} genre={props.genre} changeShift={changeShift} />
    ) : arrowLeft = null;

  let arrowRight;
  shift < length ?
    arrowRight = (
      <ArrowRight shift={shift} genre={props.genre} changeShift={changeShift} />
    ) : arrowRight = null;


  const videos = genre.video_ids.map(video_id =>
    <>
      <VideoIndexItem
        classId={genre.id}
        currVid={props.currVid}
        selectListItem={props.selectListItem}
        genreId={genre.id}
        profile={props.profile}
        deleteListItem={props.deleteListItem}
        list={props.list}
        createListItem={props.createListItem}
        video={props.all_videos[video_id]}
        className="actual-video"
      />
    </>
  );

  return (
    <div>
      <br />
      <div className="genre-index-links"><h2 className="genre-content"><Link genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name.toUpperCase()}</Link></h2></div>
      <ul className="row" >
        {arrowLeft}
        {videos}
        {videos}
        {arrowRight}
      </ul>
    </div>
  )
}

export default connect(msp, mdp)(GenreIndexItem);