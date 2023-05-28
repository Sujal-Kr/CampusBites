import React, { Component } from 'react'
// import {MdHorizontalRule} from 'react-icons/md'

import './About.css'
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default class About extends Component {
  render() {
    return (
      <div className='about-cont'>
        
        <div className="about-image-cont">
            <img src="https://images.pexels.com/photos/374852/pexels-photo-374852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="about-content-cont">
            <div className="heading-cont"><h5>About Us</h5></div>
            <div className="sub-head-cont"><h1>Discovers Us from our flavours</h1></div>
            <div className="about-content">
            <p>
            Welcome to the College Canteen website, where we bring delicious and healthy meals to students and faculty alike. Our canteen has been serving the college community for over a decade, providing nutritious meals and snacks that cater to a wide range of dietary requirements.
            </p>
            <p>
            At College Canteen, we understand the importance of good food in enhancing academic performance and maintaining good health. That's why we have carefully curated our menu to include a variety of wholesome options that are both tasty and nutritious.
            </p>
            <div className="action-btn-cont">
                <button className='more'><Link to='/menu'>Explore<FiChevronRight/></Link> </button>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
