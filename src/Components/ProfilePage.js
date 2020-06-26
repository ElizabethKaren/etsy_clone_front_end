import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import NewItemForm from './NewItemForm'

export class ProfilePage extends Component {
    state = {
        formVisable: false 
    }

    click = () => this.setState({ formVisable: !this.state.formVisable })

    render() {
        const yourPurchases = this.props.purchases.filter(purch => purch.user_id === this.props.loggedInUser.id)
        const yourItems = this.props.items.filter(item => item.user_id === this.props.loggedInUser.id) 
        const yourPurchItems = yourPurchases.map(purch => purch.item)
        return (
            <div>
                <h1>{this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h1>
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
