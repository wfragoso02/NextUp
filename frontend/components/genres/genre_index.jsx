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
            selectedItem: null,
            length: 0,
            shift: 0,
        };

        this.updateCount = this.updateCount.bind(this)
        this.setMuted = this.setMuted.bind(this);
        this.selectListItem = this.selectListItem.bind(this);
        this.closeContent = this.closeContent.bind(this);
        this.hoverItem = this.hoverItem.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideos();
        this.props.fecthProfile(this.props.match.params.profileId);
        this.props.fetchGenres().then((res) =>{ 
        this.setState({genres: Object.values(res.genres), length: this.props.list.video_ids.length - 5})
        });
    }

    

    componentDidUpdate(prevProps){
        if (prevProps.profile.id !== this.props.profile.id){
            this.props.fecthProfile(this.props.match.params.profileId);
        }

        if (prevProps.list.video_ids && (this.props.list.video_ids.length !== prevProps.list.video_ids.length)){
            this.props.fetchList(this.props.profile.list.id).then((res => {
                this.setState({length: res.list.video_ids.length - 5})
            }
                ))
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

    hoverItem(video){
        if(this.state.selectedItem && this.state.selectedItem.id !== video.id){
            this.selectListItem(video)
        }
    }
    shiftRight(){
        if(this.state.shift < this.state.length){
            const elements = document.getElementsByClassName(`${this.props.list.id}`)
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
            const elements = document.getElementsByClassName(`${this.props.list.id}`)
            Array.from(elements).map(element => {
                const leftIdx = element.style.transform.indexOf("(");
                const rightIdx = element.style.transform.indexOf(")");
                element.style.transform.length < 1 ? element.style.transform = "translateX(19vw)" : 
                element.style.transform = `translateX(${parseInt(element.style.transform.slice(leftIdx + 1, rightIdx - 2)) + 19}vw)`;
            })
            this.setState({shift: this.state.shift - 1})
        }
    }

    closeContent(){
        this.setState({selectedItem: null})
    }

    selectListItem(video){
        this.setState({selectedItem: video});
    }

    render(){
        if(!this.props.list)return null;

        const genres = this.state.genres.map((genre, idx) => {
            return (
                <li key={Math.floor(Math.random() * 1000000)}>
                    <GenreIndexItem  key={Math.floor(Math.random() * 1000000)} 
                    profile={this.props.profile} 
                    genre={genre} />
                </li>
            )
        });
        
        let defaultButton = "";
        if (!this.props.list.video_ids || !this.props.genres[0]){
            return null;
        }

        this.props.list.video_ids.includes(this.props.genres[0].video_ids[0]) ? 
            defaultButton = (<button onClick={() => this.props.deleteListItem(this.props.genres[0].video_ids[0])} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
        :
            defaultButton = (<button onClick={() => this.props.createListItem({ video_id: this.props.genres[0].video_ids[0], list_id: this.props.list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>)
        ;
       
        let volumes;
        if (this.state.volume === 0) {
            volumes = <i className="fas fa-volume-mute fa-xs"></i>
        } else {
            volumes = <i className="fas fa-volume-up fa-xs"></i>
        }
        let mainVideo;
        if (this.props.all_videos && this.props.genres){
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
                        <VideoIndexItem 
                        classId={this.props.list.id}
                        currVid={this.state.selectedItem}
                        selectListItem={this.selectListItem} 
                        profile={this.props.profile} 
                        deleteListItem={this.props.deleteListItem}  
                        list={this.props.list}
                        createListItem={this.props.createListItem} 
                        video={this.props.all_videos[video_id]} 
                        className="actual-video" />
                )
            })
        }
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
                    {arrowLeft}
                        {listVideos}
                    {arrowRight}
                    </ul>

                    <GenreContent video={this.state.selectedItem} closeContent={this.closeContent}/>
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