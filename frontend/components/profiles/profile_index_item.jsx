import React from 'react';
import { Link } from 'react-router-dom';

const profileIndexItem = (props) => {
    return(
        <li>
            
            <Link className="profile-link" to={`/${props.profile.name}`}><img className="profile-pic" src={props.profile.image_url}/><p className="profile-name">{props.profile.name}</p></Link>

            
        </li>
    )
}

export default profileIndexItem;    