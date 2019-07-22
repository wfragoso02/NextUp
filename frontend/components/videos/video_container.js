import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import Video from './video';
import { fetchProfile } from '../../actions/profile_actions';


const msp = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId] || { title: "", video_url: "" };
    return {
        profile: state.session.profile || { id: '' },
        video,
    };
};

const mdp = dispatch => {
    return {
        fetchVideo: (id) => dispatch(fetchVideo(id)),
        fetchProfile: (id) => dispatch(fetchProfile(id))
    };
};

export default connect(msp, mdp)(Video);