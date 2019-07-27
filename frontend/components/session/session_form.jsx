import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Footer from '../footer';
import Facebook from './facebook_container';

const SessionForm = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    checked: '',
    errorsEmail: '',
    errorsPassword: ''
  });

  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [confirmedPasswordErrors, setConfirmedPasswordError] = useState('');

  const update = () => {
    return () => {
      if (state.checked === '') {
        setState({ ...state, checked: 'checked' });
      } else {
        setState({ ...state, checked: '' });
      }
    };
  };

  useEffect(() => {
    props.clearErrors();
  }, []);

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInput = (type) => {
    return (e) => {
      if (type === 'password') {
        if(e.target.value !== state.password){
          setConfirmedPasswordError('Your passwords do not match');
        }
        if(e.target.value.length < 4 || e.target.value.length > 60){

          setState({ ...state, errorsPassword: 'Your password must contain between 4 and 60 characters.', [type]: e.target.value });
        }else{

          setState({ ...state, errorsPassword: '', [type]: e.target.value });
        }
      } 

      if (type === 'email') {
        if (validateEmail(e.target.value)) {
          setState({ ...state, errorsEmail: '', [type]: e.target.value });
        } else {
          setState({ ...state, errorsEmail: 'Please enter a valid email address', [type]: e.target.value });
        }
      }

      if(type === 'confirmedPassword'){
        if(e.target.value !== state.password){
          setConfirmedPasswordError('Your passwords do not match');
        }else{
          setConfirmedPasswordError('');
        }
        setConfirmedPassword(e.target.value);
      }
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(props.history.location.pathname === "/signup"){
      state.password === confirmedPassword ? props.processForm(state) : alert('Please verify your password');
    }else{
      props.processForm(state);
    }
  };

  const sessionErrors = props.errors.map((error, idx) => {
    return (
      <li key={idx} className="error">{error}</li>
    )
  })

  let a;
  let b;
  let c;

  if (state.errorsEmail.length > 0) {
    a = "form-input-with-email-error"
  } else {
    a = 'form-input'
  }
  if (state.errorsPassword.length > 0) {
    b = "form-input-with-password-error"
  } else {
    b = 'form-input'
  }
  if (confirmedPasswordErrors.length > 0) {
    c = "form-input-with-password-error"
  } else {
    c = 'form-input'
  }

  let confirmPassword;
  props.history.location.pathname === "/signup" ? 
  confirmPassword = 
    (
      <>
        <input className={c} name={c} type="password" value={confirmedPassword} onChange={handleInput('confirmedPassword')} required />
        <label className="form-input-label" htmlFor={c}>Confirm Password</label>
        <h3 className="session-errors">{confirmedPasswordErrors}</h3>
      </>
    )
  :
  confirmPassword = null;

  return (
    <div className="sessions-form">
      <div className="temp">
        <Link to="/"><img src={window.logo} className="logo1" /></Link>
        <div className="session-body">
          <div className="display-form">
            <h1>{props.formType}</h1>
            <form >
              {sessionErrors}
              <br />
              <input className={a} name={a} type="text" value={state.email} onChange={handleInput('email')} required />
              <label className="form-input-label" htmlFor={a}>Email</label>
              <h3 className="session-errors">{state.errorsEmail}</h3>
              <input className={b} name={b} type="password" value={state.password} onChange={handleInput('password')} required />
              <label className="form-input-label" htmlFor={b}>Password</label>
              <h3 className="session-errors">{state.errorsPassword}</h3>
              {confirmPassword}
              <br />
              <button className="session-button" onClick={handleSubmit}>{props.formType}</button>
            </form>
            <div className="form-sub">
              <label className='remember-me'>Remember me
                  <input type="checkbox" checked={state.checked} onChange={update()} />
                <span className="checkmark"></span>
              </label>
              <a className="sub-a" href="">Need help?</a>
            </div>
          </div>
          <Facebook processForm={props.processForm} />
          <div className="session-bottom">
            {props.formText()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(SessionForm);