import React from 'react'
import './about.css'
import ME from'../../assets/me-about.jpg' 
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>

          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> débutant</small>
            </article>
            
          

            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 2 Completed</small>
            </article>


          </div>

        </div>
      </div>


    </section>
  )
}
export default About