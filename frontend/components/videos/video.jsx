import React from 'react';
import VideoPlayer from './video_player';
import { Player, ControlBar, PlayToggle, LoadingSpinner } from 'video-react';
import { Link } from 'react-router-dom';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: this.props.video,
            content: "►",
            volume: "1",
            seek: "0"
            
        };
        // this.play = this.play.bind(this);
        // this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.changeSeek = this.changeSeek.bind(this);
    }
    componentDidMount() {
        this.mounted = true;
        this.props.fetchVideo(this.props.match.params.videoId).then(({ video }) => {
            this.setState({ video: video });
        });
        
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);

        }

                
       
    }
   
    handleVideo(){
        if (this.state.content === "►"){
            this.refs.player.play();
            this.setState({content: "||"});
        }else{
            this.refs.player.pause();
            this.setState({content: "►"});
        }
    }
    load() {
        this.refs.player.load();
    }

    changeCurrentTime(seconds) {
        return () => {
            this.refs.player.currentTime += seconds;
        };
    }

    seek(seconds) {
        return () => {
            this.refs.player.seek(seconds);
        };
    }
    changeSeek(e){
        const time = this.refs.player.duration * (e.target.value / 100);
        this.refs.player.currentTime = time;
        this.setState({seek: time});
    }
    changeVolume(e) {
        this.refs.player.volume = e.target.value;
        this.setState({volume: e.target.value});
    }
    fullScreen(){
        return() => {
                if (this.refs.player.requestFullscreen) {
                  this.refs.player.requestFullscreen();
                } else{

                    this.refs.player.webkitRequestFullscreen();
                }
        };
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
    checkSeek(){
        const time = this.refs.player.currentTime;
        if (this.state.seek !== time){
            this.setState({seek: time});
        }
    }

    // setInterval(() => {
    //     this.checkSeek;
    // }, 1000);


    render() {
        if (!this.state.video.video_url) {
            return null;
        }
        let volumes;
        if (this.state.volume === 0) {
            volumes = <i className="fas fa-volume-mute"></i>
        } else {
            volumes = <i className="fas fa-volume-up"></i>
        }

        return (
            <div >
                <Link to={`/${this.props.profile.id}`} className="back"><i className="fas fa-arrow-left" ><h6 className="back-text">Back to Browser</h6></i></Link>
                <div className="video-player">
                    <video ref="player" className="player" src={this.state.video.video_url} poster={this.state.video.image_url} preload="meta"></video>
                    <button onClick={this.handleVideo} className="parsed-button" >{this.state.content}
                    </button>
                    <button onClick={this.changeCurrentTime(10)} className="forward-button"><i className="fas fa-redo"></i><h6>10</h6>
                    </button>
                    <button onClick={this.changeCurrentTime(-10)} className="rewind-button"><i className="fas fa-undo"></i><h6>10</h6>
                    </button>
                    <button onClick={this.fullScreen()} className="toggle-full"><i className="fas fa-compress"></i>
                    </button>
                    <div className="volume-controls">
                    <button onClick={this.setMuted} className="volume-button">{volumes}
                    <input type="range" orient="vertical" min="0" max="1" step="0.00000000000000000000000000001"value={this.state.volume} className="volume-bar" onChange={this.changeVolume}/></button>
                    </div>
                    <input type="range" min="0" max="100" step="0.00000000000000001" value={this.state.seek} className="view-bar" onChange={this.changeSeek}/>
                    <h1 className="video-info">{this.state.video.title}</h1>
                    <h6 className="movie-duration">{this.state.seek}</h6>
                </div>
            </div>
        )
    }
}
        
export default Video;

