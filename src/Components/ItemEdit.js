import React, { Component } from 'react'
import '../Styles/ItemEdit.css'

export class ItemEdit extends Component {
    state = {
        newPrice: '',
        showInput: false 
    }

    handleOnChange = event => this.setState({ newPrice: event.target.value })

    seeInput = () => {
        this.setState({ showInput: !this.state.showInput })
        if(this.state.newPrice !== ''){
            this.props.updatePrice(this.state.newPrice, this.props.id)
        }
    }

    render() {
        return (
            <div>
            <div className='each-edit-item'>
                <h2>{this.props.title}: {this.props.category} : {this.props.material}</h2>
                <img src={this.props.picture} alt={this.props.titile} /> 
                {this.state.showInput ? <h3><input onChange={this.handleOnChange} value={this.state.newPrice} placeholder='new price...'></input></h3>:<h2>${this.props.price}</h2> } 
                <button className='ui tiny button' onClick={this.seeInput}>{this.state.showInput ? 'Update Price' :'Lower Price'} </button>
            </div>
            </div>
        )
    }
}

export default ItemEdit
