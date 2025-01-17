import React from 'react'
import './Header.css'
import logo from '../../../src/assets/logo.png'
import Serach from '../../../src/assets/search.png'
import buttons from '../../../src/assets/Buttons.png'

function Header() {
  return (
   <header className='header'>
    {/* 1st part */}
    <div className='logo'>
        <img className='logoimg' src={logo} alt="" />
    </div>

    {/* 1st part */}
    <div className='search'>
        <img className='searchimg' src={Serach} alt="" />
    </div>


    {/* 1st part */}
    <div className='thirdColumn'>
        <img className='buttoncolumn' src={buttons} alt="" />
    </div>
   </header>
  )
}

export default Header