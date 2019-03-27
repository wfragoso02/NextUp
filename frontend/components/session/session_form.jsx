import { Link } from 'react-router-dom';
import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return (e) => this.setState({[type]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then();
    }

    render(){
        // debugger
        const sessionErrors = this.props.errors.map((error,idx) => {
            return(
                <li key={idx}>{error}</li>
            )
        })
        // const 
        return(
        <div className="sessions-form">
            <Link to="/"><img src="" alt="Logo"/></Link>
            <div className="session-body" css="text-align:center">
                <ul>
                    {sessionErrors}
                </ul>
                <div className="display-form">

                
                    <h1>{this.props.formType}</h1>
                    <form action="">
                        <br/>
                        <input className="form-input" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
                        <br/><br/>
                        <input className="form-input" type="password" value={this.state.password} onChange={this.handleInput('password')}placeholder="Password"/>
                        <br/>
                        <button className="session-button" onClick={this.handleSubmit}>{this.props.formType}</button>
                    </form>
                </div>
                <div className="session-bottom">
                    {this.props.formText()}
                </div>
            </div>
        </div>
        )
    }
}

export default SessionForm;