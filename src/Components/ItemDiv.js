import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ItemDiv.css'

export class ItemDiv extends Component {

    starsString = (number) => {
        return '⭐'.repeat(number);
     }


    render() {
        let theseReviews = this.props.reviews.filter(review => review.item_id === this.props.id)
        let totalReviewsAmount = theseReviews.length
        let justRating = theseReviews.map(review => review.rating)
        let total = justRating.reduce((a, b) => a + b, 0)
        let nowManyStars = total/totalReviewsAmount
  
        return (
            <div className='item-container'>
                <div className='item-wrapper'>
                <p className='item-title'>{this.props.title}: {this.props.category} </p>
                <Link to={`/items/${this.props.id}`} >
                <img className='item-image' src={this.props.picture} alt={this.props.title}/> 
                </Link>
                <p>${this.props.price}</p>
                <p>{totalReviewsAmount === 0? 'Be the first to Review' : this.starsString(nowManyStars) }</p>
                </div>
            </div>
        )
    }
}

export default ItemDiv
