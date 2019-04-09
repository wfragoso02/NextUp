import React from 'react';
import { Link } from 'react-router-dom';
import NewProfileModal from './new_profile_modal';
import EditProfileModal from './edit_profile_modal';

class ManageProfiles extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            showNew: false,
            0: false,
            1: false,
            2: false,
            3: false, 
            4: false  
        };
        this.showNewModal = this.showNewModal.bind(this);
        this.hideNewModal = this.hideNewModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchProfiles();
    }

    showNewModal() {
        this.setState({ showNew: true });
    };

    hideNewModal() {
        this.setState({ showNew: false });
    };
    showEditModal(idx) {
        return(e) => {
            this.setState({ [idx]: true });
        }
    };

    hideEditModal(idx) {
        return(e)=>{
            this.setState({ [idx]: false });
        }
    };

    render(){
        const profiles = this.props.profiles.map((profile, idx) => {
            debugger
            return (
                <li key={idx} className="profile-item">
                    <EditProfileModal deleteProfile={this.props.deleteProfile} updateProfile={this.props.updateProfile} profile={profile} show={this.state[idx]} handleClose={this.hideEditModal(idx)} />
                    <button className="manage-profile-link" onClick={this.showEditModal(idx)}><img className="profile-pic" src={profile.image_url}/><p className="profile-name">{profile.name}</p></button>
                </li>
            )
        });
        
        let link;
        if (this.props.profiles[0]){
            link = <Link to={`/${this.props.profiles[0].id}`} profile={this.props.profiles[0]}><img src={window.logo} className="logo2"/></Link>
        }else{
            link = " ";
        }
        let newProfile;
        if (profiles.length >= 5){
            newProfile = null
        }else{
            newProfile = (
                <li className="profile-item">
                    <button className="manage-profile-link" onClick={this.showNewModal}><i className="fas fa-plus-circle add-new-profile"></i><p className="profile-name">Add Profile</p></button>
                    <NewProfileModal createProfile={this.props.createProfile} show={this.state.showNew} handleClose={this.hideNewModal} />
                </li>
            )
        }
        
        return(
            <div>
                {link}
                <div className="profiles-page">
                    <h1 className="whos-watching">Manage Profiles:</h1>
                    <ul className="profiles">
                        <div className="profile-container">
                            {profiles}
                            {newProfile}
                        </div>
                    </ul>
                </div>
                <Link className="done" to="/" ><h2 >DONE</h2></Link>
            </div>
        )
    }
}

export default ManageProfiles;