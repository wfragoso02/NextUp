import React from 'react';
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
  render(){
    return(

    <div className="landmark">
      <div id="main-img"></div>
      <div className="landmark-body">
        <img src={window.logo} className="logo"/>
       <Link to="/login" className="landmark-button">Sign In</Link>
       <div className="landmark-container">
        <div className="landmark-tex-main"><h1>See what's next.</h1></div>
        <div className="landmark-tex-sub"><h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2></div>
        <Link to="/" className="demo-button">TRY DEMO</Link>
        </div>
      </div>
    </div>
      )
  }
}

export default Splash;