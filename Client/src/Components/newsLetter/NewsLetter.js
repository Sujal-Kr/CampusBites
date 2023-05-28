import React, { Component } from 'react'
import './NewsLetter.css'
import {RxEnvelopeClosed} from 'react-icons/rx'
export default class NewsLetter extends Component {
  render() {
    return (
      <div className='news-cont'>
        <div className="news-left">
            <h4>Subscribe Our NewsLetter</h4>
        </div>
        <div className="news-right">
            <input type="text" placeholder='Your Mail Address'/>
            <button>Subscribe</button>
        </div>
        
      </div>
    )
  }
}
