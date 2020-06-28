import React, { Component } from 'react'

export class TendingItem extends Component {
     
    displayTrendingItem=(obj)=>{
        if(obj != null){
            return <img src={obj.picture} /> 
        } 
    }

    render() {
        const items = this.props.items 
        const item = items[this.props.index]
        console.log(item)
        return (
            <div>
                <h3>Trending Item...</h3>
                <div className='ui medium circular image'>
                {this.displayTrendingItem(item)}
                </div>
            </div>
        )
    }
}

export default TendingItem
