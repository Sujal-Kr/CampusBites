import React, { Component } from 'react'
import './Testimonial.css'
import { AiFillStar } from "react-icons/ai";
export default class Testimonial extends Component {
  render() {
    return (
      <div className='testimonial-cont'>
        <div className="heading-cont"><h5>Testimonials</h5></div>
        <div className="subhead-cont"><h1>What About Client Says</h1></div>
        <div className="t-main-cont">
             
            <div className="item">
                <div className="t-icon-cont">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <div className="t-content">"I recently visited the college canteen and overall had a positive experience. The food was delicious and reasonably priced, and the staff were friendly and helpful.</div>
                <div className="t-profile-cont">
                    <div className="t-image-cont">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="t-name-cont">
                        <h3>Vijay Ji</h3>
                        <span>Staff</span>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="t-icon-cont">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <div className="t-content">I recently tried the new vegetarian burger at the college canteen and was blown away! It was flavorful and satisfying, with lots of interesting toppings to choose from</div>
                <div className="t-profile-cont">
                    <div className="t-image-cont">
                        <img src="https://images.pexels.com/photos/2026713/pexels-photo-2026713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="t-name-cont">
                        <h3>Smriti Mandana</h3>
                        <span>Bba Student</span>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="t-icon-cont">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <div className="t-content">I have mixed feelings about the college canteen. On one hand, the food is generally tasty and there are plenty of options to choose from.Thank You </div>
                <div className="t-profile-cont">
                    <div className="t-image-cont">
                        <img src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="t-name-cont">
                        <h3>Shane Warne</h3>
                        <span>Cook</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
