import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  useEffect(() => {
    props.fetchProfiles().then(() => props.fetchList(props.profile.list.id));
  }, []);

  useEffect(() => {
    props.fetchProfile(props.profileId).then(() => props.fetchList(props.profile.list.id));
  }, [props.profileId]);

  useEffect(() => {
    props.fetchList(props.profile.list.id);
  }, [props.list.list_video_ids.length]);

  const header = $(".nav-bar");
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    scroll >= 50 ? header.addClass("scrolled") : header.removeClass("scrolled");
  });

  const myList = props.profile.id ? <Link to={`/${props.profile.id}/myList`} className="left-nav-links">My List</Link> : null;
  let list;
  if (props.profile.id) {
    let profiles = Object.values(props.profiles);
    profiles = profiles.filter(profile =>
      profile.id !== props.profile.id
    );
    list = profiles.map(profile => {
      return (
        <li className="nav-profile-list" key={profile.id} >
          <Link to={`/${profile.id}`} className="nav-profile-row">
            <img className="nav-pic dropdown" src={profile.image_url} />
            <p className="nav-profile-text">{profile.name}</p>
          </Link>
        </li>
      )
    })
  }

  return (
    <nav className="nav-bar">
      <ul className="primary-nav">
        <li><Link to={`/${props.profile.id}`}><img src={window.logo} className="logo-3" /></Link></li>
        <li><Link to={`/${props.profile.id}`} className="left-nav-links">Home</Link></li>
        <li>{myList}</li>
      </ul>
      <ul className="secondary-nav">
        <li className="left-nav-links"><div className="nav-dropdown">
          <span className="index-profile">
            <img className="nav-pic" src={props.profile.image_url} alt="" />
            <i className="fas fa-sort-down"></i>
          </span>
          <div className="dropdown-content">
            <i className="fas fa-sort-up"></i>
            <ul className="nav-col">
              {list}
              <Link to="/manage-profiles"><h1 className="manage-profile-link-nav">Manage Profiles</h1></Link>
            </ul>
            <p className="nav-2-col"><button className="sign-out-button" onClick={props.logout}>Sign out of Nextup</button></p>
          </div>
        </div>
        </li >
      </ul>
    </nav>
  )
};

export default Nav;