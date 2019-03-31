import React from 'react';
import {Link} from 'react-router-dom';

const videoIndexItem = ({video}) => {
    return(
        <div >
            <Link to={`/${video.title}`}><img className="genre-video-index" src={video.image_url} /></Link>
        </div>
    )
}

export default videoIndexItem;