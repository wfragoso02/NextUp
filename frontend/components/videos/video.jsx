import React from 'react';

class Video extends React.Component{
    constructor(props){
        super(props);
        this.state = {video_url: this.props.video.video_url};
    }
    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId).then(({video}) => {
           this.setState({video_url: this.props.video.video_url});
        });
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.videoId !== prevProps.match.params.videoId){
        this.props.fetchVideo(this.props.match.params.videoId);

        }
    }
    render(){
        if (!this.state.video_url) {
            return null;
        }
        // const player = document.querySelector('.player');
        // const video = player.querySelector('.player-video');
        // const progress = player.querySelector('.progress');
        // const progressFilled = player.querySelector('filled-progress');
        // const toggle = player.querySelector('.toggle-play');
        // const skippers = player.query

        return (
            <div className="video-player">
                <video  controls={true} className="video-show" >
                    <source src={this.state.video_url}/>
                </video>

                <div className="player-controls">
                    <div className="progress">
                        <div className="filled-progress"></div>
                    </div>
                    <div className="play-button">
                        <button className="player-button toggel-play" title="Toggle Play">
                            <svg className="" width="16" height="16" viewBox="0 0 16 16" ></svg>
                        </button>
                    </div>
                    <div className="sliders">
                        <input type="range" name="volume" className="player-slider" min="0" max="1" step="0.05"  />
                        <input type="range" name="playbackRate" className="player-slider" min="0.5" max="2" step="0.1"  />
                    </div>
                    <button data-skip="-10" className="player-btn">« 10s</button>
                    <button data-skip="10" className="player-btn">10s »</button>
                </div>
            </div>
        )
    }
}

export default Video;