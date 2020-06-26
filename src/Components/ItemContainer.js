import React, { Component } from 'react'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'

export class ItemContainer extends Component {
    state = {
        reviewFormVisable: false, 
        reviewInput: '',
        reviewStarRating: 1 
    }
    starsString = (number) => {
        return '⭐'.repeat(number);
     }

     handleOnClick = () => this.setState({ reviewFormVisable: !this.state.reviewFormVisable })

     handleOnchange = event => this.setState({ [event.target.name]: event.target.value })

     submitReview = () => {
         console.log(this.state.reviewInput)
       this.props.handleNewReview(this.state.reviewInput, this.state.reviewStarRating, this.props.thisID)
       this.setState({ reviewFormVisable: false, reviewInput: ''})
     }

    render() {
        const id = this.props.thisID 
        const oneItem = this.props.items.find(item => item.id === id)
        const theseReviews = this.props.reviews.filter(review => review.item_id === oneItem.id)
        let totalReviewsAmount = theseReviews.length
        let justRating = theseReviews.map(review => review.rating)
        let total = justRating.reduce((a, b) => a + b, 0)
        let nowManyStars = total/totalReviewsAmount

        return (
            <div>
               <h1>{oneItem.title} : {oneItem.category} </h1>
               <img src={oneItem.picture} alt={oneItem.title} />
               <h4>${oneItem.price}</h4>
             <h4>{totalReviewsAmount === 0? 'Be the first to Review' : this.starsString(nowManyStars) }</h4>
             <button onClick={() => this.props.handleInCart(this.props.thisID)}>Add to Cart</button>
             <button onClick={this.handleOnClick}>Add Review</button>
             {this.state.reviewFormVisable ? <ReviewForm submitReview={this.submitReview} handleOnchange={this.handleOnchange} reviewInput={this.state.reviewInput} item={oneItem}/> : null }
             {theseReviews.map(review => <Reviews users={this.props.users} key={review.id} {...review} />)}

            </div>
        )
    }
}

export default ItemContainer
