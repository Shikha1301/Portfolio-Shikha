//rafce enter krne se ye aaya
import React from 'react'
import './about.css'
import ME from '../../assets/Shikha_1.png'
import {MdTouchApp} from 'react-icons/md'
import {SiSpeedtest} from 'react-icons/si'
import {BsGlobe2} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h3>Get To Know</h3>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          {/* <div className="about__cards">

            <article className = 'about__card'>
              <MdTouchApp className='about__icon'/>
              <h4>Dynamic</h4>
              <small> Websites don't have to be static, I love making pages come to life. </small>
            </article>


            <article className = 'about__card'>
              <SiSpeedtest className='about__icon'/>
              <h4>Fast</h4>
              <small> Fast load times and lag free interaction, my highest priority.  </small>
            </article>

            
            <article className = 'about__card'>
              <BsGlobe2 className='about__icon'/>
              <h4>Responsive</h4>
              <small> My layouts will work on any device, big or small. </small>
            </article>
          </div> */}
          <p>
          I’m a final year student at IIT Mandi who has serious passion for creating dynamic website and solve problems in creative ways. 
          I have worked with MongoDB, ExpressJS, ReactJS and NodeJS <bold><em>(MERN) </em></bold>. I believe I would make an excellent addition to your team.<br/>
          <br/>
          {/* <h3>What would you do if you had an excellent developer at your fingertips?</h3> */}
          </p>
          
          <a href="#contact" className ='btn btn-primary'>Let's build something interesting</a>
        </div>
      </div>
    </section>
  )
}

export default About