import React from "react";

class editProfileModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.profile.name,
            image_url: this.props.profile.image_url,
            id: this.props.profile.id
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateProfile(this.state).then(this.props.handleClose);
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteProfile(this.props.profile.id).then(this.props.handleClose);
    }

    handleInput(type){
        return(e)=>{
            this.setState({[type]: e.target.value});
        }
    }

    render() {
        console.log(this.props.error)
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        const errorClass = this.props.error &&  this.state.name.length < 1 ? "error-edit-profile" : "";
        const error = this.props.error && this.state.name.length < 1 ? this.props.error : "";

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="edit-profile-text">
                        <h1>Edit Profile</h1>
                    </div>
                    <form>
                    <div className="edit-form-mid">
                        <img className="profile-pic"src={this.state.image_url} />
                        <div className="edit-this-text">
                        <input className={`edit-form-mid-text ${errorClass}`} type="text" value={this.state.name} onChange={this.handleInput('name')} />
                        </div>
                    </div>
                    <h6 className="error-message-profile">{error}</h6>
                    <div className="Edit-form-submit">
                        <input className="edit-from-save-button"type="submit" onClick={this.handleSubmit}value="SAVE" />
                        <button className="edit-from-save-cancel"onClick={this.props.handleClose} >CANCEL</button>
                        <button className="edit-from-save-cancel" onClick={this.handleDelete}>DELETE PROFILE</button>
                    </div>
                    </form>
                </section>
            </div>
        );
    }
}


export default editProfileModal;