import React from 'react';
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
  render(){
    return(

    <div className="landmark">
      {/* <div className="landmark-header">
        <Link to="/"><img src="" alt="logo" /></Link>
        <Link className="landmark-button"to="/login">Sign In</Link>
      </div> */}
      <div className="landmark-body">
       <Link to="/login" className="landmark-button">Sign In</Link>
       <div className="landmark-container">
       <div className="landmark-tex">
        <p>See whats next.</p>
        <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
       </div>
       <Link to="/" className="demo-button">TRY DEMO</Link>
      </div>
      </div>
    </div>
      )
  }
}

export default Splash;