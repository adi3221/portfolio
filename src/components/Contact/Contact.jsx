import React from 'react'
import './Contact.css'
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import instagram from './../../assets/in.png'
import medium from './../../assets/me.png'
import web from './../../assets/web.png'

const Contact = () => {
    return (
        <div className='section-container'>
            <Header heading="Get in Touch." details="Interested to collabarate feel free to drop me an Email" />
            <div className="contact-form-container">
                <form action="https://formspree.io/f/moqrdbrr"
                    method="POST" className="contact-form">
                    {/* integrating contact form with email go to Formspree */}
                    {/* email id input */}
                    <input
                        type="email"
                        placeholder='Your Email ID'
                        name="email"
                        className='input-box email-input' />
                    {/*email body  */}
                    <textarea type="text" placeholder='Your Message' name="message" className='input-box body-input'
                    ></textarea>
                    {/* submit button */}
                    <buuton type="submit" className="contact-btn">
                        Send Email
                    </buuton>
                </form>
            </div>


            {/* social links */}
            <div className="social-icons-container">
                <a href="https://github.com/adi3221" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/adiofficials/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://www.instagram.com/adi.officials/" className="social-icon">
                    <img src={instagram} alt="social" />
                </a>
                {/* <a href="https://github.com/adi3221" className="social-icon">
                    <img src={medium} alt="social"/>
                </a> */}
                <a href="#" className="social-icon">
                    <img src={web} alt="social" />
                </a>
            </div>

            <FooterLink phrase="Read More " toAddress="/about" link="about me." />
            <div className="vector-frame">
                <img src={contactVector} alt="vector" className="about-vector" />
            </div>
        </div>
    )
}

export default Contact; 