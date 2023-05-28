import React, { Component } from 'react'
import './Special.css'
import pic from '../Assets/pablo.jpg'
import { Link } from 'react-router-dom'

export default class Special extends Component {
  render() {
    return (
      <div className='special-cont'>
        <div className="inner-special">
          <div className="special-left">
            <div className="heading"><h5>Special Selection</h5></div>
                <div className="subhead"><h1>From Our Menu</h1></div>
                <div className="sub-content">We have selected the best for you from our delicious and finger licking menu.</div>
            <div className="menu-cont">
                <div className="menu">
                  <div className="menu-item">
                    <img src="https://www.bhg.com/thmb/H6G2G-KzMaxmin4WJRYHZU4-oaQ=/1244x0/filters:no_upscale():strip_icc()/grilled-cheese-sandwiches-RU197054-0026ddec06634f3eb9b1a3649a114e3d.jpg" alt="" />
                    <div className="menu-name">
                      <h3>Grilled Sandwich</h3>
                      <h6>Full 4pcs.</h6>
                    </div>
                  </div>
                  <div className="menu-price">₹80</div>
                </div>  
                <div className="menu">
                  <div className="menu-item">
                    <img src="https://b.zmtcdn.com/data/dish_photos/a2f/905e776f527c1478dcaee90e6e7c6a2f.jpg" alt="" />
                    <div className="menu-name">
                      <h3>Veg Combo</h3>
                      <h6>Chowmin Manchurian</h6>
                    </div>
                  </div>
                  <div className="menu-price">₹110</div>
                </div>
                <div className="menu">
                  <div className="menu-item">
                    <img src="https://www.blessthismessplease.com/wp-content/uploads/2022/06/tropical-smoothie-recipe-5.jpg" alt="" />
                    <div className="menu-name">
                      <h3>Smothie</h3>
                      <h6>Strawberry Vanilla Choclate</h6>
                    </div>
                  </div>
                  <div className="menu-price">₹80</div>
                </div>
                <div className="menu">
                  <div className="menu-item">
                    <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg" alt="" />
                    <div className="menu-name">
                      <h3>Samosa</h3>
                      <h6>North Indian Food 2pcs.</h6>
                    </div>
                  </div>
                  <div className="menu-price">₹20</div>
                </div>
            </div>
            <div className="action-cont">
              <button className='menu-btn' ><Link to='/menu'>View More</Link></button>
            </div>
          </div>
          <div className="special-right">
            <img src={pic} alt="" />    
          </div>
        </div>
          
      </div>
    )
  }
}
