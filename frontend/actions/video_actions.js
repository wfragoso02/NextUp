import * as VideoApiUtil from '../util/video_api_util';
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from './types'

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
});

export const fetchVideo = (id) => dispatch => (
    VideoApiUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)))
);

export const fetchVideos = (filter) => dispatch => (
    VideoApiUtil.fetchVideos(filter).then(videos => dispatch(receiveVideos(videos)))
);