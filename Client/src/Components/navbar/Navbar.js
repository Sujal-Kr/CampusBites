import React from 'react'
import { useState , useEffect } from 'react';
// import { VscAccount } from "react-icons/vsc";
import { RiMenu3Fill } from "react-icons/ri";
import {CgChevronLeftR} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";
import Cookie from "js-cookie";
// import axios from "axios";
import './Navbar.css'

export default function Navbar() {
    const [mode ,setMode]=useState(false)
    const [user, setUser] = useState();
    const userFields = ["email", "given_name", "family_name", "picture", "name"];
    useEffect(() => {
          localStorage.setItem("isUser", JSON.stringify(user ? user : false));
          
        }, [user]);

    function solverUser(Response) {
        var finalUser = {};
        const userDetails = jwtdecode(Response);
    
        for (let item in userDetails) {
          if (userFields.includes(item)) {
            finalUser[item] = userDetails[item];
          }
        }
        setUser(finalUser);
        Cookie.set("user", finalUser.email);
      }
  return (
    <div className='navbar-cont'>
        <div className="nav-logo">
            <Link to='/'><span>Campus Bites</span></Link>
        </div>
        <div className={mode===false?'navlist':'navlist active'}>
            <div className="home" onClick={()=>setMode(false)}><Link to='/'>Home</Link></div>
            <div className="menu" onClick={()=>setMode(false)}><Link to='/menu'>Menu</Link></div>
            <div className='close-btn'onClick={()=>setMode(false)}>
                <CgChevronLeftR/>
            </div>
        </div>
        <div className="action-cont">
        <div className="profile-cont" style={{ backgroundColor: "black" }}>
          {/* <VscAccount /> */}
          {user ? (
            <img
              src={user.picture}
              style={{ width: "1.7rem", borderRadius: "50%" }}
              alt="user_image"
            />
          ) : (
            ""
          )}
          {user ? (
            user.name
          ) : (
            <GoogleLogin
              className="rounded-circle "
              icon={false}
              buttonText=""
              onSuccess={(Response) => {
                solverUser(Response.credential);
              }}
              onError={(error) => {
                console.log(error);
              }}
            />
          )}
        </div>

        <div className="menu-cont" onClick={() => setMode(true)}>
          <RiMenu3Fill />
        </div>
      </div>
    </div>
  )
}
