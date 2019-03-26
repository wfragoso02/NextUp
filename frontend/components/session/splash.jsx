import React from 'react';
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom'

class Splash extends React.Component{
  render(){
    return(

    <div className="landmark">
      <div className="landmark-header">
        <Link to="/"><img src="" alt="logo" /></Link>
        <Link to="/login">Sing In</Link>
      </div>
      <div className="landmark-body">
        body goes here
      </div>
      <div className='landmark-footer'>
        footer goes here
      </div>
    </div>
      )
  }
}

export default Splash;