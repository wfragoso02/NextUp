import { connect } from 'react-redux';
import GenreIndex from './genre_index';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchProfile } from '../../actions/profile_actions';
import { fetchList } from '../../actions/list_actions';
import { createListItem, deleteListItem } from '../../actions/list_item_actions';
import { fetchVideos } from '../../actions/video_actions';

const msp = (state, ownProps) => {
  return {
    genres: Object.values(state.entities.genres),
    profile: state.entities.profiles[ownProps.match.params.profileId] || {},
    list: state.entities.list,
    all_videos: state.entities.videos,
    promoVid: Object.values(state.entities.videos)[Math.floor(Math.random() * Object.values(state.entities.videos).length)]
  };
};

const mdp = dispatch => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fecthProfile: (id) => dispatch(fetchProfile(id)),
    fetchList: (id) => dispatch(fetchList(id)),
    deleteListItem: (id) => dispatch(deleteListItem(id)),
    createListItem: (listItem) => dispatch(createListItem(listItem)),
    fetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(msp, mdp)(GenreIndex);