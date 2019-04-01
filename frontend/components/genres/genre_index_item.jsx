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
                {/* <li className="inner-row">
                    <Link to={`/${video.title}`}><img className="tile__img" src="https://s3.amazonaws.com/nextup-dev/39RPCNMUmQcfUDYg92WsV1gN" /></Link>
                </li >
                <li className="inner-row">
                    <Link to={`/${video.title}`}><img className="tile__img" src="https://s3.amazonaws.com/nextup-dev/39RPCNMUmQcfUDYg92WsV1gN" /></Link>
                </li>
                <li className="inner-row">
                    <Link to={`/${video.title}`}><img className="tile__img" src="https://s3.amazonaws.com/nextup-dev/39RPCNMUmQcfUDYg92WsV1gN" /></Link>
                </li>  */}
            </>
        )
    })
    return(
        <>
        <div className="genreItems" >
            <h2 className="genre-index-links"><Link className="genres-index" genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name}</Link></h2>
            <ul className="row" >
                {videos}
            </ul>
        </div>
        </>
    )
}

export default GenreIndexItem;