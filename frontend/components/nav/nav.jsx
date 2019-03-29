import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles();
    }
    
    render(){
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
                        <p>profiles</p>
                        <p>manage profile</p>
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
