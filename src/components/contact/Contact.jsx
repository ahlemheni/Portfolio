import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
export const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options '>  

        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ahlemheni67@gmail.com</h5>
          <a href='mailto:ahlemheni67@gmail.com' target='_blank'> Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Hallouma Heni</h5>
          <a href='https://m.me/halloma.ahlem.9'target='_blank'> Send a message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whattsap</h4>
          <h5>+21628296624</h5>
          <a href='https://api.whattsap.com/send?phone+21628296624'target='_blank'> Send a message</a>
          </article>

          
          </div>
          {/* end of contact option */}
          <form action=''>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"   rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary '>Send Message</button>
          
          </form>
      </div>
    </section>
  )
}
export default Contact