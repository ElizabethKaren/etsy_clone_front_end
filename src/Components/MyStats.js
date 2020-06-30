import React, { Component } from 'react'
import '../Styles/Stats.css'
import { Link } from 'react-router-dom'

export class MyStats extends Component {
    render() {
        let sales = this.props.purchases.filter(perch => perch.user_id === this.props.loggedInUser.id)
        console.log(sales)
        return (
            <div>
                  <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                {sales.map(sale => <div className='sale'>{sale.item.title} sold for ${sale.item.price} <img className='ui small centered image' src={sale.item.picture} alt={sale.item.title} /></div>)}
            </div>
        )
    }
}

export default MyStats
