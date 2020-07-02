import React, { Component } from 'react'

export class Reply extends Component {
    render() {
        const userReply = this.props.users.find(user => user.id === this.props.user_id)
    
        return (
            <div className='ui small message'>
            <div className='metadata'>
                <div className='author'>
                {userReply.first_name}:
                </div>
                 {this.props.content}
            </div>
            </div>
        )
    }
}

export default Reply
