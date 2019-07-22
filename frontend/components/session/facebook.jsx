import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = ({ login, signup }) => {

    const [loggedIn] = useState(false)

    const componentClicked = object => {
        login(object).then(null, () => signup(object));
    }

    const responseFacebook = (response) => {
        componentClicked({ email: response.email, password: response.userID })
    }

    let fbContent;
    if (loggedIn) {
        fbContent = "";
    } else {
        fbContent = (
            <>
                {/* <i className="fab fa-facebook-square"></i> */}
                <FacebookLogin
                    appId="358268101562524"
                    autoLoad={false}
                    fields="email"
                    callback={responseFacebook}
                    cssClass="fb-logo"
                />
            </>
        )
    }

    return (
        <div>
            {fbContent}
        </div>
    )
}

export default Facebook;