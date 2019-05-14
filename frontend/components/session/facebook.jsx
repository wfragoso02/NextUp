import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            email: "",
            password: ""
        };
    }

    componentClicked(object) {
        this.props.login(object)
        .then(() => {
            this.props.history.push('/home'), this.props.signup(object)
        })
    }

    responseFacebook(response){
        this.componentClicked({ email: response.email, password: response.userID }).bind(this)
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
                    callback={this.responseFacebook.bind(this)} 
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