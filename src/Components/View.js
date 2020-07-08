import React, { Component } from 'react'
import '../Styles/Sale.css'

export class View extends Component {
    render() {
        let month = this.props.months[Math.floor(Math.random() * this.props.months.length)] 
        let clicks = this.props.clicks.map(click => click.item_id)
        let filterClick = clicks.sort((a,b) => a = b ? 1 : -1 )
        let clicksAmout = filterClick.filter((v, i, a) => a.indexOf(v) === i)
        let highestClick = clicksAmout[0]
        let amount = this.props.clicks.filter(click => click.item_id === this.props.item.id )
        let color = amount.length === highestClick ? '#232345' : '#EF5809' 
  
        return (
            <div className='stats-container'>
                <div>{this.props.item.title} recieved {amount.length} clicks this {month}</div>
                {/* <div><strong>{amount.length === highestClick ? 'Your highest clicked item this month' : null }</strong></div> */}
                <div id="barContainer">
                    <div className="donationBar" style={{width: `${this.props.item.price}%`, backgroundColor: '#232345' }}></div>
                </div>
            </div>

        )
    }
}

export default View