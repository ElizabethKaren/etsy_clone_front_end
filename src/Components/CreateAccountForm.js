import React, { Component } from 'react'

export class CreateAccountForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })


    handleOnClick = () => {
        if (this.state.password !== this.state.passwordConfirmation){
            alert('Password Does Not Match')
        } else {
            const obj = {first_name: this.state.firstName, last_name: this.state.lastName, bio: this.state.bio, email: this.state.email, password: this.state.password}
            this.props.createAccout(obj)
            this.setState({
                firstName: '',
                lastName: '',
                bio: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            })
        }
    }

    render() {
        return (
            <div className="ui form">
              <div className="fields">
               <div className="field">
                <label>First name</label>
                <input type="text" name="firstName" onChange={this.handleOnChange} placeholder='First Name' value={this.state.firstName}></input> 
                 </div>
                 <div className="field">
                   <label>Last name</label>
                   <input type="text" name="lastName" onChange={this.handleOnChange} placeholder='Last Name' value={this.state.lastName}></input> 
                  </div>
                  <div className="field">
                   <label>Bio</label>
                  <input type="text" name="bio" onChange={this.handleOnChange} placeholder='Bio' value={this.state.bio}></input> 
             </div>
             <div className="field">
                   <label>Email</label>
                  <input type="text" name="email" onChange={this.handleOnChange} placeholder='email' value={this.state.email}></input> 
               </div>
               <div className="field">
                   <label>Password</label>
                  <input type="password" name="password" onChange={this.handleOnChange} placeholder='Password' value={this.state.password}></input> 
                  </div>
                  <div className="field">
                   <label>Password Confirmation</label>
                  <input type="password" name="passwordConfirmation" onChange={this.handleOnChange} placeholder='Password Confirmation' value={this.state.passwordConfirmation}></input> 
                  </div>
               </div>
               <div className="ui button" id='buttons' tabindex="0" onClick={this.handleOnClick}>Create Account</div>
            </div>
        )
    }
}

export default CreateAccountForm
