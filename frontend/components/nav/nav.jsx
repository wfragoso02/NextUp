import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles().then(this.props.fetchProfile(this.props.profileId)).then(this.props.fetchList(this.props.profile.list.id))
        
    }
    componentDidUpdate(prevProps){
        if(prevProps.profileId !== this.props.profileId){
            this.props.fetchProfiles().then(this.props.fetchProfile(this.props.profileId)).then(this.props.fetchList(this.props.profile.list.id))
        }
        if(prevProps.list.video_ids.length !== this.props.list.video_ids.length){
            this.props.fetchList(this.props.profile.list.id)
        }
    }
    render(){
        let list;
        let myList;
        if (this.props.profile.id){
            myList = <Link to={`/${this.props.profile.id}/myList`} className="left-nav-links">My List</Link>
            
            let profiles = Object.values(this.props.profiles);
            profiles = profiles.filter(profile => 
                profile.id !== this.props.profile.id
                
            );
            list = profiles.map(profile => {
                return(
                    <li className="nav-profile-list" key={profile.id} >
                        <Link to={`/${profile.id}`} className="nav-profile-row">
                            <img className="nav-pic" src={profile.image_url}/>
                            <p className="nav-profile-text"style={{display:"flex"}}>{profile.name}</p>
                        </Link>
                    </li>
                )
            })
        }
        
        const header = $(".nav-bar");
  
        $(window).scroll(function() {    
            const scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        }); 

        return(
            <nav className="nav-bar">
                <ul className="primary-nav">
                    <li><Link to={`/${this.props.profile.id}`}><img src={window.logo} className="logo-3"/></Link></li>
                    <li><Link to={`/${this.props.profile.id}`} className="left-nav-links">Home</Link></li>
                    <li><h1 to="/tv-shows" className="left-nav-links">TV Shows</h1></li>
                    <li><h1 to="/movies" className="left-nav-links">Movies</h1></li>
                    <li>{myList}</li>
                </ul>
                <ul className="secondary-nav">
                    <li className="left-nav-links"><i className="fas fa-search"></i></li>
                    <li className="left-nav-links"><div className="nav-dropdown">
                        <span className="index-profile">
                            <img className="nav-pic"src={this.props.profile.image_url} alt=""/>
                            <i className="fas fa-sort-down"></i>
                        </span>
                        {/* <div className="Rand">
                        </div> */}
                        <div className="dropdown-content">
                        <i className="fas fa-sort-up"></i>
                            <ul className="nav-col">
                                {list}
                                <Link to="/manage-profiles"><h1 className="manage-profile-link-nav">Manage Profiles</h1></Link>
                            </ul>
                            <p className="nav-2-col"><button className="sign-out-button"onClick={this.props.logout}>Sign out of Nextup</button></p>
                        </div>
                    </div>
                    </li >
                </ul>
            </nav>
        )
    }
}
  
  

export default Nav;
