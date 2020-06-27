import React, { Component } from 'react'

export class MessageDiv extends Component {
    state = {
        answerBarShown: false, 
        answerInput: ''
    }

    click = () => {
        if(this.state.answerInput != ''){
            const messageObj = {content: this.state.answerInput, buyer_id: this.props.loggedIn.id , seller_id: this.props.buyer_id, item_id: this.props.item_id}
            fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
                body: JSON.stringify(messageObj)
            }).then(res => res.json()).then(mes => console.log(mes))
        }
        this.setState({ answerBarShown: !this.state.answerBarShown })
     }

    bar = event => this.setState({ [event.target.name]: event.target.value })

    render() {
        const item = this.props.items.find(item => item.id === this.props.item_id)
        console.log(this.state.answerInput)
        return (
            <div>
                <p>{item.title} : {this.props.content} </p>
                {this.state.answerBarShown ? <input onChange={this.bar} name='answerInput' value={this.state.answerInput} placeholder='reply...'></input> : null }
                <button onClick={this.click}>Answer</button>
            </div>
        )
    }
}

export default MessageDiv
