import React, { Component } from 'react'
import './Footer.css'
import {AiFillLinkedin ,AiOutlineInstagram ,AiFillFacebook,AiOutlinePhone} from 'react-icons/ai'
import {CiMail,CiLocationOn} from 'react-icons/ci'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-cont'>
        <div className="company-cont">
            <h3>Campus Bites</h3>
            <p>This canteen website has been developed by our team Gaurav,Sujal and Shivam</p>
            <div className="social-links-cont">
                <a href='https://www.facebook.com/profile.php?id=100008287490149'><AiFillFacebook/></a>
                <a href="https://www.instagram.com/_noya.san/"><AiOutlineInstagram/></a>
                <a href="https://www.linkedin.com/in/sujal-kumar-528984227/"><AiFillLinkedin/></a>
            </div>
        </div>
        <div className="links-cont">
            <h3>Useful Links</h3>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact Us</li>
        </div>
        <div className="ft-contact-cont">
            <h3>Contact Us</h3>
            <div className="ft-icon-cont">
                <div className="icon">
                <AiOutlinePhone/>
                </div>
                <div className="icon-detail">
                +01 349838493</div>
                </div>
            <div className="ft-icon-cont">
                <div className="icon">
                <CiMail/>
                </div>
                <div className="icon-detail">
                SamCurran@ipl.com
                </div>
                </div>
            <div className="ft-icon-cont">
                <div className="icon"><CiLocationOn/></div>
                <div className="icon-detail">
                St Xavier's College Purulia Road
                </div>
            </div>
        </div>
        <div className="opening-cont">
            <h3>Opening Hours</h3>
            <div className="duration">
                <div className="day">Mon-Sat</div>
                <div className=" time">10:00 a.m - 6p.m</div>
            </div>
            <div className="duration">
                <div className="day">Sun</div>
                <div className=" time">Closed</div>
            </div>

        </div>
      </div>
    )
  }
}
