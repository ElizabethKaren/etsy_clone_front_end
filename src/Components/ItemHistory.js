import React, { Component } from 'react'
// import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Styles/ItemHistory.css'

export class ItemHistory extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='history-item'>
                <p className='item-history-title'>{this.props.title}</p>
                <Link to={`items/${this.props.id}`}><img className='history-img' src={this.props.picture} alt={this.props.title}/></Link>
            </div>
        )
    }
}

export default ItemHistory
