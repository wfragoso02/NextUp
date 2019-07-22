import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    render() {
        const videos = this.props.videos.map(video => {
            return (
                <li key={video.id} >
                    <VideoIndexItem video={video} />
                </li>
            )
        });

        return (
            <ul className="video-container">
                {videos}
            </ul>
        )
    }
}

export default VideoIndex;