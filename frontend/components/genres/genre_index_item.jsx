import React from 'react';


const GenreIndexItem = (props) => {
    return(
        <div className="genreItems">
            <h1>{props.genre.name}</h1>
        </div>
    )
}

export default GenreIndexItem;