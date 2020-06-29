import React, { Component } from 'react'
import Story from './Story'
import '../Styles/UserStories.css'

export class UserStories extends Component {
    render() {
        console.log(this.props.stories)
        return (
            <div id='stoies-container'>
                <div className='spacer'></div>
              {this.props.stories.map(story => <Story key={story.id} {...story} />)}
            </div>
        )
    }
}

export default UserStories
