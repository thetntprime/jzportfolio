import React from 'react'
import './navigation.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

const Navigation = () => {
  return (
    <nav className='navi'>
        <img src={logo} alt='Logo' className='logo'></img>
        <div className="menu">
            <Link className='listItem'>Home</Link>
            <Link className='listItem'>About</Link>
            <Link className='listItem'>Portfolio</Link>
        </div>
        <button className='contactButton'>
            Contact
        </button>
    </nav>
  )
}

export default Navigation