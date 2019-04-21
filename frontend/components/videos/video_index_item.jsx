import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
    return{
        list: state.entities.list
    }
}
class videoIndexItem extends React.Component{
    displayVideo(){
        debugger

            document.getElementById("hidden-video-show").style.display="block";
    }

    render(){
        const video = this.props.video;
        const list = this.props.list; 
        const deleteListItem = this.props.deleteListItem;
        const createListItem = this.props.createListItem; 
        const profile = this.props.profile;
        
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
            <div>
                <div className="tile">
                    {defaultButton}
                    <Link to={`/${profile.id}/videos/${video.id}`} className="video-play-button"><i className="fas fa-play"></i></Link>
                    <Link to={`/${profile.id}/videos/${video.id}`}><img className="tile__img" src={video.image_url}/></Link>
                    <Link to={`/${profile.id}/videos/${video.id}`}><h2 className="video-title">{video.title}</h2></Link>
                    <button onClick={this.displayVideo.bind(this)}></button>
                </div>
                <div id="hidden-video-show">
                    <h1>hello</h1>
                </div>
            </div>
        )
    }
}

export default connect(msp, null)(videoIndexItem);