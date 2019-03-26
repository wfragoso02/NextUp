import React from 'react';
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom'

class Splash extends React.Component{
  render(){
    return(

    <div className="landmark">
      <div className="landmark-header">
        <Link to="/"><img src="" alt="logo" /></Link>
        <Link className="landmark-button"to="/login">Sing In</Link>
      </div>
      <div className="landmark-body">
        <p>body goes here
















        </p>
      </div>
    </div>
      )
  }
}

export default Splash;