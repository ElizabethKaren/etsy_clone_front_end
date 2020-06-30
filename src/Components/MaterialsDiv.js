import React, { Component } from 'react'
import '../Styles/MaterialsDiv.css'

export class MaterialsDiv extends Component {

    
    render() {
        let mats = this.props.materials.filter((v, i, a) => a.indexOf(v) === i); 
        mats.sort((a,b)=> a > b ? 1 : - 1)


        return (
            <div  className='buttons'> 
                <div onClick={this.props.filterMats}>
                    <h5>Materials</h5>
                    <button className='small ui button' name='' value=''>All</button>
                 {mats.map((mat, index) => <button className='small ui button' value={mat} key={index}>{mat}</button>)}
                 </div>
            </div>
        )
    }
}

export default MaterialsDiv
