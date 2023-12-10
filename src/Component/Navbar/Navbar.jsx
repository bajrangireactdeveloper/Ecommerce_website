import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icons from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const mystyleMenuLink = {
    textDecoration: 'none',
  }

    const [menu , setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="" srcset="" />
        <p>Shooping</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link to="/" style={mystyleMenuLink}> Shop</Link> {menu==="shop" ? <hr/>: <></>} </li>
            <li onClick={() => {setMenu("mens")}}><Link to="/mens" style={mystyleMenuLink}>Men</Link>  {menu==="mens" ? <hr/>: <></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link to="/womens" style={mystyleMenuLink}>Women</Link> {menu==="womens" ? <hr/>: <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to="/kids" style={mystyleMenuLink}>Kids</Link> {menu==="kids" ? <hr/>: <></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login" style={mystyleMenuLink}> <button>Login</button></Link>
           <Link to="/cart" style={mystyleMenuLink}><img src={cart_icons} alt="" srcset="" /></Link>
            <div className="nav-cart-count">0</div>

        </div>
    </div>
  )
}
