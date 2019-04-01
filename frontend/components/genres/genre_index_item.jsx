import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';


const GenreIndexItem = ({genre, profile}) => {
    
    const videos = Object.values(genre.videos).map(video => {
        return(
            <>
                <li key={video.id} className="inner-row">
                    <VideoIndexItem video={video} />
                </li>
                <li className="inner-row">
                    <Link to={`/${video.title}`}><img className="genre-video-index" src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--81d663ad0fbad6055b8b84f70cc5ed8d292a768a/avengers.jpg" /></Link>
                </li >
                <li className="inner-row">
                    <Link to={`/${video.title}`}><img className="genre-video-index" src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--81d663ad0fbad6055b8b84f70cc5ed8d292a768a/avengers.jpg" /></Link>
                </li>
                <li className="inner-row">
                    <Link to={`/${video.title}`}><img className="genre-video-index" src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--81d663ad0fbad6055b8b84f70cc5ed8d292a768a/avengers.jpg" /></Link>
                </li> 
            </>
        )
    })
    return(
        <div className="genreItems">
            <h2 className="genre-index-links"><Link className="genres-index" genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name}</Link></h2>
            <ul className="video-container" >
                {videos}
            </ul>
        </div>
    )
}

export default GenreIndexItem;