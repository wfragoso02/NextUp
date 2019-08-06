import React, { useEffect } from 'react';
import ProfileIndexItem from './profile_index_item';
import { Link } from 'react-router-dom';

const profileIndex = ({ profiles, fetchProfiles }) => {
  useEffect(() => {
    fetchProfiles();
  }, []);
  
  const all_profiles = profiles.map((profile, idx) => {
    return <ProfileIndexItem key={idx} profile={profile} className="profile-item" />
  });

  const link = profiles[0] ? 
    <Link to={`/${profiles[0].id}`} profile={profiles[0]}><img src={window.logo} className="logo2" /></Link>
  :
    null;
  ;

  return (
    <div>
      {link}
      <div className="profiles-page">
        <h1 className="whos-watching">Who's watching?</h1>
        <ul className="profiles">
          <div className="profile-container">
            {all_profiles}
          </div>
        </ul>
      </div>
      <Link className="manage-profiles" to="/manage-profiles" ><h2 >MANAGE PROFILES</h2></Link>
    </div>
  )
}

export default profileIndex;