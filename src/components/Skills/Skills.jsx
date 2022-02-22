import React from 'react'
import './Skills.css'
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import skillsVector from './../../assets/skills_vector.png'
import {skillList} from './../../assets/skillsData'
import SkillCard from './SkillCard'

const Skills=()=>{
    return(
        <div className='section-container'>
            <Header heading="My Skills" details="Passionate About New Technologies. I keep Exploring Stuff. Here is the Tech Stack I have worked with."/>
            <div className="skill-card-container">
                {
                    skillList.map(({skillName,skillUrl}) =>{
                        return <SkillCard skillName={skillName} skillUrl={skillUrl}/> 
                    })
                }
            </div>
            <FooterLink phrase="Get in " link="touch. " toAddress="/contact"/>
            <div className="skills-vector-frame">
                <img className='skills-vector' alt="skills" src={skillsVector}/>
            </div>
        </div>
    )
}
export default Skills;