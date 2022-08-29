import React from 'react'
import './footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shikha</a>
      <ul className='permalinks'>
        <li><a href="#"><bold> Home </bold></a></li>
        <li><a href="#about"><bold>About</bold></a></li>
        <li><a href="#experience"><bold>Skills</bold></a></li>
        <li><a href="#portfolio"><bold>Projects</bold></a></li>
        <li><a href="#services"><bold>Services</bold></a></li>
        <li><a href="#contact"><bold>Contact</bold></a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/itzs_hikha/"><FaInstagramSquare/></a>
        <a href="https://www.facebook.com/profile.php?id=100041309973701"><FaFacebookSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>COPYRIGHT &copy; 2022 </small>
      </div>
    </footer>
  )
}

export default Footer