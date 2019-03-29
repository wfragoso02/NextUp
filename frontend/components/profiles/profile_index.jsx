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
            link = <Link to={`/${this.props.profiles[0][name]}`}><img src={window.logo} className="logo2"/></Link>
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
                    <h2>Manage Profiles</h2>
            </div>
            </div>
        )
    }
}

export default profileIndex;