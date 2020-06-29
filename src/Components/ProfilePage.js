import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import NewItemForm from './NewItemForm'
import MessageDiv from './MessageDiv'
import '../Styles/ProfilePage.css'

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
        const yourMessages = this.props.messages.filter(mes => mes.seller_id === this.props.loggedInUser.id)
        
        return (
            <div>
                <h1 className='ui centered card header'>{this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h1>
                {/* <h3>See your {yourMessages.length} New Messages</h3><button onClick={this.handleOnClick}>{this.state.seeMessages? 'Hide Messages' : 'See My Messages'}</button> */}
                <div className='message-wrap'>
                {this.state.seeMessages ? this.showMessages(yourMessages) : null }
                </div>
                <div className='your-sale-items'>
                <h3 className="right floated">Your Items For Sale</h3>
                <button className="ui button" tabindex="0" onClick={this.click}>Add New Item</button>
                {this.state.formVisable ? <NewItemForm materials={this.props.materials} newItemSubmit={this.props.newItemSubmit} user_id={this.props.loggedInUser.id} categories={this.props.categories} /> : null }
                {yourItems.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item} /> )}
                </div>
                {/* <h3>Your purchases</h3>
                {yourPurchItems.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item}/>)} */}
                 {/* <div className='ui comments'> */}
              {/* {howManyQ ? <h4 className='ui dividing header'>Questions</h4> : null }  */}
              {yourMessages.map(mes => <MessageDiv users={this.props.users} replies={this.props.replies} key={mes.id} {...mes} /> )}
              {/* </div> */}
              <div className='row'>
              <button className="ui button" tabindex="0" onClick={this.props.handleSignOut}>Sign Out</button>
              </div>
            </div>
        )
    }
}

export default ProfilePage
