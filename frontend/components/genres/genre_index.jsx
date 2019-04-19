import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndexItem from '../videos/video_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer';


class GenreIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            volume: "1"
        };
    }

    componentDidMount(){
        this.props.fecthProfile(this.props.match.params.profileId);
        this.props.fetchGenres();
    }

    componentDidUpdate(prevProps){
        if (prevProps.profile.id !== this.props.profile.id){
            this.props.fecthProfile(this.props.match.params.profileId);
        }

        if (prevProps.list.video_ids && (this.props.list.video_ids.length !== prevProps.list.video_ids.length)){
            this.props.fetchList(this.props.profile.list.id);
        }
    }

    setMuted(){

        if (this.refs.player.muted) {
            this.refs.player.muted = false;
            this.setState({ volume: 1 });
        } else {
            this.refs.player.muted = true;
            this.setState({ volume: 0 });
        }
    }

    render(){
        const genres = this.props.genres.map((genre, idx) => {
            return (
                <li key={Math.floor(Math.random() * 1000000)}>
                    <GenreIndexItem  key={Math.floor(Math.random() * 1000000)} profile={this.props.profile} deleteListItem={this.props.deleteListItem}  list={this.props.list}createListItem={this.props.createListItem} profile={this.props.profile} genre={genre} />
                </li>
            )
        });
        
        let defaultButton = "";
        if (!this.props.list.video_ids || !this.props.genres[0]){
            return null;
        }
        if (this.props.list.video_ids.includes(Object.values(this.props.genres[0].videos)[0].id)) {
            defaultButton = (<button onClick={() => this.props.deleteListItem(Object.values(this.props.genres[0].videos)[0].id)} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
        } else {
            defaultButton = (<button onClick={() => this.props.createListItem({ video_id: Object.values(this.props.genres[0].videos)[0].id, list_id: this.props.list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>)
        }
       
        let volumes;
        if (this.state.volume === 0) {
            volumes = <i className="fas fa-volume-mute fa-xs"></i>
        } else {
            volumes = <i className="fas fa-volume-up fa-xs"></i>
        }
        let mainVideo;
        if (this.props.genres[0]){
            
            mainVideo = (
                <>
                    <video ref='player' className="home-trailer" >
                        <source src={Object.values(this.props.genres[0].videos)[0].video_url} />
                    </video>
                    <Link to={`/${this.props.profile.id}/videos/${Object.values(this.props.genres[0].videos)[0].id}`} className="play-button"><h3>► Play</h3></Link>
                    {defaultButton}
                    <button onClick={this.setMuted} className="home-page-volume-button">{volumes}</button>
                    <h1 className="main-video-title">{Object.values(this.props.genres[0].videos)[0].title}</h1>
                    <h1 className="main-video-rating">{Object.values(this.props.genres[0].videos)[0].rating}</h1>
                </>
            )
            
        }else{
            mainVideo = (
                <h1>No Video Here</h1>
            )
        }
        
        let myList;
        
        let listVideos;
        if (!this.props.list.videos){
            return null;
        }else{
            if(this.props.list.video_ids.length > 0){
                myList = <Link to={`/${this.props.profile.id}/myList`} className="content">My List</Link>
            }else{
                myList = <h1 className="content">My List</h1>
            }
            listVideos = this.props.list.videos.map(video => {
                return (
                    <li key={Math.floor(Math.random() * 1000000)} className="vid">
                        <VideoIndexItem profile={this.props.profile} deleteListItem={this.props.deleteListItem}  list={this.props.list}createListItem={this.props.createListItem} video={video} className="actual-video" />
                    </li>
                )
            })
        }
        return(
            <div className="genre-index-container">
                <Nav profileId={this.props.profile.id} />
                <div className="home" >
                    {mainVideo}
                </div>
                <div className="my-list-items">
                    {myList}
                    <ul className="row">
                        {listVideos}
                    </ul>
                </div>
                <ul className="genre-index">
                    {genres}
                </ul>
                <Footer />
            </div>
        )
    }
}

export default GenreIndex;