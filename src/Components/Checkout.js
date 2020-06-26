import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import { Link } from 'react-router-dom'

export class Checkout extends Component {
    state = {
        orderComplete: false 
    }

    completeOrder = () => this.setState({ orderComplete: true })

    render() {
        return (
            <div>
                <h2>Your Cart</h2>
                 {this.props.cart ? <button onClick={this.completeOrder}>Order Now</button> : <Link to='/'><button>Find Items</button></Link> }
                 <h2>{this.state.orderComplete ? 'Thank you for your order!' : null }</h2>
                {this.props.cart ? this.props.cart.map(item => <ItemDiv key={item.id} {...item} reviews={this.props.reviews} />) : null }
            </div>
        )
    }
}

export default Checkout
