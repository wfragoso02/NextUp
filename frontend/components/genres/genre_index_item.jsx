import React from 'react';
import {Link} from 'react-router-dom';


const GenreIndexItem = (props) => {
    return(
        <div className="genreItems">
            <Link className="genres-index" to={`/${props.profile.id}/${props.genre.name}`}>{props.genre.name}</Link>
        </div>
    )
}

export default GenreIndexItem;