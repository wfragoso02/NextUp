import { Link } from 'react-router-dom'
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
        <div className="header">
            <Link to="/"><img src="" alt="Logo"/></Link>
            <div className="session-form" css="text-align:center">
                <ul>
                    {sessionErrors}
                </ul>
                
                <h1>{this.props.formType.toUpperCase()}!</h1>
                <form action="">
                    <label >Email: </label>
                    <br/>
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    <br/>
                    <label >Password: </label>
                    <br/>
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    <br/>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
                <p>New to Next Up? <Link to="/signup">Sign up now.</Link></p>
            </div>
        </div>
        )
    }
}

export default SessionForm;