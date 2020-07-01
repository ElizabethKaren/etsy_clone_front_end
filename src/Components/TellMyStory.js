import React, { Component } from 'react'
import '../Styles/TellMyStory.css'
import { Link } from 'react-router-dom'

export class TellMyStory extends Component {
    state = {
        storySubmited: false 
    }

    submitStory = () => this.setState({ storySubmited: true })

    render() {
        console.log(this.props)
        if (this.state.storySubmited) return <div className='your-story-submission'><h3>Thank you, your story will be reviewed shortly!</h3></div>
        return (
            <div className='your-story-submission'>
                  <Link to='/profile/tellmystory'><button className="ui tiny button" tabindex="0">Tell My Story</button></Link>
                <Link to='/profile/edit'><button className="ui tiny button" tabindex="0">Edit Your Profile</button></Link>
                <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">My Sales Statistics</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                <form className='ui big form'>
               <div className='two fieldss'>
                <div className='field'>
                <label><strong>Story Title</strong></label>          
                <input placeholder='Story Title...'></input>
                <br></br>
                </div>
                <div className='field'>
                <label><strong>Story</strong></label>
                <textarea placeholder='Tell your story ...'></textarea>
                <br></br>
                </div>
                <button onClick={this.submitStory} className='ui tiny button'>Submit Story</button>
                </div>
                </form>
            </div>
        )
    }
}

export default TellMyStory
