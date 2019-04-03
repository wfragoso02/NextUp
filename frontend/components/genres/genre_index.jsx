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
    // componentDidUpdate(prevProps){
    //     if (this.props.match.params.profileId !== prevProps.profile.id ){
    //         if(this.props.profile.myList.id !== prevProps.profile.myList.id){
    //             this.fetchList(this.props.profile.myList.id);
    //         }
    //     }
    // }

    render(){
        const genres = this.props.genres.map((genre, idx) => {
            return (
                <li key={idx} className="genre-container">
                    <GenreIndexItem  profile={this.props.profile} genre={genre} />
                </li>
            )
        });
        let mainVideo;
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
        debugger

        let listVideos;
        if (Object.values(this.props.list).length === 0){
            return null;
        }else{
            debugger
            listVideos = Object.values(this.props.list)[0].videos.map(video => {
                return (
                    <li key={Math.floor(Math.random() * 1000000)}>
                        <VideoIndexItem video={video} />
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