import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndexItem from '../videos/video_index_item';
import {Link} from 'react-router-dom';


class GenreIndex extends React.Component{

    componentDidMount(){
        this.props.fecthProfile(this.props.match.params.profileId);
        this.props.fetchGenres();
    }
    componentDidUpdate(prevProps){
        if (prevProps.profile.id !== this.props.profile.id){
            this.props.fecthProfile(this.props.match.params.profileId);
        }

        if (prevProps.list.video_ids && this.props.list.video_ids.length !== prevProps.list.video_ids.length){
            this.props.fetchList();
        }
        
    }

    render(){
        const genres = this.props.genres.map((genre, idx) => {
            return (
                <li key={idx} className="genre-container">
                    <GenreIndexItem  deleteListItem={this.props.deleteListItem}  list={this.props.list}createListItem={this.props.createListItem} profile={this.props.profile} genre={genre} />
                </li>
            )
        });
        let mainVideo;
        // if (this.list.)
        if (this.props.genres[0]){
            mainVideo = (
                <video  autoPlay={false} className="home-trailer" >
                    <source src={Object.values(this.props.genres[0].videos)[0].video_url} />
                </video>
            )
        }else{
            mainVideo = (
                <h1>No Video Here</h1>
            )
        }
        let listVideos;
        if (!this.props.list.videos){
            return null;
        }else{
            listVideos = this.props.list.videos.map(video => {
                return (
                    <li key={Math.floor(Math.random() * 1000000)}>
                        <VideoIndexItem deleteListItem={this.props.deleteListItem}  list={this.props.list}createListItem={this.props.createListItem} video={video} />
                    </li>
                )
            })
        }
        return(
            <div className="genre-index-container">
                <Nav profile={this.props.profile} />
                <div className="home" >
                    {mainVideo}
                </div>
                <div className="my-list-items">
                    <Link to={`/myList/${this.props.list.id}`}>My List</Link>
                    <ul>
                        {listVideos}
                    </ul>
                </div>
                <ul className="genre-index">
                    {genres}
                </ul>
            </div>
        )
    }
}

export default GenreIndex;