import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import NavContainer from '../nav/nav_cotainer';
import Footer from '../footer';
import GenreContent from '../genres/genre_content';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            volume: '1',
            selectedItem: null,
            length: 0,
            shift: 0
        }
        this.closeContent = this.closeContent.bind(this);
        
        this.selectListItem = this.selectListItem.bind(this);
        this.setMuted = this.setMuted.bind(this);
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
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

    componentDidMount(){
        this.props.fetchProfile(this.props.match.params.profileId).then(() => {
            function onlyUnique(value, index, self) { 
                return self.indexOf(value) === index;
            }
            this.setState({length: this.props.list.video_ids.filter(onlyUnique).length - 5});
        })
    }

    componentDidUpdate(prevProps){

        if (prevProps.profile.id !== this.props.profile.id) this.props.fetchProfile(this.props.match.params.profileId).then(() => this.props.fetchVideos());
        if (prevProps.list.video_ids && this.props.list.video_ids.length !== prevProps.list.video_ids.length){
            this.props.fetchList(this.props.profile.list.id).then((res) => {
                function onlyUnique(value, index, self) { 
                    return self.indexOf(value) === index;
                }
                this.setState({length: res.list.video_ids.filter(onlyUnique).length - 5});
            });
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

    closeContent(){
        this.setState({selectedItem: null})
    }

    selectListItem(video){
        this.setState({selectedItem: video});
    }

    render(){
        if (!this.props.list.video_ids || Object.values(this.props.all_videos).length < 1) return null;
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


        if (this.props.list.video_ids.length === 0){
            return(
                <div className="genre-show">
                    <NavContainer profileId={this.props.match.params.profileId} />
                    <div className="no-list" >
                        <h1 className="no-list-text">Add Items to your List</h1>
                    </div>
                    <Footer />
                </div>
            )
        }

        const  defaultButton = (<button onClick={() => this.props.deleteListItem(Object.values(this.props.genre.videos)[0].id)} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
       
        let volumes;
        if (this.state.volume === 0) {
            volumes = <i className="fas fa-volume-mute fa-xs"></i>
        } else {
            volumes = <i className="fas fa-volume-up fa-xs"></i>
        }

        let mainVideo;
        if (this.props.list.videos){
            mainVideo = (
                <>
                    <video ref='player' className="home-trailer" loop autoPlay>
                        <source src={Object.values(this.props.list.videos)[0].video_url} />
                    </video>
                    <Link to={`/${this.props.profile.id}/videos/${Object.values(this.props.list.videos)[0].id}`} className="play-button"><h3>► Play</h3></Link>
                    {defaultButton}
                    <button onClick={this.setMuted} className="home-page-volume-button">{volumes}</button>
                    <h1 className="main-video-title">My List</h1>
                    <h1 className="main-video-rating">{Object.values(this.props.list.videos)[0].rating}</h1>
                </>
            )
        }else{
            mainVideo = (
                <h1>No Video Here</h1>
            )
        }
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        const videos = this.props.list.video_ids.filter(onlyUnique).map(video_id=> {
            return(
                <VideoIndexItem 
                    classId={this.props.list.id}
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
                <div className="row">
                {arrowLeft}
                        {videos}
                    {arrowRight}
                </div>
                <GenreContent video={this.state.selectedItem} closeContent={this.closeContent}/>
                <Footer />
            </div>
        )
    }
}
export default List;