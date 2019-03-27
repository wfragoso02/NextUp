import React from 'react';
import { Link } from 'react-router-dom'

const profileIndexItem = (props) => {
    return(
        <div className="profile-index-items">
            <Link to="/">{props.profile.name}</Link>
        </div>
    )
}

export default profileIndexItem;    