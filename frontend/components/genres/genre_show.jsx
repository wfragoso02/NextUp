import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import NavContainer from '../nav/nav_cotainer';
import Footer from '../footer';
import GenreContent from './genre_content';

class GenreShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            volume: 1,
            videos: this.props.list.videos,
            selectedItem: null

        }
        this.setMuted = this.setMuted.bind(this);
        this.selectListItem = this.selectListItem.bind(this);
        this.closeContent = this.closeContent.bind(this);
        this.hoverItem = this.hoverItem.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideos();
        this.props.fetchGenre(this.props.match.params.genreId);
        this.props.fetchProfile(this.props.match.params.profileId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.genreId !== this.props.match.params.genreId) {
            this.props.fetchGenre(this.props.match.params.genreId).then(() => this.props.fetchVideos());
        }
        if (prevProps.list.video_ids && this.props.list.video_ids.length !== prevProps.list.video_ids.length){
            this.props.fetchList();
        }
    }

    hoverItem(video){
        if(this.state.selectedItem && this.state.selectedItem.id !== video.id){
            this.selectListItem(video)
        }
    }

    closeContent(){
        this.setState({selectedItem: null})
    }

    selectListItem(video){
        this.setState({selectedItem: video});
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
        let defaultButton = "";
        if (!this.props.list.video_ids || !this.props.genre.videos || Object.values(this.props.all_videos).length < 1){
            return null;
        }
        if (this.props.list.video_ids.includes(Object.values(this.props.genre.videos)[0].id)) {
            defaultButton = (<button onClick={() => this.props.deleteListItem(Object.values(this.props.genre.videos)[0].id)} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
        } else {
            defaultButton = (<button onClick={() => this.props.createListItem({ video_id: Object.values(this.props.genre.videos)[0].id, list_id: this.props.list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>)
        }
       
        let volumes;
        if (this.state.volume === 0) {
            volumes = <i className="fas fa-volume-mute fa-xs"></i>
        } else {
            volumes = <i className="fas fa-volume-up fa-xs"></i>
        }
        let mainVideo;
        if (this.props.genre.videos){
            
            mainVideo = (
                <>
                    <video ref='player' className="home-trailer" >
                        <source src={this.props.all_videos[this.props.genre.video_ids.sort()[0]].video_url} />
                    </video>
                    <Link to={`/${this.props.profile.id}/videos/${this.props.all_videos[this.props.genre.video_ids.sort()[0]].id}`} className="play-button"><h3>► Play</h3></Link>
                    {defaultButton}
                    <button onClick={this.setMuted} className="home-page-volume-button">{volumes}</button>
                    <h1 className="main-video-title">{this.props.genre.name}</h1>
                    <h1 className="main-video-rating">{this.props.all_videos[this.props.genre.video_ids.sort()[0]].rating}</h1>
                </>
            )
            
        }else{
            mainVideo = (
                <h1>No Video Here</h1>
            )
        }
        console.log(this.props.genre.video_ids);

        const videos = this.props.genre.video_ids.sort().map(video_id=> {
            return(
                <VideoIndexItem 
                    currVid={this.state.selectedItem}
                    selectListItem={this.selectListItem} 
                    profile={this.props.profile} 
                    deleteListItem={this.props.deleteListItem}  
                    list={this.props.list}
                    createListItem={this.props.createListItem} 
                    video={this.props.all_videos[video_id]} 
                    className="actual-video" 
                />
            )
        })

        return(
            <div className="genre-show">
                <NavContainer profileId={this.props.match.params.profileId}/>
                <div className="home" >
                    {mainVideo}
                </div>
                <div className="genreItems">
                <ul className="row">
                    {videos}
                </ul>
                    <GenreContent video={this.state.selectedItem} closeContent={this.closeContent}/>
                </div>
                <Footer />
            </div>
        )
    }
}
export default GenreShow;