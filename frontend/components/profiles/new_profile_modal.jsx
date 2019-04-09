import React from "react";

class newProfileModal extends React.Component {
    constructor(props){
        super(props);
        const images = ['https://s3.amazonaws.com/nextup-seed/marcus.png', 'https://s3.amazonaws.com/nextup-seed/nicolas.png', "https://art-s.nflximg.net/a7774/574ffd46d2bcef69802752f39db6320328fa7774.png"];
        const image_url = images[Math.floor(images.length * Math.random())];
        this.state = {
            name: '',
            image_url: image_url
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.images = images;
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createProfile(this.state).then(this.props.handleClose);
        this.setState({
            name: '',
            image_url: this.images[Math.floor(this.images.length * Math.random())],
        })
    }
    handleInput(type){
        return(e)=>{
            this.setState({[type]: e.target.value});
        }
    }
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="new-profile-text">
                        <h1 className="add-profile">Add Profile</h1>
                        <h3 className="new-profile-small-text">Add a profile for another person watching Nextup</h3>
                    </div>
                    <form >
                    <div className="edit-form-mid">
                        <img className="profile-pic" src={this.state.image_url} alt=""/>
                        <input className="edit-form-mid-text" type="text" value={this.state.name} onChange={this.handleInput('name')} placeholder="Name" />
                    </div>
                    <div className="Edit-form-submit">
                        <input onClick={this.handleSubmit}className="edit-from-save-button" type="submit"  value="CONTINUE" />
                        <button className="edit-from-save-cancel" onClick={this.props.handleClose} >CANCEL</button>
                    </div>
                    </form>
                </section>
            </div>
        );
    }
    

} 
    


export default newProfileModal;