import React from "react";

const GenreContent = ({video, closeContent }) => {
    if(video === null){
        return(
            <div></div>
        )
    }
    return(
        <div id="content">
            <div className="background">
                <div className="left">{video}</div>
                <div className="right">right</div>
            </div>
            <div className="content-container"><h1></h1></div>
            {/* <button className="bring-up-button" onClick={() => closeContent(movie)}><i className="fas fa-times"></i></button> */}
        </div>
    )
}
// if(video){
//     return(
//     <div className="content">
//       <div className="content__background">
//         <div className="content__background__shadow" />
//         <div
//           className="content__background__image"
//           style={{ 'background-image': `url(${video.image})` }}
//           />
//       </div>
//       <div className="content__area">
//         <div className="content__area__container">
//           <div className="content__title">{video.title}</div>
//           <div className="content__description">
//             {video.year}
//             {video.description}
//           </div>
//         </div>
//         <button className="content__close" onClick={onClose}>
//           <IconCross />
//         </button>
//       </div>
//     </div>)
// }else{
//     return (
//         <div></div>
//         )
// }
// }

export default GenreContent;