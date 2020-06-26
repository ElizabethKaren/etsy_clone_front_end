import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import '../Styles/TopOfApp.css'

export class TopOfApp extends Component {

    render() {
        let categories = this.props.items.map(item => item.category)
        let itemsShown = this.props.items.filter(item => item.category.includes(this.props.catagory))
        let cats = categories.filter((v, i, a) => a.indexOf(v) === i); 
        cats.sort((a,b)=> a > b ? 1 : - 1)
 
        return (
            <div className='top-of-app-wrap'>
                <h1>Browse By Category</h1>
                <select className='dropdown-wrapper' onChange={this.props.handleOnchange}>
                    <option>All</option>
                    {cats.map(cat => <option key={cat.id}>{cat}</option>)}
                </select>
                <div className="items">
               {itemsShown.map(item => <ItemDiv key={item.id} {...item} reviews={this.props.reviews} /> ) }
                </div>
            </div>
        )
    }
}

export default TopOfApp
