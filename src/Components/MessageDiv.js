import React, { Component } from 'react'
import '../Styles/MessageDiv.css'
import Reply from './Reply'

export class MessageDiv extends Component {
    state = {
        answerBarShown: false, 
        answerInput: ''
    }

    // click = () => {
    //     if(this.state.answerInput != ''){
    //         const messageObj = {content: this.state.answerInput, buyer_id: this.props.loggedIn.id , seller_id: this.props.buyer_id, item_id: this.props.item_id}
    //         fetch('http://localhost:3000/messages', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 accept: 'application/json'
    //             },
    //             body: JSON.stringify(messageObj)
    //         }).then(res => res.json()).then(mes => console.log(mes))
    //     }
    //     this.setState({ answerBarShown: !this.state.answerBarShown })
    //  }

    bar = event => this.setState({ [event.target.name]: event.target.value })

    render() {
        const user = this.props.users.find(user => user.id === this.props.buyer_id)
        console.log(user)
        const theseReplies = this.props.replies.filter(reply => reply.message_id === this.props.id)

        return (
            <div className='comment'>
                <div className='author'>
                  {user.first_name}
                </div>
                {this.props.content}
                {this.state.answerBarShown ? <input onChange={this.bar} name='answerInput' value={this.state.answerInput} placeholder='reply...'></input> : null }
                {theseReplies.map(re => <Reply users={this.props.users} key={re.id} {...re} />)}
            </div>
        )
    }
}

export default MessageDiv
