import React, { Component } from 'react'

export class ReviewForm extends Component {
    starsString = (number) => {
        return '★'.repeat(number);
     }

    render() {
        return (
            <div className='ui form'>
                <select onChange={this.props.handleOnchange} name='reviewStarRating'>
                    <option className='field' value='1'>{this.starsString(1)}</option>
                    <option className='field' value='2'>{this.starsString(2)}</option>
                    <option className='field' value='3'>{this.starsString(3)}</option>
                    <option className='field' value='4'>{this.starsString(4)}</option>
                    <option className='field' value='5'>{this.starsString(5)}</option>
                </select>
                <br></br>
                <input className='field' onChange={this.props.handleOnchange} value={this.props.reviewInput} name='reviewInput' placeholder='write review'></input>
                <button onClick={this.props.submitReview}>Add My Review</button>
            </div>
        )
    }
}

export default ReviewForm
