import React, { Component } from 'react'
import FavItem from './FavItem'
import '../Styles/FavItem.css'


export class MyFavs extends Component {
    render() {
        const myFavs = this.props.favorites.filter(favs => favs.user_id === this.props.loggedInUser.id)
        console.log(this.props)
        return (
            <div className='favs-div'>
                <h2>Your Favorites {this.props.loggedInUser.first_name} {this.props.loggedInUser.last_name}</h2>
                <div >
                {myFavs.map(fav => <FavItem key={fav.id} {...fav} />)}
                </div>
            </div>
        )
    }
}

export default MyFavs
