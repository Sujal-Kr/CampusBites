import React, { Component } from 'react'
import  './Success.css'
import pic from '../Assets/suc.jpg'
export default class Success extends Component {
  render() {
    return (
      <div className='success-cont'>
        <img src={pic} alt="" />
        <h1>Your order is Confirmed</h1>
        <h5>Go to Canteen and Show Your Token ID</h5>
      </div>
    )
  }
}
