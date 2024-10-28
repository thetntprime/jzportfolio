import React from 'react'
import './navigation.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

const Navigation = () => {
  return (
    <nav className='navi'>
        <img src={logo} alt='Logo' className='logo'></img>
        <div className="menu">
            <Link></Link>
        </div>
        <button className='menuButton'>
            <img src="" alt="" className="menuImg" />
            Contact
        </button>
    </nav>
  )
}

export default Navigation