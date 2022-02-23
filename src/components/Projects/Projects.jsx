import React from 'react'
import './Projects.css'
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'

const Projects=()=>{
    return (
        <div className='section-container'>
            <Header heading="My Projects." details = "Here are few cool things I have worked on, do check them out!" />
        
        
        <FooterLink phrase="Check out " link="my skills!" toAddress="/skills"/>
        </div>
    )
}
export default Projects;