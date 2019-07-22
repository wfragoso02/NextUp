import * as RatingApiUtil from '../util/rating_api_util';
import * as VideoApiUtil from '../util/video_api_util';
import { RECEIVE_VIDEO } from './types';

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

export const updateRating = rating => dispatch => (
    RatingApiUtil.updateRating(rating)
        .then((rating) => VideoApiUtil.fetchVideo(rating.video.id).then(video => dispatch(receiveVideo(video))))
);