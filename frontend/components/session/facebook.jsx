import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = ({ login, signup }) => {

  const [loggedIn] = useState(false);

  const componentClicked = object => {
    login(object).then(null, () => signup(object));
  };

  const responseFacebook = (response) => {
    componentClicked({ email: response.email, password: response.userID });
  };

  const fbContent = loggedIn ? "" :
    <>
      <FacebookLogin
        appId="358268101562524"
        autoLoad={false}
        fields="email"
        callback={responseFacebook}
        cssClass="fb-logo"
      />
    </>
  ;

  return (
    <div>
      {fbContent}
    </div>
  )
}

export default Facebook;