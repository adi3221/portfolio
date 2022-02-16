import React from 'react'
import './About.css'
import aboutVector from './../../assets/about_vector.png';
import Header from './../Header/Header'

const About = () =>{
    return (
        <div className="section-container">
            <Header heading="About Me."  details ="Competitive Coder | Working Hands on ReactJS | Electrical and Electronics Engineer"/>
            {/* vector frome! */}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" aly="About"/>
            </div>
        
        </div>
    )
}

export default About;