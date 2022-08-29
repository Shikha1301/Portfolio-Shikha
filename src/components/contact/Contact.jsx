import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {ImLinkedin} from 'react-icons/im'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5m4rf26', 'template_6ty38va', form.current, '2g1cxcmkKeYmV7N8o')
    // for reset form
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>b19057@students.iitmandi.ac.in</h5>
            <a href="mailto:b19057@students.iitmandi.ac.in" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <ImLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Shikha S</h5>
            <a href="https://www.linkedin.com/in/shikha1301" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-766-8853-539</h5>
            <a href="https://api.whatsapp.com/send?phone=917668853539" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options*/}


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type = 'submit' className = 'btn btn-primary'> Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact