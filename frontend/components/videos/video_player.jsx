import React from 'react';

class VideoPlayer extends React.Component{
    render(){
        return(
            <video  controls className="video-show" >
                <source src={this.props.source}/>
            </video>
        )
    }
}
export default VideoPlayer;