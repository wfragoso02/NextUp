import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer';

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
            const valid = ['@yahoo.com','@gmail.com', '@aol.com', '@hotmail.com' ];
            if (type === 'password' && (this.state.password.length < 4 ||this.state.password.length  > 60) ){
                this.setState({errorsPassword: 'Your password must contain between 4 and 60 characters.'});
            }else if ((this.state.password.length > 4 && this.state.password.length  < 60)){
                this.setState({errorsPassword: ''});
            }

            if (type === 'email' && (!valid.includes(this.state.email))){
                this.setState({errorsEmail: 'Please enter a valid email address'});
            }else if(valid.includes(this.state.email)){
                this.setState({errorsEmail: ''});
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
                <li key={idx}>{error}</li>
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

        // const 
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
                            <input className={a} type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
                            <h3 className="session-errors">{this.state.errorsEmail}</h3>
                            <br/>
                            <input className={b}  type="password" value={this.state.password} onChange={this.handleInput('password')}placeholder="Password"/>
                            <h3 className="session-errors">{this.state.errorsPassword}</h3>
                            <br/>
                            <button className="session-button" onClick={this.handleSubmit}>{this.props.formType}</button>

                        </form>
                        <div className="form-sub">
                            <label className='remember-me'>
                                <input type="checkbox" checked={this.state.checked} onChange={this.update()}/>
                                <span className="checkmark">Remember me</span>
                                
                            </label>
                            <a className="sub-a"href="">Need help?</a>
                        </div>
                    </div>
                    <div className="fb-logo"> <img src={window.fb} alt=""/>    Login with Facebook</div>
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