import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/logo.png'
import navProfile from '../Assets/navProfile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo}  alt="" className="nav-logo" />
        <p className='navbar-p'>Admin Panel</p>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}
export default Navbar