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
            volume: "0.5",
            seek: "0",
            time: '0'
            
        };

        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.changeSeek = this.changeSeek.bind(this);
        this.checkSeek = this.checkSeek.bind(this);
    }
    componentDidMount() {
        this.mounted = true;
        this.props.fetchVideo(this.props.match.params.videoId).then(({ video }) => {
            this.setState({ video: video });
        });
        this.props.fetchProfile(this.props.match.params.profileId);

        this.handle = setInterval(this.checkSeek, 500);

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
        }
        if (this.props.match.params.profileId !== prevProps.match.params.profileId) {
            this.props.fetchProfile(this.props.match.params.profileId);
        }
    }

    componentWillUnmount(){
        clearInterval(this.handle);
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

    changeSeek(max){
        return(e) => {
            const time = this.refs.player.duration * (e.target.value / max);
            this.refs.player.currentTime = time;
            this.setState({seek: time});
        }
    }
    
    changeVolume(e) {
        this.refs.player.volume = e.target.value;
        debugger
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

    secondsToString(seconds){
        let numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        let numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        let numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        if(numhours < 10){
            numhours = '0' + numhours;
        }
        if(numminutes < 10){
            numminutes = '0' + numminutes;
        }
        if(numseconds < 10){
            numseconds = '0' + numseconds;
        }
        return  numhours + ":" + numminutes + ":" + numseconds;
        
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
        this.setState({seek: this.refs.player.currentTime});
        this.setState({time: this.secondsToString(Math.floor(this.refs.player.duration - this.refs.player.currentTime))});
    }

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
        let max;
        if(this.refs.player){
            max = Math.floor(this.refs.player.duration)
        }else{
            max = 1;
        }


        //make sure to incorporate the controls hide when mouse 
        //is idle



        // const timeout = null;
        // if ($(video)){

        //     $(video).on('mousemove', function () {
        //         clearTimeout(timeout);
        //         $('.controls').css("bottom", "0px");
        //         timeout = setTimeout(function () {
        //             $('.vidCE').css("bottom", "-65px");
        //         }, 3000);
        //     });
        // }
        

        return (
            <div >
                <Link to={`/${this.props.profile.id}`} className="back"><i className="fas fa-arrow-left" ><h6 className="back-text">Back to Browser</h6></i></Link>
                <div className="video-player">
                    <video ref="player" id="thevideo" className="player" src={this.state.video.video_url} poster={this.state.video.image_url} preload="meta"></video>
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
                    <input type="range" orient="vertical" min="0" max="1" step="0.01" value={this.state.volume} className="volume-bar" onChange={this.changeVolume}/></button>
                    </div>
                    <input type="range" min="0" max={max} step="1" value={this.state.seek} className="view-bar" onChange={this.changeSeek(max)}/>
                    <h1 className="video-info">{this.state.video.title}</h1>
                    <h6 className="movie-duration">{this.state.time}</h6>
                </div>
            </div>
        )
    }
}
        
export default Video;

