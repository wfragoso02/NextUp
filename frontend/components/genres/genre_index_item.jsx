import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createListItem, deleteListItem } from '../../actions/list_item_actions';
import { fetchList } from '../../actions/list_actions';
import VideoIndexItem from '../videos/video_index_item';

const msp = state => {
    return{
        all_videos: state.entities.videos,
        list: state.entities.list,
        profile: state.session.profile,
    }
}

const mdp = dispatch => {
    return{
        deleteListItem: (id) => dispatch(deleteListItem(id)),
        createListItem: (listItem) => dispatch(createListItem(listItem)),
        fetchList: (id) => dispatch(fetchList(id))
    }
}

class GenreIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            length: this.props.genre.video_ids.length,
            shift: 0
        }
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
    }

    shiftRight(){
        if(this.state.shift < this.state.length){
            const elements = document.getElementsByClassName(`${this.props.genre.id}`)
            Array.from(elements).map(element => {
                const leftIdx = element.style.transform.indexOf("(") + 1;
                const rightIdx = element.style.transform.indexOf(")") - 2;
                element.style.transform.length < 1 ? 
                element.style.transform = "translateX(-19vw)" : 
                element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx, rightIdx)) - 19}vw)`;
            });
            this.setState({shift: this.state.shift + 1});
        }
    }

    shiftLeft(){
        if(this.state.shift > 0){
            const elements = document.getElementsByClassName(`${this.props.genre.id}`);
            Array.from(elements).map(element => {
                const leftIdx = element.style.transform.indexOf("(");
                const rightIdx = element.style.transform.indexOf(")");
                element.style.transform.length < 1 ? element.style.transform = "translateX(19vw)" : 
                element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx + 1, rightIdx - 2)) + 19}vw)`;
            });
            this.setState({shift: this.state.shift - 1});
        }
    }

    render(){
        const genre = this.props.genre;
        const profile = this.props.profile;
        const all_videos = this.props.all_videos;

        if(Object.values(all_videos).length < 1){
            return null
        }

        let arrowLeft;
        this.state.shift > 0 ? 
        arrowLeft = (
            <>
                <button className="slider_left" onClick={() => this.shiftLeft()}><i className="fas fa-chevron-left"></i></button>
            </>
        ) : arrowLeft = null;

        let arrowRight;
        this.state.shift < this.state.length ? 
        arrowRight= (
            <>
                <button className="slider_right" onClick={() => this.shiftRight()}><i className="fas fa-chevron-right"></i></button>
            </>
        ) : arrowRight = null;

        
        const videos = genre.video_ids.map(video_id => 
            <>
            <VideoIndexItem 
                classId={genre.id}
                currVid={this.props.currVid}
                selectListItem={this.props.selectListItem} 
                genreId={genre.id}
                profile={this.props.profile} 
                deleteListItem={this.props.deleteListItem}  
                list={this.props.list}
                createListItem={this.props.createListItem} 
                video={this.props.all_videos[video_id]} 
                className="actual-video" 
            />
            </>
        );

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
            </div>
        )
    }
}

export default connect(msp, mdp)(GenreIndexItem);