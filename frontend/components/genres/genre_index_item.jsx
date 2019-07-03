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
            selectedItem: null,
            length: this.props.genre.video_ids.length,
            shift: 0
        }
        this.selectListItem = this.selectListItem.bind(this);
        this.closeContent = this.closeContent.bind(this);
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
    }

    selectListItem(video){
        this.setState({selectedItem: video});
    }

    closeContent(){
        this.setState({selectedItem: null})
    }

    shiftRight(){
        if(this.state.shift < this.state.length){
            const elements = document.getElementsByClassName(`${this.props.genre.id}`)
            Array.from(elements).map(element => {
                const leftIdx = element.style.transform.indexOf("(");
                const rightIdx = element.style.transform.indexOf(")");
                element.style.transform.length < 1 ? element.style.transform = "translateX(-19vw)" : 
                element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx + 1, rightIdx - 2)) - 19}vw)`;
            })
            this.setState({shift: this.state.shift + 1})
        }
    }

    shiftLeft(){
        if(this.state.shift > 0){
            const elements = document.getElementsByClassName(`${this.props.genre.id}`)
            Array.from(elements).map(element => {
                const leftIdx = element.style.transform.indexOf("(");
                const rightIdx = element.style.transform.indexOf(")");
                element.style.transform.length < 1 ? element.style.transform = "translateX(19vw)" : 
                element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx + 1, rightIdx - 2)) + 19}vw)`;
            })
            this.setState({shift: this.state.shift - 1})
        }
    }

    render(){
    const genre = this.props.genre
    const profile = this.props.profile
    const all_videos = this.props.all_videos 


    if(Object.values(all_videos).length === 0){
        return null
    }else{
        let arrowLeft;
        this.state.shift > 0 ? 
        arrowLeft = (
            <>
                <button className="slider_left" onClick={() => this.shiftLeft()}><i className="fas fa-chevron-left"></i></button>
            </>
        ) : arrowLeft = null;

        let arrowRight 
        this.state.shift < this.state.length ? 
        arrowRight= (
            <>
                <button className="slider_right" onClick={() => this.shiftRight()}><i className="fas fa-chevron-right"></i></button>
            </>
        ) : arrowRight = null;

        
        const videos = Object.values(genre.video_ids).map(video_id => {
            return(
                <>
                <VideoIndexItem 
                    genreId={genre.id}
                    currVid={this.state.selectedItem}
                    selectListItem={this.selectListItem} 
                    profile={this.props.profile} 
                    deleteListItem={this.props.deleteListItem}  
                    list={this.props.list}
                    createListItem={this.props.createListItem} 
                    video={this.props.all_videos[video_id]} 
                    className="actual-video" />
                </>
            )
        })
        return(
                <div>
                    <br/>
                    <div className="genre-index-links"><h2 className="genre-content"><Link genre={genre} to={`/${profile.id}/genre/${genre.id}`}>{genre.name.toUpperCase()}</Link></h2></div>
                    <ul className="row" >
                    {arrowLeft}
                        {videos}
                        {videos}
                    {arrowRight}
                    </ul>
                    <GenreContent video={this.state.selectedItem} closeContent={this.closeContent}/>
                </div>
        )
    }
}
}
export default connect(msp, null)(GenreIndexItem);