import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import '../Styles/TopOfApp.css'

export class TopOfApp extends Component {

    render() {
        let categories = this.props.items.map(item => item.category)
        let itemsShown = this.props.items.filter(item => item.category.includes(this.props.catagory))
        return (
            <div className='top-of-app-wrap'>
                <h1>Browse By Category</h1>
                <select className='dropdown-wrapper' onChange={this.props.handleOnchange}>
                    <option>All</option>
                    {categories.map(cat => <option key={cat.id}>{cat}</option>)}
                </select>
               {itemsShown.map(item => <ItemDiv key={item.id} {...item} reviews={this.props.reviews} /> ) }
               {/* {this.state.items.map(item => <ItemContainer key={item.id} {...item} /> )} */}
            </div>
        )
    }
}

export default TopOfApp
