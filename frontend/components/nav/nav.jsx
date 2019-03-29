import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProfiles } from '../../actions/profile_actions';

class Nav extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles();
    }
    
    render(){
        debugger
        return(
            <nav className="nav-bar">
                <div className="left-nav">
                    <div className="nav-logo">
                        <Link to="/home"><img src={window.logo} className="logo-3"/></Link>
                    </div>
                    <div className="bar-1">
                        <h1>home</h1>
                        <h1>tv shows</h1>
                        <h1>movies</h1>
                        <h1>recently added</h1>
                        <h1>my List</h1>
                    </div>
                </div>
                <div className="bar-2">
                    <h1>search bar</h1>
                    <h1>kids</h1>
                    <h1>dvd</h1>
                    <h1>alerts</h1>
                    <h1>profile modal</h1>
                    <button onClick={this.props.logout}>Log Out</button>

                </div>
                
            </nav>
        )
    }
}

export default Nav;
