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
            checked: ''
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

    handleInput(type){
        return (e) => this.setState({[type]: e.target.value});
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
        // const 
        return(
            <div>
        <div className="sessions-form">
            <Link to="/"><img src={window.logo} className="logo1"/></Link>
            <div className="session-body" css="text-align:center">
                <ul>
                    {sessionErrors}
                </ul>
                <div className="display-form">

                
                    <h1>{this.props.formType}</h1>
                    <form >
                        <br/>
                        <input className="form-input" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
                        <br/><br/>
                        <input className="form-input" type="password" value={this.state.password} onChange={this.handleInput('password')}placeholder="Password"/>
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