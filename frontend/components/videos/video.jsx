import React from 'react';

class Video extends React.Component{
    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
    }
    render(){
        return(

            <div>
                <h1>{this.props.video.title}</h1>
                <img src={this.props.video.image_url} alt=""/>
            </div>
        )
    }
}

export default Video;