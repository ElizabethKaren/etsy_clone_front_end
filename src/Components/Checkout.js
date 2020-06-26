import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import { Link } from 'react-router-dom'

export class Checkout extends Component {
    render() {
        return (
            <div>
                <h2>Your Cart</h2>
                 {this.props.cart ? <button>Order Now</button> : <Link to='/'><button>Find Items</button></Link> }
                {this.props.cart ? this.props.cart.map(item => <ItemDiv key={item.id} {...item} reviews={this.props.reviews} />) : null }
            </div>
        )
    }
}

export default Checkout
