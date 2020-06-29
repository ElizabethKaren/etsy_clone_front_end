import React, { Component } from 'react'
import '../Styles/UserStories.css'

export class Story extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='ui fluid card' id='story-card'>
               <h3>{this.props.story_title}</h3>
               <h4>by {this.props.user_first_name} {this.props.user_last_name}</h4>
               <p>{this.props.sentance_1}</p>
               <p>{this.props.sentance_2}</p>
               <p>{this.props.sentance_3}</p>
               <p>{this.props.sentance_4}</p>
            </div>
        )
    }
}

export default Story
