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
                <h3>Trending Items...</h3>
                <div className='ui medium image'>
               <Link to={`/items/${this.displayItemId(item)}`}>{this.displayTrendingItem(item)}</Link>
                </div>
                <div className='ui medium image'>
                    <img onClick={this.props.hideMaterials} src='https://static01.nyt.com/images/2020/04/10/smarter-living/00well-mask-guide/00well-mask-guide-articleLarge-v2.jpg?quality=90&auto=webp' alt='mask'/> 
                </div>
                <div className='ui medium image'>
                    <img onClick={this.props.hideMaterials} src='https://i.etsystatic.com/6670665/d/il/c3ec28/2273635984/il_680x540.2273635984_60o8.jpg?version=0' alt='bday'/>
                </div>
                {/* <div className='ui small image'>
                    <img src='https://cdn.shopify.com/s/files/1/0111/7293/7792/products/herminas-mask-mugensoul-steetwear-techwear-urban-clothing-5653509210176_1080x.jpg?v=1566351396' alt='maskperson' />
                </div> */}
            </div>
        )
    }
}

export default TendingItem
