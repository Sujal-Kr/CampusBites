import React, { Component } from 'react'
import './Menu.css'
import {menuList} from './GetMenuList'
import {MdRestaurantMenu} from 'react-icons/md'
import {BsCart4} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlinePlusSquare ,AiOutlineMinusSquare} from 'react-icons/ai'
import axios from "axios";

export default class Menu extends Component {
  constructor(){
    super()
      this.state = {
        currMenu:'',
        showList:false,
        menuItems:menuList,
        cartItem:[],
        cartBox:false,
        total:0
      }
  }

  handleMenu=(e)=>{
    let value=e.target.innerText
    this.setState({
      currMenu:value,
      showList:!this.state.showList
    })
  }
  handleCartItem = (item) => {
    let temp = this.state.cartItem
    let itemIndex = temp.findIndex((obj) => obj.name === item.name)
  
    if (itemIndex === -1) {
      temp.push({ ...item, quantity: 1 })
    }
    this.setState({ 
      cartItem: [...temp],
     });
     this.handleTotals()
    // localStorage.setItem('CartItem',JSON.stringify(temp))
  }
  handleIncItem=(item)=>{
    let temp=this.state.cartItem
    let itemIndex = temp.findIndex((obj) => obj.name === item.name)
    temp[itemIndex].quantity++
    let Tprice=this.state.total
    Tprice+=temp[itemIndex].quantity*temp[itemIndex].price
    this.setState({cartItem:[...temp],total:Tprice})
    this.handleTotals()
  }
  handleDescItem=(item)=>{
    let temp=this.state.cartItem
    temp.forEach((obj)=>{
      if(obj.name===item.name && obj.quantity!==1){
        obj.quantity--
      }
    })
    
    this.handleTotals()
    this.setState({cartItem:[...temp]})
  }
  handleRemoveItem=(item)=>{
    let temp=this.state.cartItem
    temp.forEach((obj)=>{
      if(obj.name===item.name){
        obj.quantity=0
      }
    })
    temp=temp.forEach((obj)=>{
      return obj.name!==item.name
    })
    this.setState({cartItem:[...temp]})
  }
  handleTotals=()=>{
    let temp=this.state.cartItem
    let Tprice=0
    temp.forEach((obj)=>{
      Tprice+=obj.quantity*obj.price
    })
    this.setState({total:Tprice})
  }
  

  handlePayment = async () => {
    console.log("Click Payment")
    const isPayable = JSON.parse(localStorage.getItem("isUser"));
    if (!isPayable) {
      window.location.href = "http://localhost:3000";
    } else {
      const cart = this.state.cartItem;
      const url = "http://localhost:5000";
      const response = await axios.post(url + "/menu/create-checkout-session", {
        Cart: cart,
        User: isPayable,
      });
      console.log("Response from Post", response);
      window.location.href = response.data.url;
      alert("Enjoy Your Meal");
    }

  };
  render() {
    let filteredMenu = []
    if(this.state.currMenu===''){
      filteredMenu=this.state.menuItems
    }
    else{
      filteredMenu=this.state.menuItems.filter((item)=>{
        return item.menuTag===this.state.currMenu
      })
    }
   
    return (
      <div className='main-menu-cont'>
        <div className="subbanner-cont">
            <h1>Welcome to Our Menu Section</h1>
            <h5>Home {">"} <span>Menu</span></h5>
        </div>
        <div className="heading-cont">
          <h1>What We Serve Here</h1>
          <h5>Choose anything from Desert,Beverages, North and South Indian items.</h5>
        </div>
        <div className="filter-cont">
          <button onClick={()=>this.setState({showList:!this.state.showList})}><MdRestaurantMenu className='mx-2'/>Menu</button>
          <div className={this.state.showList===true?'filter-list':'filte-list hide-list'}>
            <div onClick={(e)=>this.handleMenu(e)} className="list continental">Continental</div>
            <div onClick={(e)=>this.handleMenu(e)} className=" list desert">Desert</div>
            <div onClick={(e)=>this.handleMenu(e)} className="south-indian list">South Indian</div>
            <div onClick={(e)=>this.handleMenu(e)} className="list North-indian">North Indian</div>
          </div>
        </div>
        <div className="menu-grid-cont">
          <div className="head-cont"><h1>Everything is contained here</h1></div>
          <div className="menu-grid">
            {
              filteredMenu.map((item)=>{
                return (
                  <div className="menu-grid-item">
                    <img src={item.image|| ''} alt="" />
                    <div className="menu-item-name"><h3>{item.name}</h3></div>
                    <div className="menu-item-details"></div>
                    <div className="menu-item-price"><h6>Price:{item.price}</h6></div>
                    <div className="menu-item-btn">
                      <button onClick={()=>this.handleCartItem(item)}>Add Item</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={this.state.cartItem.length===0?"hide-list cart-icon-cont":"cart-icon-cont"} onClick={()=>this.setState({cartBox:true})}>
          <BsCart4/>
          <span>View Cart</span>
        </div>
        <div className={this.state.cartBox===false?'main-cart-cont hide-list':'main-cart-cont'}>
            <div className="cart-close" onClick={()=>this.setState({cartBox:false})}>
            <AiOutlineClose/>
            </div>
            <h1>Campus Bites</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quod deserunt cupiditate ratione maxime, eaque quam quasi sed cumque fugiat!</p>
            <div className="cart-item-list">
            {
              this.state.cartItem.map((item)=>{
                return(
                  <div className="cart-item my-3">
                    <div className="cart-item-left">
                      <div className="item-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="item-details">
                        <h6>{item.name}</h6>
                        <h6>{item.price}</h6>
                      </div>
                    </div>
                    <div className="item-quant">
                      <AiOutlinePlusSquare onClick={()=>this.handleIncItem(item)}/>
                      <span>{item.quantity}</span>
                      <AiOutlineMinusSquare onClick={()=>this.handleDescItem(item)}/>
                    </div>

                  </div>
                )
              })
            }
            </div>
            <div className="pay-cont">
              <h6>{'Total '+ this.state.total}</h6>
              <button onClick={()=>this.handlePayment()}>Pay Now</button>
            </div>
        </div>
      </div>
    )
  }
}
