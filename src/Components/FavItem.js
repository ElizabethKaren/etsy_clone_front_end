import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FavItem.css'

export class FavItem extends Component {
    render() {
     
        return (
            <div className="card-holder" id='pink'>
            <div className='ui card'>
                <h4 className='header'>{this.props.item.title} </h4>
                <div>
                <Link to={`/items/${this.props.item.id}`}><img className='ui large image' src={this.props.item.picture} alt={this.props.item.title} /> </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default FavItem
