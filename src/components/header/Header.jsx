import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Shikha_4.jpg'

import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    
    <header>
      {/* header__container:- This style of naming classes is called bim, another class that belongs to that particular header component/section*/}
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Shikha</h1>
        {/* <h5 className='text-light'>Full-stack web Developer</h5> */}
        <h3 className='text-light'>Web Developer | Programming Enthusiast</h3>
        {/* Get ready to turn your ideas into reality */}
        <CTA/>
        <HeaderSocial/>
        {/* <div className="header__me">
          <div className="header__me-image">
            <img src= {ME} alt="Header Image" />
          </div>
        </div> */}
        <div className= "me">
          <img src={ME} alt= "me"/>
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down </a>
      </div>
      </header>
    
  )
}

export default Header