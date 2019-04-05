import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';


const GenreIndexItem = ({genre, profile, deleteListItem, list, createListItem}) => {
    
    const videos = Object.values(genre.videos).map(video => {
        return(
            <li key={Math.floor(Math.random()*1000000)} className="vid">
                <VideoIndexItem profile={profile} deleteListItem={deleteListItem}  list={list}createListItem={createListItem} video={video} />
            </li>
        )
    })
    return(
        <>
        <div className="genreItems" >
            {/* <h2 className="genre-index-links"><Link className="content" genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name.toUpperCase()}</Link></h2> */}
            <h2 className="genre-index-links"><h1 className="content" genre={genre} >{genre.name.toUpperCase()}</h1></h2>
            <ul className="row" >
                {videos}
            </ul>
        </div>
        </>
    )
    }
export default GenreIndexItem;