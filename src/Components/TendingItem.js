import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/TrendingItem.css'

export class TendingItem extends Component {
     
    displayTrendingItem=(obj)=>{
        if(obj != null){
            return <img src={obj.picture} /> 
        } 
    }

    displayItemId=(obj)=>{
        if(obj != null){
            return obj.id 
        }
    }

    render() {
        const items = this.props.items 
        const item = items[this.props.index]
      
        return (
            <div className='trendingBar'>
                <h3>Trending Item...</h3>
                <div className='ui medium circular image'>
               <Link to={`/items/${this.displayItemId(item)}`}>{this.displayTrendingItem(item)}</Link>
                </div>
            </div>
        )
    }
}

export default TendingItem
