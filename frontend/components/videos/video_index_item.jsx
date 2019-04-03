import React from 'react';
import {Link} from 'react-router-dom';

const videoIndexItem = ({video,list, deleteListItem, createListItem }) => {
    let defaultButton;
    if (list.video_ids.includes(video.id)){
        
        defaultButton = (<button onClick={() => deleteListItem(video.id)}><i className="fas fa-check"></i><h3>Remove from my List </h3></button>)
    }else{
        defaultButton = (<button onClick={() => createListItem({video_id: video.id, list_id: list.id})}><i className="fas fa-plus"></i>My List</button>)
    }
    return(
        <div className="tile">
            <div className="tile__media">
                <Link to={`/videos/${video.id}`}><img className="tile__img" src={video.image_url} /></Link>
            </div>
            {defaultButton}
            <div className="tile__details">
                <div className="tile__title">
                    <h2>{video.title}</h2>
                </div>
            </div>
        </div>
        
    )
}

export default videoIndexItem;