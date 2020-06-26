import React, { Component } from 'react'
import ItemDiv from './ItemDiv'

export class ProfilePage extends Component {
    render() {
        const yourPurchases = this.props.purchases.filter(purch => purch.user_id === this.props.loggedInUser.id)
        const yourItems = this.props.items.filter(item => item.user_id === this.props.loggedInUser.id) 
        console.log(yourPurchases, yourItems)
        return (
            <div>
                <h1>{this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h1>
                <h3>Your Items For Sale</h3>
                {yourItems.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item} /> )}
                <br></br>
                <br></br>
                {/* <h3>Your purchases</h3>
                {yourPurchases.map(item => <ItemDiv reviews={this.props.reviews} item={item.id} {...item}/>)} */}
            </div>
        )
    }
}

export default ProfilePage
