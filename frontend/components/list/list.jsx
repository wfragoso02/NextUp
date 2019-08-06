import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../videos/video_index_item';
import Nav from '../nav/nav_cotainer';
import Footer from '../footer';
import GenreContent from '../genres/genre_content';
import Arrow from '../arrow';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '1',
      selectedItem: null,
      length: 0,
      shift: 0
    };

    this.closeContent = this.closeContent.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
    this.setMuted = this.setMuted.bind(this);
    this.changeShift = this.changeShift.bind(this);
  }

  changeShift(num){
    this.setState({ shift: num});
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.profileId).then(() => {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      this.setState({ length: this.props.list.list_video_ids.filter(onlyUnique).length - 5 });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile.id !== this.props.profile.id) this.props.fetchProfile(this.props.match.params.profileId).then(() => this.props.fetchVideos());
    if (prevProps.list.list_video_ids && this.props.list.list_video_ids.length !== prevProps.list.list_video_ids.length) {
      this.props.fetchList(this.props.profile.list.id).then((res) => {
        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
        this.setState({ length: res.list.list_video_ids.filter(onlyUnique).length - 5 });
      });
    }
  }

  setMuted() {
    if (this.refs.player.muted) {
      this.refs.player.muted = false;
      this.setState({ volume: 1 });
    } else {
      this.refs.player.muted = true;
      this.setState({ volume: 0 });
    }
  }

  closeContent() {
    this.setState({ selectedItem: null });
  }

  selectListItem(video) {
    this.setState({ selectedItem: video });
  }

  render() {
    if (!this.props.list.list_video_ids || Object.values(this.props.all_videos).length < 1) return null;
    let arrowLeft;
    this.state.shift > 0 ?
      arrowLeft = (
        <Arrow direction='left' shift={this.state.shift} id={this.props.list.id} changeShift={this.changeShift} />
      ) : arrowLeft = null;

    let arrowRight
    this.state.shift < this.state.length ?
      arrowRight = (
        <Arrow direction='right' shift={this.state.shift} id={this.props.list.id} changeShift={this.changeShift} />
      ) : arrowRight = null;

    if (this.props.list.list_video_ids.length === 0) {
      return (
        <div className="genre-show">
          <Nav profileId={this.props.match.params.profileId} />
          <div className="no-list" >
            <h1 className="no-list-text">Add Items to your List</h1>
          </div>
          <Footer />
        </div>
      )
    }
    
    let volumes;
    if (this.state.volume === 0) {
      volumes = <i className="fas fa-volume-mute fa-xs"></i>
    } else {
      volumes = <i className="fas fa-volume-up fa-xs"></i>
    }
    
    let mainVideo;
    if (Object.values(this.props.all_videos).length > 0) {
      const video_id = Object.values(this.props.list.list_video_ids)[Math.floor(Math.random() * Object.values(this.props.list.list_video_ids).length)];
      const video = this.props.all_videos[video_id];
      mainVideo = (
        <>
          <video ref='player' className="home-trailer" loop autoPlay>
            <source src={video.video_url} />
          </video>
          <div className="main-video-title">
            <h1>My List</h1>
            <div className="genre-content-play-and-list">
              <Link to={`/${this.props.profile.id}/videos/${video.id}`} className="play-button"><h3>► Play</h3></Link>
            </div>
          </div>
          <button onClick={this.setMuted} className="home-page-volume-button">{volumes}</button>
          <h1 className="main-video-rating">{video.rating}</h1>
        </>
      )
    } else {
      mainVideo = (
        <h1>No Video Here</h1>
      )
    }
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const videos = this.props.list.list_video_ids.filter(onlyUnique).map(video_id => {
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
          className="actual-video"
        />
      )
    })

    return (
      <div className="genre-show">
        <Nav profileId={this.props.match.params.profileId} />
        <div className="home" >
          {mainVideo}
        </div>
        <div className="row">
          {arrowLeft}
          {videos}
          {arrowRight}
        </div>
        <GenreContent video={this.state.selectedItem} closeContent={this.closeContent} />
        <Footer />
      </div>
    )
  }
}

export default List;