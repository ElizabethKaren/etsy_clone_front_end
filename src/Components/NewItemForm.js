import React, { Component } from 'react'

export class NewItemForm extends Component {
    render() {
        return (
            <div>
                <p>Choose Category</p>
                <select>
                    {this.props.categories.map(cat => <option>{cat}</option>)}
                </select>
                <br></br>
                <input placeholder='item title'></input>
                <br></br>
                <input placeholder='item picture'></input>
                <br></br>
                <input placeholder='item price'></input>
                <br></br>
                <button>Submit</button>
            </div>
        )
    }
}

export default NewItemForm
