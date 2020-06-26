import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Nav.css'

export class Nav extends Component {
    isCart = (array) => {
      if (array === null){
          return 'Cart Empty'
      } else {
          return 'Checkout'
      }
    }

    userLoggedIn = (obj) => {
        if(obj === null ){
            return 'Sign In'
        } else {
            return `Welcome ${obj.first_name}`
        }
    }
    render() {

        return (
            <div className='navbar'>
               <NavLink to='/profile'>{this.userLoggedIn(this.props.loggedInUser)}</NavLink>
               <br></br>
               <NavLink to='/checkout'>{this.isCart(this.props.cart)}</NavLink>
            </div>
        )
    }
}

export default Nav
