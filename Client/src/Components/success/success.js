import React, { Component } from 'react'
import axios from 'axios'
import './success.css'



export default class success extends Component {
    constructor(){
        super()
        this.state = {
            token:''
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/Success")
        .then(res=>{
        // console.log(res);
        this.setState({token:res.data})
        })
        .catch(err=>{
        console.log(err.message);

        })
    }
    render() {
        
        return (
            <div className=' sc-cont'>
                <lord-icon
                    src="https://cdn.lordicon.com/tqywkdcz.json"
                    trigger="hover"
                    colors="primary:#4bb3fd,secondary:#f28ba8,tertiary:#ffc738,quaternary:#f24c00"
                    style={{
                        
                        width:"250px",
                        height:"250px",
                    
                    }}>
                </lord-icon>
                <h2>Order Successfull</h2>
                <h4 className='token-cont'>Your token id is <span>#{this.state.token}</span></h4>
                <p>The token id must be shown at the counter to get your order.</p>
            </div>
        )
    }
}
