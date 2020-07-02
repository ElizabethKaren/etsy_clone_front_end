import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Nav.css'
import FlatsyLogo from '../Styles/images/flatsylogo.png'

export class Nav extends Component {
    isCart = (array) => {
      if (array === null){
          return 'Cart Empty'
      } else {
          return 'Checkout'
      }
    }

    userLoggedIn = (obj) => {
        if(obj === {} ){
            return <NavLink to='/login'>Log In</NavLink>
        } else {
            return `Welcome ${obj.first_name}`
        }
    }
    render() {

        return (
            <div>
                <div >
                <NavLink to='/'><img id='main-logo' src={FlatsyLogo} alt='flatsy'/></NavLink>
                </div>
                    <div>
                    <input className='searchBar' placeholder='   Search by Items or Category' value={this.props.searchBarInput} onChange={this.props.handleOnSearch}></input>  
                    </div>
                {/* <h3 className='ui center aligned header pad-top-80'>
                    <NavLink className='navSpacing' to='/favorites'>My Favorites</NavLink>
               <NavLink className='navSpacing' to='/profile'>{this.userLoggedIn(this.props.loggedInUser)}</NavLink>
               <NavLink className='navSpacing' to='/checkout'>{this.isCart(this.props.cart)}</NavLink>
               <NavLink className='navSpacing' to='/'>Browse Items</NavLink>
               <NavLink className='navSpacing' to='/profile'>{this.props.loggedInUser.first_name === 'User' ? <NavLink to='/login'>Log In</NavLink> : 'Sign Out' }</NavLink> */}
               {/* </h3> */}
            </div>
        )
    }
}

export default Nav
