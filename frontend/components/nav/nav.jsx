import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles();
    }
    
    render(){
        let list;
        if (this.props.profile.id){
            let profiles = Object.values(this.props.profiles);
            profiles = profiles.filter(profile => 
                profile.id !== this.props.profile.id
                
            );
            list = profiles.map(profile => {
                return(
                    <li className="nav-profile-list" key={profile.id} ><Link to={`/${profile.id}`}><img className="nav-pic" src={profile.image_url}/>{profile.name}</Link></li>
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
                    <li><Link to="/home" className="left-nav-links">home</Link></li>
                    <li><Link to="/home" className="left-nav-links">tv shows</Link></li>
                    <li><Link to="/home" className="left-nav-links">movies</Link></li>
                    <li><Link to="/home" className="left-nav-links">recently added</Link></li>
                    <li><Link to="/home" className="left-nav-links">my List</Link></li>
                </ul>
                <ul className="secondary-nav">
                    <li className="left-nav-links">search bar</li>
                    <li className="left-nav-links">kids</li>
                    <li className="left-nav-links">dvd</li>
                    <li className="left-nav-links">alerts</li>
                    <li className="left-nav-links"><div className="nav-dropdown">
                        <span><img className="nav-pic"src={this.props.profile.image_url} alt=""/></span>
                        <div className="dropdown-content">
                        <ul>
                            {list}
                        </ul>
                        <Link to="/manage-profiles" >Manage Profiles</Link>
                        <p>account</p>
                        <p>help center</p>
                        <p><button onClick={this.props.logout}>Log Out</button></p>
                        </div>
                    </div>
                    </li >
                </ul>
            </nav>
        )
    }
}
  
  

export default Nav;
