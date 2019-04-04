import * as VideoApiUtil from '../util/video_api_util';
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

const receiveVideo = (video) => {
    return{
        type: RECEIVE_VIDEO,
        video
    };
};
const receiveVideos = (videos) => {
    return{
        type: RECEIVE_VIDEOS,
        videos
    };
};

export const fetchVideo = (id) => dispatch => (
    VideoApiUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)))
);

export const fetchVideos = (filter) => dispatch => (
    VideoApiUtil.fetchVideos(filter).then(videos => dispatch(receiveVideos(videos)))
);