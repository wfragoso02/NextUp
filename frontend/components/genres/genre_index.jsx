import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndexItem from '../videos/video_index_item';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import GenreContent from './genre_content';
import ArrowLeft from '../arrow_left';
import ArrowRight from '../arrow_right';


class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: "1",
      start: 0,
      count: 1,
      genres: [],
      selectedItem: null,
      length: 0,
      shift: 0,
      promoVideo: this.props.promoVid
    };

    this.updateCount = this.updateCount.bind(this);
    this.setMuted = this.setMuted.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
    this.closeContent = this.closeContent.bind(this);
    this.changeShift = this.changeShift.bind(this);
  }

  changeShift(num){
    this.setState({ shift: num});
  }

  componentDidMount() {
    this.props.fetchVideos().then(() => {
      const promoVideo = Object.values(this.props.all_videos)[Math.floor(Math.random() * Object.values(this.props.all_videos).length)];
      if(this.state.promoVideo === undefined){
        this.setState({promoVideo: promoVideo});
      }
    });
    this.props.fecthProfile(this.props.match.params.profileId);
    this.props.fetchGenres().then((res) => {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      this.setState({ genres: Object.values(res.genres).slice(0, 1), length: this.props.list.list_video_ids.filter(onlyUnique).length - 5 });
    });
  }

  // useEffect(() => {
  //   props.fetchVideos();
  //   props.fecthProfile(props.match.params.profileId);
  //   props.fetchGenres().then((res) => {
  //     function onlyUnique(value, index, self) {
  //       return self.indexOf(value) === index;
  //     }
  //     setState({ genres: Object.values(res.genres).slice(0, 1), length: props.list.video_ids.filter(onlyUnique).length - 5 });
  //   });
  // }, [])

  componentDidUpdate(prevProps) {
    if (prevProps.profile.id !== this.props.profile.id) {
      this.setState({selectedItem: null});
      this.props.fecthProfile(this.props.match.params.profileId).then(() => this.props.fetchList(this.props.profile.list.id)).then(() => this.props.fetchVideos());
    }
    if (prevProps.list.list_video_ids && (this.props.list.list_video_ids.length !== prevProps.list.list_video_ids.length)) {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      this.setState({ length: this.props.list.list_video_ids.filter(onlyUnique).length - 5 });
    }
  }

  updateCount() {
    setTimeout(() => {
      this.setState({ start: this.state.count, count: this.state.count + 1, genres: this.state.genres.concat(this.props.genres.slice(this.state.count, this.state.count + 1)) });
    }, 700);
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

  closeContent(id = null) {
    if (id) {
      this.setState({ [id]: null });
    } else {
      this.setState({ selectedItem: null });
    }
  }

  selectListItem(video, id = null) {
    if (id) {
      this.setState({ [id]: video });
    } else {
      this.setState({ selectedItem: video });
    }
  }

  render() {
    console.log(this.state.promoVideo)
    if (!this.props.list || Object.values(this.props.all_videos).length < 1) return null;
    const genres = this.state.genres.map((genre, idx) => {
      return (
        <>
          <li key={`${genre.id}-${idx}`}>
            <GenreIndexItem
              selectListItem={this.selectListItem}
              currVid={this.state[genre.id]}
              genre={genre} />
          </li>
          <GenreContent id={genre.id} video={this.state[genre.id]} closeContent={this.closeContent} />
        </>
      )
    });

    let defaultButton = "";
    if (!this.props.list.list_video_ids || !this.props.genres[0]) {
      return null;
    }

    this.props.list.list_video_ids.includes(this.state.promoVideo.id) ?
      defaultButton = (<button onClick={() => this.props.deleteListItem(this.state.promoVideo.id)} className="front-page-button"><h3 className="fa-check-text"><i className="fas fa-check"></i>My List </h3></button>)
      :
      defaultButton = (<button onClick={() => this.props.createListItem({ video_id: this.state.promoVideo.id, list_id: this.props.list.id })} className="front-page-button"><h3 className="fa-plus-text"><i className="fas fa-plus"></i>My List</h3></button>)
      ;

    let volumes;
    if (this.state.volume === 0) {
      volumes = <i className="fas fa-volume-mute fa-xs"></i>
    } else {
      volumes = <i className="fas fa-volume-up fa-xs"></i>
    }
    let mainVideo;
    if (Object.values(this.props.all_videos).length > 0) {
      mainVideo = (
        <>
          <video ref='player' className="home-trailer" loop autoPlay>
            <source src={this.state.promoVideo.video_url} />
          </video>
          <div className={`main-video-title ${this.state.promoVideo.title.length > 25 ? "large-title": "small-title"}`}>
            <h1 >{this.state.promoVideo.title}</h1>
            <div className="genre-content-play-and-list">
              <Link to={`/${this.props.profile.id}/videos/${this.state.promoVideo.id}`} className="play-button"><h3>► Play</h3></Link>
              {defaultButton}
            </div>
          </div>
          <button onClick={this.setMuted} className="home-page-volume-button">{volumes}</button>
          <h1 className="main-video-rating">{this.state.promoVideo.rating}</h1>
        </>
      )

    } else {
      mainVideo = (
        <h1>No Video Here</h1>
      )
    }

    let myList;

    let listVideos;
    myList = <div className="genre-index-links"><h2 className="genre-content"><Link to={`/${this.props.profile.id}/myList`} >My List</Link></h2></div>
    if (!this.props.list.list_video_ids) {
      return null;
    } else {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      listVideos = this.props.list.list_video_ids.filter(onlyUnique).map(video_id => {
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
        <ArrowLeft shift={this.state.shift} id={this.props.list.id} changeShift={this.changeShift} />
      ) : arrowLeft = null;

    let arrowRight
    this.state.shift < this.state.length ?
      arrowRight = (
        <ArrowRight shift={this.state.shift} id={this.props.list.id} changeShift={this.changeShift} />
      ) : arrowRight = null;

    return (
      <div className="genre-index-container">
        <Nav profileId={this.props.profile.id} />
        <div className="home" >
          {mainVideo}
        </div>
        <div>
          {myList}
          <br />
          <ul className="row">
            {arrowLeft}
            {listVideos}
            {arrowRight}
          </ul>

          <GenreContent id={null} video={this.state.selectedItem} closeContent={this.closeContent} />
        </div>
        <br />

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