import React from 'react';
import { Link } from 'react-router-dom';

const profileIndexItem = ({profile}) => {
  return (
    <li>
      <Link className="profile-link" to={`/${profile.id}`}><img className="profile-pic" src={profile.image_url} /><p className="profile-name">{profile.name}</p></Link>
    </li>
  )
}

export default profileIndexItem;    