import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineWork} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      {/* '' :- Noclass */}
      <a href="#" onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      {/* change the state value of about :- onClick={() => setActiveNav('#about')} =============>>>>>>>>>>> agar active hoga toh dark ho jayega nhi toh nhi (jo active hoga wo dark ho jayega) */}
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}><MdOutlineWork/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav