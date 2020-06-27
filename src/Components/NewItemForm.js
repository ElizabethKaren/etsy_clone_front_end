import React, { Component } from 'react'

export class NewItemForm extends Component {
    render() {
        let cats = this.props.categories.filter((v, i, a) => a.indexOf(v) === i); 
        cats.sort((a,b)=> a > b ? 1 : - 1)
        return (
            <div>
                <p>Choose Category</p>
                <select>
                    {cats.map(cat => <option>{cat}</option>)}
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
