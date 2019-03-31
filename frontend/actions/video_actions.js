import * as VideoApiUtil from '../util/video_api_util';
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideo = (video) => {
    return{
        type: RECEIVE_VIDEO,
        video
    };
};

export const fetchVideo = (id) => dispatch => (
    VideoApiUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)))
);