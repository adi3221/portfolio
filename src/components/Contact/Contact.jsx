import React from 'react'
import './Contact.css'
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import instagram from './../../assets/in.png'
import github from './../../assets/gh.png'

const Contact=()=>{
    return(
        <div className='section-container'>   
            <Header heading="Get in Touch." details="Interested to collabarate feel free to drop me an Email"/>
            <FooterLink  phrase="Read More " toAddress="/about" link="about me."/>
            <div className="vector-frame">
                <img src = {contactVector} alt="vector" className="about-vector"/>
            </div>
        </div>
    )
}

export default Contact; 