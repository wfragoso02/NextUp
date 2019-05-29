# NextUp

### Welcome to NextUp
NextUp is a fully functional single page pixel perfect app clone from the popular streaming app, Netflix that streams popular trailers for Movies and TV shows.  Users can sign in/sign up and manage up to 5 profiles using CRUD.  Each profile is associated, through ActiveRecord associations, to a respective customizable list.  Users can add and remove items to and from a profiles respective list for later watch.

Visit the [Live](https://nextup-app.herokuapp.com/#/) site here!
  
  
  
![alt text](https://github.com/wfragoso02/NextUp/blob/master/app/assets/images/Screen%20Shot%202019-04-24%20at%208.35.21%20PM.png)

# Technologies
### Nextup uses the following technologies: 
* `Languages`:
  * Ruby
  * Javascript
* `Database`:
  * PostgreSQL
* `Framework`:
  * Rails
* `Libraries`:
  * React/Redux

# Highlight Features
### Custom Video Player
NextUp manipulates lifecycle methods and the event loop for a more controlled and user friendly video player.    
![alt text](https://github.com/wfragoso02/NextUp/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2011.55.23%20AM.png)
  
  
  
```javascript
componentDidMount() {
        this.mounted = true;
        this.props.fetchVideo(this.props.match.params.videoId).then(({ video }) => {
            this.setState({ video: video });
        });
        this.props.fetchProfile(this.props.match.params.profileId);
        this.handle = setInterval(this.checkSeek, 500);
        this.videoPlayer = setInterval(this.checkVideo, 3000);
}
    
componentWillUnmount(){
        this.mounted = false;
        clearInterval(this.handle);
        clearInterval(this.videoPlayer);
        clearTimeout(this.handleControlsShow);
}
```

```javascript
return (
            <div onMouseMove={this.controlsShow}>
                <Link to={`/${this.props.profile.id}`} id="back"><i className="fas fa-arrow-left" ><h6 className="back-text">Back to Browser</h6></i></Link>
                <div className="video-player">
                    <video ref="player" id="thevideo" className="player" src={this.state.video.video_url} poster={this.state.video.image_url} preload="meta"></video>
                    <button onClick={this.handleVideo} id="parsed-button" >{this.state.content}
                    </button>
                    <button onClick={this.changeCurrentTime(10)} id="forward-button"><i className="fas fa-redo"></i><h6>10</h6>
                    </button>
                    <button onClick={this.changeCurrentTime(-10)} id="rewind-button"><i className="fas fa-undo"></i><h6>10</h6>
                    </button>
                    <button  onClick={this.fullScreen()} id="toggle-full"><i className="fas fa-compress"></i>
                    </button>
                    <div className="volume-controls">
                    <button onClick={this.setMuted} id="volume-button">{volumes}</button>
                    <input type="range" min="0" max="1" step="0.01" value={this.state.volume} className="volume-bar" onChange={this.changeVolume}/>
                    </div>
                    <input type="range" min="0" max={max} step="1" value={this.state.seek} id="view-bar" onChange={this.changeSeek(max)}/>
                    <h1 id="video-info">{this.state.video.title}</h1>
                    <h6 id="movie-duration">{this.state.time}</h6>
                </div>
            </div>
        )
```

### AWS
Videos and photos are stored remotely using AWS' S3 buckets through ActiveRecord Associations, taking the weight off my app and placing the dependency on the cloud.
Because of AWS the runtime of my app increased significantly.

# Credit
This app is inspired by the popular streaming site [Netflix](https://netflix.com).
