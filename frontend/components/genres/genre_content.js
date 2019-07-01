import React from "react";

const GenreContent = ({video, closeContent }) => {

    if(!video){
        return(
            <div></div>
        )
    }
    let videoDescription;
    video.description.length > 300 ? videoDescription = (video.description.slice(0,300) + "..." ) : videoDescription = video.description;
    return(
        <div id="content">
            <div className="background" >
                <div className="left">
                    <h1 className="genre_content_header">{video.title}</h1>
                    <br/>
                    <h1 className="genre_content_year">{video.year} - {video.rating}</h1>
                    <br/>
                    <p className="genre_content_text" >{videoDescription}</p>
                </div>
                <div className="right" style={{background: `url(${video.image_url})`}}>right</div>
                </div>
                <div className="content-container">
                
                </div> 
            <button className="bring-up-button" onClick={() => closeContent()}><i className="fas fa-times"></i></button>
        </div>
    )
}


export default GenreContent;