import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';


const GenreIndexItem = ({genre, profile, deleteListItem, list, createListItem}) => {
    
    const videos = Object.values(genre.videos).map(video => {
        return(
            <li key={Math.floor(Math.random()*1000000)} className="inner-row">
                <VideoIndexItem deleteListItem={deleteListItem}  list={list}createListItem={createListItem} video={video} />
            </li>
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