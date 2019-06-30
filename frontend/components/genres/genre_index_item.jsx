import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import { connect } from 'react-redux';

const msp = state => {
    return{
        all_videos: state.entities.videos 
    }
}

const GenreIndexItem = ({genre, profile, deleteListItem, list, createListItem, all_videos}) => {
    if(Object.values(all_videos).length  === 0){
        return null
    }else{
        const videos = Object.values(genre.video_ids).map(video_id => {
            return(
                <>
                    <VideoIndexItem profile={profile} deleteListItem={deleteListItem}  list={list}createListItem={createListItem} video={all_videos[video_id]} />
                    <VideoIndexItem profile={profile} deleteListItem={deleteListItem}  list={list}createListItem={createListItem} video={all_videos[video_id]} />
                </>
            )
        })
        return(
            <>
                <div>
                    <div className="genre-index-links"><h2 className="genre-content"><Link genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name.toUpperCase()}</Link></h2></div>
                    <br/>
                    <ul className="row" >
                        {videos}
                    </ul>
                    <div className="content">
                        <div className="background">
                            <div className="left">left</div>
                            <div className="right">right</div>
                        </div>
                        <div className="content-container">content here...</div>
                    </div>
                </div>
            </>
        )
    }
}
export default connect(msp, null)(GenreIndexItem);