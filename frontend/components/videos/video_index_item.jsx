import React from 'react';
import {Link} from 'react-router-dom';

const videoIndexItem = ({video}) => {
    return(
        <div className="tile">
            <div className="tile__media">
                <Link to={`/videos/${video.id}`}><img className="tile__img" src={video.image_url} /></Link>
            </div>
            <div className="tile__details">
                <div className="tile__title">
                    <h2>{video.title}</h2>
                </div>
            </div>
        </div>
        
    )
}

export default videoIndexItem;