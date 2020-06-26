import React, { Component } from 'react'
import '../Styles/Reviews.css'

export class Reviews extends Component {
    starsString = (number) => {
        return '⭐'.repeat(number);
     }

    render() {
        const reviewer = this.props.users.find(user => user.id === this.props.user_id)
        return (
            <div className='review_wrapper'>
                <p>{reviewer.first_name} {reviewer.last_name} {this.starsString(this.props.rating) }</p>
                 <p>{this.props.content} </p>
            </div>
        )
    }
}

export default Reviews
