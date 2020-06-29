import React, { Component } from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Link to='/stories'><p>User Stories</p></Link>
            </div>
        )
    }
}

export default Footer
