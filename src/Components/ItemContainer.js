import React, { Component } from 'react'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import MessageDiv from './MessageDiv'
import '../Styles/ItemContainer.css'

export class ItemContainer extends Component {
    state = {
        reviewFormVisable: false, 
        reviewInput: '',
        reviewStarRating: 1,
        messageBarVisable: false,
        questionInput: '',
        seeMoreInfo: true 
    }
    starsString = (number) => {
        return '★'.repeat(number);
     }

     handleSeeMoreInfoClick = () => this.setState({ seeMoreInfo: !this.state.seeMoreInfo })

     handleOnClick = () => {
         if(!this.props.loggedInUser.id){
             alert('MUST BE LOGGED IN TO LEAVE A REVIEW')
         } else {
         this.setState({ reviewFormVisable: !this.state.reviewFormVisable })
         }
     }

     handleOnchange = event => this.setState({ [event.target.name]: event.target.value })

     submitReview = () => {
         console.log(this.state.reviewInput)
       this.props.handleNewReview(this.state.reviewInput, this.state.reviewStarRating, this.props.thisID)
       this.setState({ reviewFormVisable: false, reviewInput: ''})
     }

     whosTheSeller = () => (this.props.items.find(item => item.id === this.props.thisID)).id 
    
     handleMessage = () => {
         if (!this.props.loggedInUser.id){
            alert('MUST BE LOGGED IN TO ASK A QUESTION')
        } else if(this.state.questionInput != ''){
             const obj = {content: this.state.questionInput, item_id: this.props.thisID, seller_id: this.whosTheSeller() , buyer_id: this.props.loggedInUser.id}
             fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(mes => this.props.addNewMessage(mes))
            this.setState({ messageBarVisable: !this.state.messageBarVisable })
         } else {
         this.setState({ messageBarVisable: !this.state.messageBarVisable })
         }
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
        const sales = this.props.sales.filter(sale => sale.item_id === id)
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
        console.log(sales.length)
        return (
            <div className='div-wrap' id='centered'>
            <div className='ui celled grid' id='color'>
               <img className='item-con-pic' src={oneItem.picture} alt={oneItem.title} />
               <div className='item-info-div'>
               <h4>{oneItem.title} : {oneItem.category} </h4>
                {this.props.loggedInUser.first_name === 'User' ? null : <h4 onClick={() => this.props.favorite(this.props.thisID, this.isFavorite(thisItemsArray))}>{this.isFavorite(thisItemsArray) ? '🖤' : '♡' }</h4>}
               <h4>${oneItem.price}</h4>
               <h4>{sales.length} sales</h4><h4>{totalReviewsAmount === 0? 'Be the first to Review' : this.starsString(nowManyStars) }</h4>
             <button className='ui mini button cart-button' id='item-buttons' onClick={() => this.props.handleInCart(this.props.thisID)}>Add to Cart</button>
               <button className='ui mini button cart-button' id='item-buttons' onClick={this.handleSeeMoreInfoClick}>{this.state.seeMoreInfo ? 'See More' : 'See Less'}</button>
               </div>


             {this.state.seeMoreInfo ? null : <div className='lower-item-hold'><div className='ui comments row'><button onClick={this.handleOnClick} className='ui tiny button' id='item-buttons' >Add Review</button>
             {this.state.reviewFormVisable ? <ReviewForm loggedInUser={this.props.loggedInUser} submitReview={this.submitReview} handleOnchange={this.handleOnchange} reviewInput={this.state.reviewInput} item={oneItem}/> : null }
             {theseReviews.map(review => <Reviews users={this.props.users} key={review.id} {...review} />)}
             </div><div className='ui comments row'><div className='ui form'>{this.state.messageBarVisable ? <input onChange={this.handleOnchange} name='questionInput' value={this.state.questionInput} placeholder='ask a question'></input> : null }
             <button className='ui tiny button' id='item-buttons'  onClick={this.handleMessage}>{this.state.messageBarVisable ? 'Submit Message' : 'Contact Seller'}</button>
             </div>{questions.map(mes => <MessageDiv users={this.props.users} replies={this.props.replies} key={mes.id} {...mes} /> )}</div></div>}

            </div>
            </div>
        )
    }
}

export default ItemContainer
