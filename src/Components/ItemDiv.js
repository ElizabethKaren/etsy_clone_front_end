import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ItemDiv.css'

export class ItemDiv extends Component {

    starsString = (number) => {
        return '★'.repeat(number);
     }

     handleOnClick = () => {
         if (this.props.loggedInUser.id){
         const obj = { item_id: this.props.id, user_id: this.props.loggedInUser.id }
         fetch('http://localhost:3000/histories', {
             method: 'POST',
             headers: {
                'content-type': 'application/json',
                accept: 'application/json'
             },
             body: JSON.stringify(obj)
         }).then(res => res.json()).then(res => this.props.addToStats(res, this.props))
         }
     }


    render() {
        let theseReviews = this.props.reviews.filter(review => review.item_id === this.props.id)
        let totalReviewsAmount = theseReviews.length
        let justRating = theseReviews.map(review => review.rating)
        let total = justRating.reduce((a, b) => a + b, 0)
        let nowManyStars = total/totalReviewsAmount
  
        return (
            <div >
                <div className='each-item-div'>
                <Link to={`/items/${this.props.id}`} onClick={this.handleOnClick}>
                <img className='item-image' src={this.props.picture} alt={this.props.title}/> 
                </Link>
                <p >{this.props.title}: {this.props.category} </p>
                <p>${this.props.price}</p>
                <p>{totalReviewsAmount === 0? 'Be the first to Review' : this.starsString(nowManyStars) }</p>
                </div>
            </div>
        )
    }
}

export default ItemDiv
