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
            return <NavLink to='/login'>Log In</NavLink>
        } else {
            return `Welcome ${obj.first_name}`
        }
    }
    render() {

        return (
            <div className='ui item'>
                <h3 className='ui center aligned header'>
               <NavLink to='/profile'>{this.userLoggedIn(this.props.loggedInUser)}</NavLink>
               <br></br>
               <NavLink to='/checkout'>{this.isCart(this.props.cart)}</NavLink>
               <br></br>
               <NavLink to='/'>Browse Items</NavLink>
               </h3>
            </div>
        )
    }
}

export default Nav
