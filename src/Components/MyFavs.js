import React, { Component } from 'react'
import FavItem from './FavItem'


export class MyFavs extends Component {
    render() {
        const myFavs = this.props.favorites.filter(favs => favs.user_id === this.props.loggedInUser.id)
        console.log(myFavs)
        return (
            <div className='ui three column grid"'>
                <div className='column'>
                {myFavs.map(fav => <FavItem key={fav.id} {...fav} />)}
                </div>
            </div>
        )
    }
}

export default MyFavs
