import React, { Component } from 'react'
import ItemEdit from './ItemEdit'
import '../Styles/EditYourProf.css'
import { Link } from 'react-router-dom'

export class EditYourProf extends Component {
    state = {
       updatedEmail: '',
       updatedBio: '',
       newBioInputVisable: false,
       newEmailInputVisable: false 
    }

    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    click = event => this.setState({ [event.target.name]: true })

    render() {
        if (!this.props.loggedInUser) return <div className='items-con'> <h2>Your Profile Has Been Deleted</h2></div>
        const yourItems = this.props.items.filter(item => item.user_id === this.props.loggedInUser.id)
        if (!yourItems) return <div> Loading ... </div>
        return (
            <div className='items-con'>
                <Link to='/profile/tellmystory'><button className="ui tiny button" tabindex="0">Tell My Story</button></Link>
                <Link to='/profile/edit'><button className="ui tiny button" tabindex="0">Edit Your Profile</button></Link>
                <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">My Sales Statistics</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                {/* <h2>{this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h2>
                <h4>Bio: {this.state.newBioInputVisable ? <input name='updatedBio' onChange={this.handleOnChange} placeholder={this.props.loggedInUser.bio}></input> : this.props.loggedInUser.bio}</h4>
                <button onClick={this.click} name='newBioInputVisable' className='ui tiny button'>Update Bio</button>
                <h4>Email: {this.state.newEmailInputVisable ? <input name='updatedEmail' onChange={this.handleOnChange} placeholder={this.props.loggedInUser.email}></input> : this.props.loggedInUser.email}</h4>
                <button onClick={this.click} name='newEmailInputVisable' className='ui tiny button'>Update Email Adress</button> */}
                {yourItems.map(item => <ItemEdit updatePrice={this.props.updatePrice} key={item.id} {...item} /> )}
                <button onClick={() => this.props.handleDeleteUser(this.props.loggedInUser.id)} className='ui button'>Delete Profile</button>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default EditYourProf
