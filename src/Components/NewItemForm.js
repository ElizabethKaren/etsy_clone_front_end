import React, { Component } from 'react'

export class NewItemForm extends Component {
    state = {
        category: '',
        title: '',
        picture: '',
        price: 0,
        materials: ''
    }


    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })


    addNewItem = () => {
        const obj = {material: this.state.materials, category: this.state.category, title: this.state.title, picture: this.state.picture, price: this.state.price, user_id: this.props.user_id}
        this.props.newItemSubmit(obj)
        this.setState({
            category: '',
            title: '',
            picture: '',
            price: 0
        })
    }

    render() {
        let cats = this.props.categories.filter((v, i, a) => a.indexOf(v) === i); 
        let mats = this.props.materials.filter((v, i, a) => a.indexOf(v) === i); 
        cats.sort((a,b)=> a > b ? 1 : - 1)
        mats.sort((a,b)=> a > b ? 1 : - 1)

        return (
            <div className='ui form'>
                <p>Choose Category</p>
                <select name='category' onChange={this.handleOnChange}>
                    {cats.map(cat => <option>{cat}</option>)}
                </select>
                <p>Choose Materials</p>
                <select name='materials' onChange={this.handleOnChange}>
                    {mats.map(mat => <option>{mat}</option>)}
                </select>
                <div className='fields'>
                <br></br>
                <input placeholder='item title' onChange={this.handleOnChange} name='title' value={this.state.title}></input>
                <br></br>
                <input placeholder='item picture' onChange={this.handleOnChange} name='picture' value={this.state.picture}></input>
                <br></br>
                <input placeholder='item price' onChange={this.handleOnChange} name='price' value={this.state.price}></input>
                <br></br>
                </div>
                <button className="ui button" tabindex="0" onClick={this.addNewItem}>Submit</button>
            </div>
        )
    }
}

export default NewItemForm
