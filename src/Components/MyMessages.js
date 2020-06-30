import React, { Component } from 'react'
import MessageAndResponse from './MessageAndResponse'
import '../Styles/Message.css'

export class MyMessages extends Component {
    render() {
        if (!this.props.messages) return <div>Loading</div>
        let messages = this.props.messages.filter(mes => mes.seller_id === this.props.loggedInUser.id)
        return (
            <div className='messages-container'>
                {messages.map(mes => <MessageAndResponse loggedInUser={this.props.loggedInUser} key={mes.id} {...mes} /> )}
            </div>
        )
    }
}

export default MyMessages
