import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndexItem from '../videos/video_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import GenreContent from './genre_content';


class GenreIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            volume: "1",
            start: 0,
            count: 1,
            genres: [],
            listSelected: null
        };
        this.updateCount = this.updateCount.bind(this)
        this.setMuted = this.setMuted.bind(this);
        this.selectListItem = this.selectListItem.bind(this);
        // this.closeContent = this.closeContent.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideos();
        this.props.fecthProfile(this.props.match.params.profileId);
        this.props.fetchGenres().then((res) =>{ 
        this.setState({genres: Object.values(res.genres).slice(this.state.start, this.state.count)})
        });
    }

    

    componentDidUpdate(prevProps){
        if (prevProps.profile.id !== this.props.profile.id){
            this.props.fecthProfile(this.props.match.params.profileId);
        }

        if (prevProps.list.video_ids && (this.props.list.video_ids.length !== prevProps.list.video_ids.length)){
            this.props.fetchList(this.props.profile.list.id);
        }
    }

    updateCount(){
        this.setState({start : this.state.count, count: this.state.count + 1, genres: this.state.genres.concat(this.props.genres.slice(this.state.count, this.state.count + 1))})
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

    closeContent(){
        this.setState({listSelected: null})

    }
    
    selectListItem(video){
        // debugger
        this.setState({listSelected: video});
    }

    render(){
        console.log(this.state.listSelected)
        const genres = this.state.genres.map((genre, idx) => {
            return (
                <li key={Math.floor(Math.random() * 1000000)}>
                    <GenreIndexItem  key={Math.floor(Math.random() * 1000000)} closeContent={this.closeContent} profile={this.props.profile} deleteListItem={this.props.deleteListItem}  list={this.props.list}createListItem={this.props.createListItem} profile={this.props.profile} genre={genre} />
                </li>
            )
        });
        
        let defaultButton = "";
        if (!this.props.list.video_ids || !this.props.genres[0]){
            return null;
        }
        if (this.props.list.video_ids.includes(this.props.genres[0].video_ids[0])) {
            defaultButton = (<button onClick={() => this.props.deleteListItem(this.props.genres[0].video_ids[0])} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
        } else {
            defaultButton = (<button onClick={() => this.props.createListItem({ video_id: this.props.genres[0].video_ids[0], list_id: this.props.list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>)
        }
       
        let volumes;
        if (this.state.volume === 0) {
            volumes = <i className="fas fa-volume-mute fa-xs"></i>
        } else {
            volumes = <i className="fas fa-volume-up fa-xs"></i>
        }
        let mainVideo;
        if (this.props.all_videos){
            const mainVid = this.props.all_videos[this.props.genres[0].video_ids[0]]
            mainVideo = (
                <>
                    <video ref='player' className="home-trailer"  loop autoPlay>
                        <source src={mainVid.video_url} />
                    </video>
                    <Link to={`/${this.props.profile.id}/videos/${mainVid.id}`} className="play-button"><h3>► Play</h3></Link>
                    {defaultButton}
                    <button onClick={this.setMuted} className="home-page-volume-button">{volumes}</button>
                    <h1 className="main-video-title">{mainVid.title}</h1>
                    <h1 className="main-video-rating">{mainVid.rating}</h1>
                </>
            )
            
        }else{
            mainVideo = (
                <h1>No Video Here</h1>
            )
        }
        
        let myList;
        
        let listVideos;
        myList = <div className="genre-index-links"><h2 className="genre-content"><Link to={`/${this.props.profile.id}/myList`} >My List</Link></h2></div>
        if (!this.props.list.video_ids){
            return null;
        }else{
            listVideos = this.props.list.video_ids.map(video_id => {
                return (
                        <VideoIndexItem selectListItem={this.selectListItem} profile={this.props.profile} deleteListItem={this.props.deleteListItem}  list={this.props.list}createListItem={this.props.createListItem} video={this.props.all_videos[video_id]} className="actual-video" />
                )
            })
        }
        return(
            <div className="genre-index-container">
                <Nav profileId={this.props.profile.id} />
                <div className="home" >
                    {mainVideo}
                </div>
                <div>
                    {myList}
                    <br/>
                    <ul className="row">
                        {listVideos}
                    </ul>
                    <GenreContent movie={this.state.listSelected} closeContent={this.closeContent}/>
                </div>
                <br/>

                <InfiniteScroll
                dataLength={this.state.count}
                next={this.updateCount}
                hasMore={true}
                >
                    <ul className="genre-index">
                        {genres}
                    </ul>
                </InfiniteScroll>
                <Footer />
            </div>
        )
    }
}

export default GenreIndex;