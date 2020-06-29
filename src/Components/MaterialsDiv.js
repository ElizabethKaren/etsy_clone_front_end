import React, { Component } from 'react'
import '../Styles/MaterialsDiv.css'

export class MaterialsDiv extends Component {
    render() {
        let mats = this.props.materials.filter((v, i, a) => a.indexOf(v) === i); 
        mats.sort((a,b)=> a > b ? 1 : - 1)
        return (
            <div > 
                <select onChange={this.props.filterMats}>
                    <option name='' value=''>All</option>
                 {mats.map((mat, index) => <option className='dropdown' value={mat} key={index}>{mat}</option>)}
                 </select>
            </div>
        )
    }
}

export default MaterialsDiv
