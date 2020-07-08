import React, { Component } from 'react'
import ItemHistory from './ItemHistory'
import '../Styles/ItemHistory.css'


export class History extends Component {


    render() {
        if(!this.props.loggedInUser.id) return null 
        const userClickHistory = this.props.history.filter(click => click.user_id === this.props.loggedInUser.id)
        const itemsOnly = userClickHistory.map(click => click.item)
        // itemsOnly.sort((a,b)=> b > a ? 1 : - 1)
        const size = itemsOnly.length 
        const begin = size - 10
        const itemsToShow = itemsOnly.slice(begin, size)
        itemsToShow.sort((a,b)=> b > a ? 1 : - 1)
        return (
            <div className='history-container'>
                <h3 id='see-again'>See Again...</h3>
                {itemsToShow.map((item, index) => <ItemHistory key={index} {...item}/> )}
            </div>
        )
    }
}

export default History
