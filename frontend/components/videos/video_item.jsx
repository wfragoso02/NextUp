import React from 'react';

const VideoItem = ({video}) => {
    return(
        <div>
            <img src={video.image_url} />
        </div>
    )
}

export default VideoItem;