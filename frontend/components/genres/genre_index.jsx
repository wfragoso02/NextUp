import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndex from '../videos/video_index';


class GenreIndex extends React.Component{

    componentDidMount(){
        this.props.fetchGenres();
        this.props.fecthProfile(this.props.match.params.profileId);
    }

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
        return(
            <div className="genre-index-container">
                <Nav profile={this.props.profile} />
                <div className="home" >
                    {mainVideo}
                </div>
                <ul className="genre-index">
                    {genres}
                </ul>
            </div>
        )
    }
}

export default GenreIndex;