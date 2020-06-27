import React, { Component } from 'react'

export class Reply extends Component {
    render() {
        const userReply = this.props.users.find(user => user.id === this.props.user_id)
        console.log(userReply)
        return (
            <div>
               {userReply.first_name}: {this.props.content}
            </div>
        )
    }
}

export default Reply
