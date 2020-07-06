import React, { Component } from 'react'
import ItemHistory from './ItemHistory'
import '../Styles/ItemHistory.css'


export class History extends Component {
    render() {
        if(!this.props.loggedInUser.id) return null 
        const userClickHistory = this.props.history.filter(click => click.user_id === this.props.loggedInUser.id)
        const itemsOnly = userClickHistory.map(click => click.item)
        const size = itemsOnly.length 
        const begin = size - 7 
        const itemsToShow = itemsOnly.slice(begin, size)
        return (
            <div className='history-container'>
                <h3 id='see-again'>See Again...</h3>
                {itemsToShow.map(item => <ItemHistory key={item.id} {...item}/> )}
            </div>
        )
    }
}

export default History
