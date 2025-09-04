import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import Cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height={'80px'} />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>
        <li>Shop  <hr /> </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={Cart_icon} alt="" height={'45px'} />
      </div>

    </div>
  )
}

export default Navbar
