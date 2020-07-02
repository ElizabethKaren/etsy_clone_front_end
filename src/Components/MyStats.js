import React, { Component } from 'react'
import '../Styles/Stats.css'
import { Link } from 'react-router-dom'
import '../Styles/TellMyStory.css'
import Sale from './Sale'

export class MyStats extends Component {
    render() {
        let sales = this.props.purchases.filter(perch => perch.user_id === this.props.loggedInUser.id)
        let prices = sales.map(sale => sale.item.price)

        return (
            <div className='your-story-submission'>
                <Link to='/profile/tellmystory'><button className="ui tiny button" tabindex="0">Tell My Story</button></Link>
                <Link to='/profile/edit'><button className="ui tiny button" tabindex="0">Edit Your Profile</button></Link>
                <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">My Sales Statistics</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                {sales.map(sale => <Sale prices={prices} {...sale} key={sale.id}/> )}
                {/* {sales.map(sale => <div className='sale'>{sale.item.title} sold for ${sale.item.price} <img className='ui small centered image' src={sale.item.picture} alt={sale.item.title} /></div>)} */}
            </div>
        )
    }
}

export default MyStats
