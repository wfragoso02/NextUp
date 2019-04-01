import React from 'react';
import VideoItem from '../videos/video_item';
import NavContainer from '../nav/nav_cotainer';

class GenreShow extends React.Component{
    componentDidMount(){
        this.props.fetchGenre(this.props.match.params.genreId);
    }
    componentDidUpdate(prevProps){
        if(prevProps.genre.id !== this.props.match.params.genreId){
        this.props.fetchGenre(this.props.match.params.genreId);

        }
    }
    render(){
        const videos = Object.values(this.props.genre.videos).map(video=> {
            return(
                <VideoItem  video={video} key={video.id}/>
            )
        })
        return(
            <div>
                <NavContainer profile={this.props.match.params.profileId}/>
                <ul>
                    {videos}
                </ul>
            </div>
        )
    }
}
export default GenreShow;