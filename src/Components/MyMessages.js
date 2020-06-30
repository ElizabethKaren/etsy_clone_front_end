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
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">See My Stats</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                {messages.map(mes => <MessageAndResponse loggedInUser={this.props.loggedInUser} key={mes.id} {...mes} /> )}
            </div>
        )
    }
}

export default MyMessages
