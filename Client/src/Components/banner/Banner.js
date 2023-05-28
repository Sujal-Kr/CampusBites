import React, { Component } from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

export default class Banner extends Component {
  constructor(){
    super()
    
    this.state = {
      counter:0
    }
  }
  componentDidMount(){
     setInterval(() => {
      let temp = this.state.counter
      temp++
      temp%=3
      this.setState({counter:temp})
      // console.log(this.state.counter)
    },5000)
  }
 
  render() {
    const images=['../Assets/wall2.jpg','../Assets/wall3.jpg','../Assets/wall4.jpg']
    return (
      <div className='banner-cont' style={{
        backgroundImage: `url${images[this.state.counter]}}`
      }}>
        <div className="content-cont">
            <h1>Order your favourite food easily</h1>
            <p>Discover a world of delicious food and drinks at college canteen! From quick snacks to full meals, our menu offers something for everyone at affordable prices.</p>
            <div className="action-btn">
                <button className='explore-btn'><Link to='/menu'>Explore</Link>  </button>
            </div>
        </div>
        {/* <div className="bottom-image-cont">
            <img src={bottomimage} alt="" />
        </div> */}
      </div>
    )
  }
}
