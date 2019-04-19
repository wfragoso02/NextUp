import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
    return{
        list: state.entities.list
    }
}

const videoIndexItem = ({video,list, deleteListItem, createListItem, profile }) => {
    let defaultButton;
    if (list.video_ids.includes(video.id)){
        
        defaultButton = (
            <button onClick={() => deleteListItem(video.id)}className="default-button">
                <i className="fas fa-check"></i>
                <h3 className="fa-check-text-link">Remove From My List</h3>
            </button>
        )
    }else{
        defaultButton = (
            <button onClick={() => createListItem({video_id: video.id, list_id: list.id})} className="default-button">
                <i className="fas fa-plus"></i>
                <h3 className="fa-check-text-link">Add to My List</h3>
            </button>
        )
    }
    return(
        <div className="tile">
            {defaultButton}
            <Link to={`/${profile.id}/videos/${video.id}`}><img className="tile__img" src={video.image_url}/></Link>
            <h2 className="video-title">{video.title}</h2>
        </div>
        
    )
}

export default connect(msp, null)(videoIndexItem);