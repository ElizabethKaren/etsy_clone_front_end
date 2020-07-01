import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import NewItemForm from './NewItemForm'
import MessageDiv from './MessageDiv'
import '../Styles/ProfilePage.css'
import { Link } from 'react-router-dom'

export class ProfilePage extends Component {

    state = {
        formVisable: false 
    }

    click = () => this.setState({ formVisable: !this.state.formVisable })

    showMessages = (array) => array.map(mes => <MessageDiv key={mes.id} {...mes} items={this.props.items} loggedIn={this.props.loggedInUser} />)

    handleOnClick = () => this.setState({ seeMessages: !this.state.seeMessages })

    render() {
        const yourItems = this.props.items.filter(item => item.user_id === this.props.loggedInUser.id) 
        
        return (
            <div>
                <h1 className='ui centered card header'>{this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h1>
                <div className='message-wrap'>
                </div>
                <div className='your-sale-items'>
                <Link to='/profile/tellmystory'><button className="ui tiny button" tabindex="0">Tell My Story</button></Link>
                <Link to='/profile/edit'><button className="ui tiny button" tabindex="0">Edit Your Profile</button></Link>
                <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">My Sales Statistics</button></Link>
              <button className="ui tiny button" tabindex="0" onClick={this.props.handleSignOut}>Sign Out</button>
              <h3 className="right floated">Your Items For Sale</h3>
                <button className="ui button" tabindex="0" onClick={this.click}>Add New Item</button>
                {this.state.formVisable ? <NewItemForm materials={this.props.materials} newItemSubmit={this.props.newItemSubmit} user_id={this.props.loggedInUser.id} categories={this.props.categories} /> : null }
                {yourItems.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item} /> )}
                </div>
              <div>
              </div>
            </div>
        )
    }
}

export default ProfilePage
