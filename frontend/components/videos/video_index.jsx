import React from 'react';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ videos }) => {
  const all_videos = videos.map(video => {
    return (
      <li key={video.id} >
        <VideoIndexItem video={video} />
      </li>
    )
  });

  return (
    <ul className="video-container">
      {all_videos}
    </ul>
  )
}

export default VideoIndex;