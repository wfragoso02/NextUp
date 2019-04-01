import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import Video from './video';


const msp = (state, ownProps )=> {
    const video = state.entities.videos[ownProps.match.params.videoId] || { title: "", video_url: ""};
    return{
        video,
    };
};

const mdp = dispatch => {
    return{
        fetchVideo: (id) => dispatch(fetchVideo(id))
    };
};

export default connect(msp, mdp)(Video);