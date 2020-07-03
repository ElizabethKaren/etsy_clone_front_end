import React, { Component } from 'react'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import MessageDiv from './MessageDiv'
import '../Styles/ItemContainer.css'
import Footer from './Footer'

export class ItemContainer extends Component {
    state = {
        reviewFormVisable: false, 
        reviewInput: '',
        reviewStarRating: 1,
        messageBarVisable: false,
        questionInput: ''
    }
    starsString = (number) => {
        return '★'.repeat(number);
     }

     handleOnClick = () => this.setState({ reviewFormVisable: !this.state.reviewFormVisable })

     handleOnchange = event => this.setState({ [event.target.name]: event.target.value })

     submitReview = () => {
         console.log(this.state.reviewInput)
       this.props.handleNewReview(this.state.reviewInput, this.state.reviewStarRating, this.props.thisID)
       this.setState({ reviewFormVisable: false, reviewInput: ''})
     }

     whosTheSeller = () => (this.props.items.find(item => item.id === this.props.thisID)).id 
    
     handleMessage = () => {
         if(this.state.questionInput != ''){
             const obj = {content: this.state.questionInput, item_id: this.props.thisID, seller_id: this.whosTheSeller() , buyer_id: 1}
             fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(mes => this.props.addNewMessage(mes))
         }
         this.setState({ messageBarVisable: !this.state.messageBarVisable })
    }


    isFavorite = (array) => {
        let thisFav =  array.find(ar=> ar.user_id === this.props.loggedInUser.id)
        if(thisFav){
            return thisFav 
        } else {
            return false 
        }
    }
     

    render() {
        const id = this.props.thisID 
        const oneItem = this.props.items.find(item => item.id === id)
        if(!oneItem) return <div>Loading...</div>
        const theseReviews = this.props.reviews.filter(review => review.item_id === oneItem.id)
        let totalReviewsAmount = theseReviews.length
        let justRating = theseReviews.map(review => review.rating)
        let total = justRating.reduce((a, b) => a + b, 0)
        let nowManyStars = total/totalReviewsAmount
        let questions = this.props.messages.filter(mes => mes.item_id === id)
        let howManyQ = questions.length
        let thisItemsArray = this.props.favorites.filter(fav => fav.item_id === id)
        let thisUser = thisItemsArray.find(item => item.user_id === this.props.loggedInUser.id)
        return (
            <div className='div-wrap'>
            <div className='ui celled grid' id='color'>
               <h1>{oneItem.title} : {oneItem.category} </h1>
               <img className='ui image' src={oneItem.picture} alt={oneItem.title} />
               <h1 onClick={() => this.props.favorite(this.props.thisID, this.isFavorite(thisItemsArray))}>{this.isFavorite(thisItemsArray) ? '♥' : '♡' }</h1>
               <h4>${oneItem.price}</h4>
             <h4>{totalReviewsAmount === 0? 'Be the first to Review' : this.starsString(nowManyStars) }</h4>
             <div className='row'>
             <button className='ui dividing header' onClick={() => this.props.handleInCart(this.props.thisID)}>Add to Cart</button>
             </div>
              <div className=''>
             <div className='ui comments row'>
             <button onClick={this.handleOnClick} className='ui dividing header'>Add Review</button>
             {this.state.reviewFormVisable ? <ReviewForm submitReview={this.submitReview} handleOnchange={this.handleOnchange} reviewInput={this.state.reviewInput} item={oneItem}/> : null }
             {theseReviews.map(review => <Reviews users={this.props.users} key={review.id} {...review} />)}
             </div>
             <div className='ui comments row'>
              {/* {howManyQ ? <h4 className='ui dividing header'>Questions</h4> : null }  */}
              <div className='ui form'>
              {this.state.messageBarVisable ? <input onChange={this.handleOnchange} name='questionInput' value={this.state.questionInput} placeholder='ask a question'></input> : null }
             <button className='ui dividing header ui button' onClick={this.handleMessage}>{this.state.messageBarVisable ? 'Submit Message' : 'Contact Seller'}</button>
             </div>
              {questions.map(mes => <MessageDiv users={this.props.users} replies={this.props.replies} key={mes.id} {...mes} /> )}
              </div>
              </div>
            </div>
            </div>
        )
    }
}

export default ItemContainer
