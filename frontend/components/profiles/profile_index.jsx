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

        return(
            <div>
            <Link to="/Marcus"><img src={window.logo} className="logo2"/></Link>
            
            <div className="profiles-page">
                <ul className="profiles">
                    {profiles}
                </ul>

            </div>
            </div>
        )
    }
}

export default profileIndex;