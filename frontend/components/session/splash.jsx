import React from 'react';
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom';
import Footer from '../footer';

class Splash extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    this.props.demo({ email: 'faker@gmail.com', password: 'password' }).then(() => this.props.history.push('/home'));
  }
  
  render(){
    return(
      <div className="page">
        <div className="splash">
          <img src={window.logo} className="logo"/>
          <div className="yea">
          <Link to="/login" className="sign-in-button">Sign In</Link>       
          </div>
          <div className="landmark-body">
            <div className="landmark-container">
              <div className="landmark-tex-main"><h1>Unlimited movies, <br/>TV shows, and more.</h1></div>
              <div className="landmark-tex-sub"><h2>Watch anywhere. Cancel anytime.</h2></div>
              <button onClick={this.handleSubmit.bind(this)} className="demo-button">DEMO LOGIN </button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Splash;