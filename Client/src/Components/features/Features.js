import React, { Component } from 'react'
import './Features.css'
import { GiBowlOfRice } from "react-icons/gi"
import { GiFullPizza } from "react-icons/gi"
import { CiForkAndKnife } from 'react-icons/ci'
export default class Features extends Component {
  render() {
    return (
      <div className='feature-outer-cont'>
        <div className="heading-cont"><h5>Our Services</h5></div>
        <div className="sub-head"><h1>What we Offer You</h1></div>
        <div className="feature-inner-cont">
            <div className="feature">
                <div className="f-icon-cont">
                    <GiBowlOfRice/>
                </div>
                <div className="f-head"><h3>Online Ordering</h3></div>
                <div className="f-content">An online ordering system allows customers to browse the canteen menu, select the items they want, and place an order directly from the website. </div>
            </div>
            <div className="feature">
                <div className="f-icon-cont">
                    <CiForkAndKnife/>
                </div>
                <div className="f-head"><h3>Menu And Nutrition</h3></div>
                <div className="f-content">Customers may want to know the nutritional content of the food they are ordering. The website can include a menu section that provides detailed information.</div>
            </div>
            <div className="feature">
                <div className="f-icon-cont">
                    <GiFullPizza />
                </div>
                <div className="f-head"><h3>Reviews</h3></div>
                <div className="f-content">The website can include a section for customers to leave feedback about the canteen and its food. This can help the canteen improve its services and attract new customers.</div>
            </div>
        </div>
      </div>
    )
  }
}
