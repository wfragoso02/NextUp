import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
        };
        this.componentClicked = this.componentClicked.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    componentClicked(object) {
        this.props.login(object)
        .then( null, () => this.props.signup(object));
    }

    responseFacebook(response){
        this.componentClicked({ email: response.email, password: response.userID })
    }

    render(){
        let fbContent;
        if (this.state.isLoggedIn){
            fbContent = null;
        }else{
            fbContent = (
                <FacebookLogin
                    appId="358268101562524"
                    autoLoad={false}
                    fields="email"
                    callback={this.responseFacebook} 
                    className="fb-logo"/> 
            )
        }

        return(
            <div>
                {fbContent}
            </div>
        )
    }
}