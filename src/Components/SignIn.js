import React, { Component } from 'react'
import CreateAccountForm from './CreateAccountForm'

export class SignIn extends Component {
    state = {
        signInFormVisable: false,
        createAccountFormVisable: false
    }

    handleOnChange = event => this.setState({ [event.target.name]: true })
    render() {
        return (
            <div>
                <button onClick={this.handleOnChange} className="ui button" tabindex="0" name='signInFormVisable'>Sign In</button>
                {this.state.createAccountFormVisable ? <CreateAccountForm createAccout={this.props.createAccout}/> : null }
                <button className="ui button" onClick={this.handleOnChange} name='createAccountFormVisable'>{this.state.createAccountFormVisable ? null : 'Create Account' }</button>
                {this.state.signInFormVisable ? <div><input onChange={this.props.handleSignIn} placeholder='email' value={this.props.logInFormEmail} name='logInFormEmail'></input> <input onChange={this.props.handleSignIn} name='logInFormPassWord' value={this.props.logInFormPassWord} placeholder='password'></input> <br></br> <button className="ui button" onClick={this.props.verifyUser}>Sign In</button></div> : null }
            </div>
        )
    }
}

export default SignIn
