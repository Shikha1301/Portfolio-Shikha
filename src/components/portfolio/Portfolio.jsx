import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio3.png'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio2.png'
const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h3>My Recent Work</h3>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className = 'portfolio__item'>
          <img src={IMG1}alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Notify</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Shikha1301/Notify" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className = 'portfolio__item'>
          <img src={IMG2}alt="" />
          <div className="portfolio__item-image"></div>
          <h3>QuickUse</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Shikha1301/QuickUse" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className = 'portfolio__item'>
          <img src={IMG3}alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Shikha1301/React_Weather_App" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        

      </div>
    </section>
  )
}

export default Portfolio