import React from 'react';
import ProfileIndexItem from './profile_index_item';

class profileIndex extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles();
    }
    render(){
        const profiles = this.props.profiles.map((profile, idx) => {
            return <ProfileIndexItem key={idx} profile={profile} />
        });

        return(
            <div>
                <h1>Hello to our new page</h1>
                <ul>
                    {profiles}
                </ul>

            </div>
        )
    }
}

export default profileIndex;