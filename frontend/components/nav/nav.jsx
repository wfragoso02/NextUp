import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <h1>logo</h1>
                    </div>
                    <div>
                        <h1>home</h1>
                        <h1>tv shows</h1>
                        <h1>movies</h1>
                        <h1>recently added</h1>
                        <h1>my List</h1>
                    </div>
                </div>
                <div>
                    <h1>search bar</h1>
                    <h1>kids</h1>
                    <h1>dvd</h1>
                    <h1>alerts</h1>
                    <h1>profile modal</h1>

                </div>
                
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}

export default Nav;
