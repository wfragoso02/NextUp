import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import Video from './video';


const msp = (state, ownProps )=> {

    return{
        video: { title: "", image_url: ""}
    };
};

const mdp = dispatch => {
    return{
        fetchVideo: (id) => dispatch(fetchVideo(id))
    };
};

export default connect(msp, mdp)(Video);