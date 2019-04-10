import React from 'react';
import VideoItem from '../videos/video_item';
import NavContainer from '../nav/nav_cotainer';

class GenreShow extends React.Component{
    componentDidMount(){
        this.props.fetchGenre(this.props.match.params.genreId);
    }
    componentDidUpdate(prevProps){
        // debugger
        if (prevProps.match.params.genreId !== this.props.match.params.genreId) {
            this.props.fetchGenre(this.props.match.params.genreId);
        }
    }
    render(){
        debugger
        if (!this.props.genre.videos){
            return null;
        }
        const videos = Object.values(this.props.genre.videos).map(video=> {
            return(
                <VideoItem  video={video} key={video.id}/>
            )
        })
        return(
            <div>
                <NavContainer profileId={this.props.match.params.profileId}/>
                <h1>{this.props.genre.title}</h1>
                <ul>
                    {videos}
                </ul>
                {/* <h1>hello</h1> */}
            </div>
        )
    }
}
export default GenreShow;