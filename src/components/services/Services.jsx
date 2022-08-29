import React from 'react'
import './services.css'
// import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h3>What I offer</h3>
      <h2>Services</h2>

                    {/* web development */}
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>FullStack Web Development</h3>
          </div>
          <ul className='service__list'>
          
          <li>
            {/* <BiCheck className='service__list-icon'/> */}
            <p>Have hands on experience in the development cycle from beginning to the final product. Always up for making dynamic website.</p>
          </li>
          </ul>
        </article>

                  {/* web design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className='service__list'>
          <li>
            {/* <BiCheck className='service__list-icon'/> */}
            <p>Are you tired of boring website? I have something interesting : </p>
          </li>
          </ul>
        </article>


                  {/* Problem Solving */}
        <article className="service">
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>
          <ul className='service__list'>
          <li>
            {/* <BiCheck className='service__list-icon'/> */}
            <p>Interested in solving real life problem using data structure and algorithm. I'm a enthusiastic coder at GeeksForGeeks and CodingNinja. Though out the journey I believe I build up my thinking ability enough to solve
              the problems using analytical skills.</p>
          </li>
          </ul>
        </article>



      </div>
    </section>
  )
}

export default Services