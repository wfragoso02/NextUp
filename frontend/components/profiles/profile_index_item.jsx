import React from 'react';
import { Link } from 'react-router-dom'

const profileIndexItem = (props) => {
    return(
        <div className="profile-index-items">
            
            <Link to={`/${props.profile.name}`}><img className="profile-pic" src={props.profile.image_url}/></Link>
            <br/>
            {props.profile.name}
            
        </div>
    )
}

export default profileIndexItem;    