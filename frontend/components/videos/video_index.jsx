import React from 'react';
import VideoIndexItem from './video_index_item';

const VideoIndex = props => {
  const videos = props.videos.map(video => {
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

export default VideoIndex;