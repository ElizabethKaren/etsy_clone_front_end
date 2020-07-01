import React, { Component } from 'react'
import MessageAndResponse from './MessageAndResponse'
import '../Styles/Message.css'
import { Link } from 'react-router-dom'

export class MyMessages extends Component {
    render() {
        if (!this.props.messages) return <div>Loading</div>
        let messages = this.props.messages.filter(mes => mes.seller_id === this.props.loggedInUser.id)
        return (
            <div className='messages-container'>
                 <Link to='/profile/tellmystory'><button className="ui tiny button" tabindex="0">Tell My Story</button></Link>
                <Link to='/profile/edit'><button className="ui tiny button" tabindex="0">Edit Your Profile</button></Link>
                <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">My Sales Statistics</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                {messages.map(mes => <MessageAndResponse loggedInUser={this.props.loggedInUser} key={mes.id} {...mes} /> )}
            </div>
        )
    }
}

export default MyMessages
