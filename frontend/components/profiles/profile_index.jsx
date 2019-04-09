import React from 'react';
import ProfileIndexItem from './profile_index_item';
import { Link } from 'react-router-dom';

class profileIndex extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles();
    }
    render(){
        const profiles = this.props.profiles.map((profile, idx) => {
            return <ProfileIndexItem key={idx} profile={profile} className="profile-item"/>
        });
        
        let link;
        if (this.props.profiles[0]){
            link = <Link to={`/${this.props.profiles[0].id}`} profile={this.props.profiles[0]}><img src={window.logo} className="logo2"/></Link>
        }else{
            link = " ";
        }
        return(
            <div>
                {link}
                <div className="profiles-page">
                    <h1 className="whos-watching">Who's watching?</h1>
                    <ul className="profiles">
                        <div className="profile-container">
                            {profiles}
                        </div>
                    </ul>
                </div>
                <Link className="manage-profiles" to="/manage-profiles" ><h2 >MANAGE PROFILES</h2></Link>
                {/* <h1 className="manage-profiles" to="/manage-profiles" ><h2 >MANAGE PROFILES</h2></h1> */}
            </div>
        )
    }
}

export default profileIndex;