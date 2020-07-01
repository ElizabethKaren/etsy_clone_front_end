import React, { Component } from 'react'
import ItemDiv from './ItemDiv'
import '../Styles/TopOfApp.css'
import TrendingItem from './TendingItem'
import MaterialsDiv from './MaterialsDiv'

export class TopOfApp extends Component {

   state = {
       showDiv: false,
       material: ''
   }

    showDiv = (event) => {
        this.props.handleOnchange(event)
        this.revertOptions()
        this.setState({ showDiv: true, material: '' })
    }
    
    hideMaterials = () => this.setState({ showDiv: false })

    filterMats = event => this.setState({ material: event.target.value })

    revertOptions = () => 'All'

    render() {
        let categories = this.props.categories
        let itemsDisplay = this.props.items.filter(item => item.category.includes(this.props.catagory))
        let materials = itemsDisplay.map(item => item.material)
        let itemsShown = itemsDisplay.filter(item => item.material.includes(this.state.material))
        let cats = categories.filter((v, i, a) => a.indexOf(v) === i); 
        cats.sort((a,b)=> a > b ? 1 : - 1)
        return (
            <div className='top-of-app-wrap'>
                <TrendingItem items={this.props.items} index={this.props.index} hideMaterials={this.hideMaterials}/> 
                <div className='buttons' onClick={this.showDiv}>
                    <button className='small ui button' name='' onClick={this.hideMaterials}>All</button>
                    {cats.map(cat => <button className='small ui button' name={cat} key={cat.id}>{cat}</button>)}
                </div>
                <div>
                    {this.state.showDiv ? <MaterialsDiv materials={materials} revertOptions={this.revertOptions} filterMats={this.filterMats} /> : null }
                </div>
                <div className="ui three  items">
               {itemsShown.map(item => <ItemDiv key={item.id} {...item} reviews={this.props.reviews} /> ) }
                </div>
            </div>
        )
    }
}

export default TopOfApp
