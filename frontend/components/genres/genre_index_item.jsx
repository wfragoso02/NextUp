import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import { connect } from 'react-redux';
import GenreContent from './genre_content';

const msp = state => {
    return{
        all_videos: state.entities.videos 
    }
}

class GenreIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem: null
        }
        this.selectListItem = this.selectListItem.bind(this);
        this.closeContent = this.closeContent.bind(this);
    }

    selectListItem(video){
        this.setState({selectedItem: video});
    }

    closeContent(){
        this.setState({selectedItem: null})
    }

    render(){
        console.log(this.state.selectedItem)
    const genre = this.props.genre
    const profile = this.props.profile
    const deleteListItem = this.props.deleteListItem 
    const list = this.props.list 
    const createListItem = this.props.createListItem 
    const all_videos = this.props.all_videos 
    const closeContent = this.props.closeContent

    if(Object.values(all_videos).length === 0){
        return null
    }else{
        const videos = Object.values(genre.video_ids).map(video_id => {
            return(
                <>
                <VideoIndexItem 
                        currVid={this.state.selectedItem}
                        selectListItem={this.selectListItem} 
                        profile={this.props.profile} 
                        deleteListItem={this.props.deleteListItem}  
                        list={this.props.list}
                        createListItem={this.props.createListItem} 
                        video={this.props.all_videos[video_id]} 
                        className="actual-video" />
                    {/* <VideoIndexItem currVid={this.state.selectedItem} selectListItem={this.selectListItem} profile={profile} deleteListItem={deleteListItem}  list={list}createListItem={createListItem} video={all_videos[video_id]} /> */}
                </>
            )
        })
        return(
                <div>
                    <div className="genre-index-links"><h2 className="genre-content"><Link genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name.toUpperCase()}</Link></h2></div>
                    <ul className="row" >
                        {videos}
                    </ul>
                    <br/>
                    <GenreContent video={this.state.selectedItem} closeContent={this.closeContent}/>
                </div>
        )
    }
}
}
export default connect(msp, null)(GenreIndexItem);