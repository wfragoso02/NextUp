import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';
import VideoIndex from '../videos/video_index';
// import Home from '../home';



class GenreIndex extends React.Component{

    componentDidMount(){
        this.props.fetchGenres();
        this.props.fecthProfile(this.props.match.params.profileId);
        // width: 250px, height
        // width += 100px
    }

    render(){
        const genres = this.props.genres.map(genre => {
            return (
                <li key={genre.id} className="genre-container">
                    <GenreIndexItem  profile={this.props.profile} genre={genre} />
                </li>
            )
        });
        
        return(
            <div className="genre-index-container">
                <Nav profile={this.props.profile} />
                <div className="home" >
                    <video  autoPlay={false} className="home-trailer" >
                        <source src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--397fe4064c019675b5871f1b8ef1f9a3f3950dbe/avengers-trailer.mp4" />
                    </video>
                    {/* <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--81d663ad0fbad6055b8b84f70cc5ed8d292a768a/avengers.jpg" /> */}
                </div>
                <ul className="genre-index">
                    {genres}
                </ul>
            </div>
        )
    }
}

export default GenreIndex;