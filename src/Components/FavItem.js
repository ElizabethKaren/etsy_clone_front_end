import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FavItem extends Component {
    render() {
     console.log(this.props.item)
        return (
            <div className="ui centered card row">
            <div className='card'>
                <h2 className='header'>{this.props.item.title} </h2>
                <Link to={`/items/${this.props.item.id}`}><img className='ui large image' src={this.props.item.picture} alt={this.props.item.title} /> </Link>
            </div>
            </div>
        )
    }
}

export default FavItem
