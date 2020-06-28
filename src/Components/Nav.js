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
        if(obj === {} ){
            return <NavLink to='/login'>Log In</NavLink>
        } else {
            return `Welcome ${obj.first_name}`
        }
    }
    render() {

        return (
            <div className='ui item'>
                <div className='item'>
                <NavLink to='/'><img className='ui small circular image' src='https://seekvectorlogo.com/wp-content/uploads/2018/01/etsy-vector-logo-small.png' alt='etsy'/></NavLink>
                <h3 className='ui center aligned header'>
               <NavLink to='/profile'>{this.userLoggedIn(this.props.loggedInUser)}&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
               <NavLink to='/checkout'>{this.isCart(this.props.cart)}&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
               <NavLink to='/'>Browse Items&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
               <NavLink to='/profile'>{this.props.loggedInUser.first_name === 'User' ? <NavLink to='/login'>Log In</NavLink> : 'Sign Out' }</NavLink>
               </h3>
               </div>
            </div>
        )
    }
}

export default Nav
