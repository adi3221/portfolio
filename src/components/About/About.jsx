import React from 'react'
import './About.css'
import aboutVector from './../../assets/about_vector.png';
import Header from './../Header/Header'
import FooterLink from '../FooterLink/FooterLink';
import aboutAnime from './../../assets/about_anime.gif'

const About = () =>{
    return (
        <div className="section-container">
            <Header heading="About Me."  details ="Competitive Coder | Working Hands on ReactJS | Electrical and Electronics Engineer"/>
            <div className="about-main">
                <div className="about-main-left">
                    {/* sub sections */}
                    <h3 className='about-sub-head'>Competitive Coder</h3>
                    <p className="about-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, neque? Atque dolor laborum aperiam cum minus veritatis vero.{'   '}
                    <a href="#" className='about-link-element'>Code Chef</a>
                    </p>
                    {/* sub sections */}
                    <h3 className='about-sub-head'>Electrical and Electronics Engineer</h3>
                    <p className="about-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, neque? Atque dolor laborum aperiam cum minus veritatis vero.{'   '}
                    <a href="#" className='about-link-element'>Code Chef</a>
                    </p>
                    {/* sub sections */}
                    <h3 className='about-sub-head'>ReactJs Developer</h3>
                    <p className="about-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, neque? Atque dolor laborum aperiam cum minus veritatis vero.{'   '}
                    <a href="#" className='about-link-element'>Code Chef</a>
                    </p>
                </div>
                <div className="about-main-right">
                    <img src={aboutAnime} alt="animation" className="about-anime" />
                </div>

            </div>


            <FooterLink phrase="Check out my" link="projects!" toAddress="/projects" />
            {/* vector frome! */}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="About"/>
            </div>
        
        </div>
    )
}

export default About;