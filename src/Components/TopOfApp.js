import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import '../Styles/TopOfApp.css'
import TrendingItem from './TendingItem'

export class TopOfApp extends Component {

    render() {
        let categories = this.props.items.map(item => item.category)
        let itemsShown = this.props.items.filter(item => item.category.toLowerCase().includes(this.props.catagory.toLowerCase()))
        let cats = categories.filter((v, i, a) => a.indexOf(v) === i); 
        cats.sort((a,b)=> a > b ? 1 : - 1)
        console.log(itemsShown, this.props.catagory)
        return (
            <div className='top-of-app-wrap'>
                <TrendingItem items={this.props.items} index={this.props.index} /> 
                {/* <h1>Browse By Category</h1>
                <select className='dropdown-wrapper' onChange={this.props.handleOnchange}>
                    <option>All</option>
                    {cats.map(cat => <option key={cat.id}>{cat}</option>)}
                </select> */}
                <div className='buttons' onMouseOver={this.props.handleOnchange}>
                    <button className='ui button' name=''>All</button>
                    {cats.map(cat => <button className='ui button' name={cat} key={cat.id}>{cat}</button>)}
                </div>
                <div className="items">
               {itemsShown.map(item => <ItemDiv key={item.id} {...item} reviews={this.props.reviews} /> ) }
                </div>
            </div>
        )
    }
}

export default TopOfApp
