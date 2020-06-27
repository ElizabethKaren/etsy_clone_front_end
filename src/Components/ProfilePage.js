import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import NewItemForm from './NewItemForm'
import MessageDiv from './MessageDiv'

export class ProfilePage extends Component {
    state = {
        formVisable: false,
        seeMessages: false 
    }

    click = () => this.setState({ formVisable: !this.state.formVisable })

    showMessages = (array) => array.map(mes => <MessageDiv key={mes.id} {...mes} items={this.props.items} loggedIn={this.props.loggedInUser} />)

    handleOnClick = () => this.setState({ seeMessages: !this.state.seeMessages })

    render() {
        const yourPurchases = this.props.purchases.filter(purch => purch.user_id === this.props.loggedInUser.id)
        const yourItems = this.props.items.filter(item => item.user_id === this.props.loggedInUser.id) 
        const yourPurchItems = yourPurchases.map(purch => purch.item)
        const yourMessages = this.props.messages.filter(mes => mes.seller_id === this.props.loggedInUser.id)
        console.log(this.state)
        return (
            <div>
                <h1>{this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h1>
                <h3>See your {yourMessages.length} New Messages</h3><button onClick={this.handleOnClick}>{this.state.seeMessages? 'Hide Messages' : 'See My Messages'}</button>
                {this.state.seeMessages ? this.showMessages(yourMessages) : null }
                <h3>Your Items For Sale</h3>
                <button onClick={this.click}>Add New Item</button>
                {this.state.formVisable ? <NewItemForm categories={this.props.categories} /> : null }
                {yourItems.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item} /> )}
                <br></br>
                <br></br>
                <h3>Your purchases</h3>
                {yourPurchItems.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item}/>)}
            </div>
        )
    }
}

export default ProfilePage
