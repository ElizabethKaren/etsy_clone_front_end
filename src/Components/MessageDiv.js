import React, { Component } from 'react'
import '../Styles/MessageDiv.css'
import Reply from './Reply'

export class MessageDiv extends Component {
    state = {
        answerBarShown: false, 
        answerInput: ''
    }
    
    bar = event => this.setState({ [event.target.name]: event.target.value })

    render() {
        const user = this.props.users.find(user => user.id === this.props.buyer_id)
  
        if (!user) return <div>Loading...</div>
        const theseReplies = this.props.replies.filter(reply => reply.message_id === this.props.id)

        return (
            <div className='ui large message comment'>
                <div className='author'>
                  {user.first_name}
                </div>
                {this.props.content}
                {theseReplies.map(re => <Reply users={this.props.users} key={re.id} {...re} />)}
            </div>
        )
    }
}

export default MessageDiv
