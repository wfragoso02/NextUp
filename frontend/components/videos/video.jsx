import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: this.props.video,
            content: "►",
            volume: "1",
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
        this.controlsShow = this.controlsShow.bind(this);
        this.controlsHide = this.controlsHide.bind(this);
        this.checkVideo = this.checkVideo.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
        this.props.fetchVideo(this.props.match.params.videoId).then(({ video }) => {
            this.setState({ video: video });
        });
        this.props.fetchProfile(this.props.match.params.profileId);

        this.handle = setInterval(this.checkSeek, 500);
        this.videoPlayer = setInterval(this.checkVideo, 3000);

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
        clearInterval(this.videoPlayer);
    }

    checkVideo(){
        if(this.refs.player){
            if(this.refs.player.paused){
                this.controlsShow();
            }else{
                this.controlsHide();
            }
        }
    }

    controlsShow(){
        clearTimeout();
        setTimeout(function(){
            document.getElementById('parsed-button').style.display="flex";
            document.getElementById('rewind-button').style.display="block";
            document.getElementById('forward-button').style.display="block";
            document.getElementById('back').style.display="block";
            document.getElementById('volume-button').style.display="flex";
            document.getElementById('toggle-full').style.display="flex";
            document.getElementById('movie-duration').style.display="flex";
            document.getElementById('video-info').style.display="flex";
            document.getElementById('view-bar').style.display="flex";
        }, 100);
    }

    controlsHide(){
        clearTimeout();
        setTimeout(function(){
            document.getElementById('parsed-button').style.display="none";
            document.getElementById('rewind-button').style.display="none";
            document.getElementById('forward-button').style.display="none";
            document.getElementById('back').style.display="none";
            document.getElementById('volume-button').style.display="none";
            document.getElementById('toggle-full').style.display="none";
            document.getElementById('movie-duration').style.display="none";
            document.getElementById('video-info').style.display="none";
            document.getElementById('view-bar').style.display="none";
        }, 2000)
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
        e.preventDefault();
        this.refs.player.volume = parseFloat(e.target.value);
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
            this.setState({ volume: '1' });
        } else {
            this.refs.player.muted = true;
            this.setState({ volume: '0' });
        }
    }


    checkSeek(){
        if(this.refs.player){
            this.setState({seek: this.refs.player.currentTime});
            this.setState({time: this.secondsToString(Math.floor(this.refs.player.duration - this.refs.player.currentTime))});
        }
    }

   

    render() {
        if (!this.state.video.video_url) {
            return null;
        }
        
        let volumes;
        if (this.state.volume === '0') {
            volumes = <i className="fas fa-volume-mute"></i>
        } else {
            volumes = <i className="fas fa-volume-up"></i>
        }
        let max;
        if(this.refs.player){
            max = `${Math.floor(this.refs.player.duration)}`
        }else{
            max = '1';
        }
        

        return (
            <div onMouseMove={this.controlsShow}>
                <Link to={`/${this.props.profile.id}`} id="back"><i className="fas fa-arrow-left" ><h6 className="back-text">Back to Browser</h6></i></Link>
                <div className="video-player">
                    <video ref="player" id="thevideo" className="player" src={this.state.video.video_url} poster={this.state.video.image_url} preload="meta"></video>
                    <button onMouseOver={this.controlsShow} onClick={this.handleVideo} id="parsed-button" >{this.state.content}
                    </button>
                    <button onMouseOver={this.controlsShow} onClick={this.changeCurrentTime(10)} id="forward-button"><i className="fas fa-redo"></i><h6>10</h6>
                    </button>
                    <button onMouseOver={this.controlsShow} onClick={this.changeCurrentTime(-10)} id="rewind-button"><i className="fas fa-undo"></i><h6>10</h6>
                    </button>
                    <button onMouseOver={this.controlsShow} onClick={this.fullScreen()} id="toggle-full"><i className="fas fa-compress"></i>
                    </button>
                    <div className="volume-controls">
                    <button onMouseOver={this.controlsShow} onClick={this.setMuted} id="volume-button">{volumes}</button>
                    <input onMouseOver={this.controlsShow} type="range" min="0" max="1" step="0.01" value={this.state.volume} className="volume-bar" onChange={this.changeVolume}/>
                    </div>
                    <input onMouseOver={this.controlsShow} type="range" min="0" max={max} step="1" value={this.state.seek} id="view-bar" onChange={this.changeSeek(max)}/>
                    <h1 onMouseOver={this.controlsShow} id="video-info">{this.state.video.title}</h1>
                    <h6 onMouseOver={this.controlsShow} id="movie-duration">{this.state.time}</h6>
                </div>
            </div>
        )
    }
}
        
export default Video;

