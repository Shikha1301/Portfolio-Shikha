// Call to Action buttons here
import React from 'react'
import CV from '../../assets/Shikha_B19057.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Hire Me</a>
    </div>
  )
}

export default CTA