import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer';
import Facebook from './facebook_container';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            checked: '',
            errorsEmail: '',
            errorsPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    update(){
        return(e) => {
            if (this.state.checked === ''){
                this.setState({ checked: 'checked'});
            }else{
                this.setState({ checked: '' });
            }
        };
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleInput(type){
        return (e) =>{
            if (type === 'password' && (e.target.value.length < 4 || e.target.value.length  > 60) ){
                this.setState({errorsPassword: 'Your password must contain between 4 and 60 characters.'});
            }else if ((e.target.value.length > 4 && e.target.value.length  < 60)){
                this.setState({errorsPassword: ''});
            }

            const validEmails = ['@yahoo.com','@gmail.com', '@aol.com', '@hotmail.com' ];
            if (type === 'email'){
                let valid = false;
                validEmails.forEach(email => {
                    if (e.target.value.includes(email)){
                        this.setState({errorsEmail: ''});
                        valid = true;
                    }
                })
                if(valid === false) this.setState({errorsEmail: 'Please enter a valid email address'});
            }

            this.setState({[type]: e.target.value});
        };
            
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.processForm(this.state).then(() => this.props.history.push('/home'));
    }

    render(){
        const sessionErrors = this.props.errors.map((error,idx) => {
            return(
                <li key={idx} className="error">{error}</li>
            )
        })
        let a = "";
        let b = "";
        if (this.state.errorsEmail.length  > 0){
            a = "form-input-with-email-error"
        }else{
            a = 'form-input'
        }
        if (this.state.errorsPassword.length > 0){
            b = "form-input-with-password-error"
        }else{
            b = 'form-input'
        }

        return(
        <div className="sessions-form">
            <div className="temp">
                <Link to="/"><img src={window.logo} className="logo1"/></Link>
                <div className="session-body">
                    <div className="display-form">

        
                        <h1>{this.props.formType}</h1>
                        <form >
                            {sessionErrors}
                            <br/>
                            <input className={a} name={a} type="text" value={this.state.email} onChange={this.handleInput('email')} />
                            <label className="form-input-label" htmlFor={a}>Email</label>
                            <h3 className="session-errors">{this.state.errorsEmail}</h3>
                            <br/>
                            <input className={b} name={b} type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                            <label className="form-input-label" htmlFor={b}>Password</label>
                            <h3 className="session-errors">{this.state.errorsPassword}</h3>
                            <br/>
                            <button className="session-button" onClick={this.handleSubmit}>{this.props.formType}</button>

                        </form>
                        <div className="form-sub">
                            <label className='remember-me'>Remember me
                                <input type="checkbox" checked={this.state.checked} onChange={this.update()}/>
                                <span className="checkmark"></span>
                            </label>
                                <a className="sub-a" href="">Need help?</a>
                            </div>
                        </div>
                        <Facebook processForm={this.props.processForm}/>
                        <div className="session-bottom">
                        {this.props.formText()}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default withRouter(SessionForm);