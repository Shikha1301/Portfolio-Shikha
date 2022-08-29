import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/shikha1301" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Shikha1301" target="_blank"><FaGithub/></a>
        {/* for icons =====================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> http://react-icons.github.io/react-icons/ ===================>>>>>>>>>            npm install react-icons --save */}
    </div>
  )
}

export default HeaderSocials