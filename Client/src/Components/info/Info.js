import React, { Component } from 'react'
import './Info.css'
import { GiKnifeFork } from "react-icons/gi";
import { GiBowlOfRice } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
export default class Info extends Component {
  render() {
    return (
      <div className='info-cont'>
        <div className="info">
            <div className="info-icon-cont"><GiKnifeFork/></div>
            <div className="info-count">175 +</div>
            <div className="info-name">Member</div>
        </div>
        <div className="info">
            <div className="info-icon-cont"><GiHotMeal/></div>
            <div className="info-count">158 +</div>
            <div className="info-name">Donation</div>
        </div>
        <div className="info">
            <div className="info-icon-cont"><CiBowlNoodles/></div>
            <div className="info-count">250 +</div>
            <div className="info-name">Specialist</div>
        </div>
        <div className="info">
            <div className="info-icon-cont"><GiBowlOfRice/></div>
            <div className="info-count">145 +</div>
            <div className="info-name">Dalicases</div>
        </div>
      </div>
    )
  }
}
