import React from 'react'
import './NavBar.css'
import { slide as Menu } from 'react-burger-menu'
import {Link, withRouter} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        const{location} = this.props;
        const homeClass = location.pathname ==='/'?'active-item':'';
        const aboutClass = location.pathname ==='/about'?'active-item':'';
        const internshipsClass = location.pathname ==='/internships'?'active-item':'';
        const projectsClass = location.pathname ==='/projects'?'active-item':'';
        const skillsClass = location.pathname ==='/skills'?'active-item':'';
        const contactClass = location.pathname ==='/contact'?'active-item':'';
        return (
            <Menu>
                {/* a tag is not been used in react app */}
                <Link to="/" className={`menu-item ${homeClass}`}>Home</Link>
                <Link to="/about" className={`menu-item ${aboutClass}`}>About</Link>
                <Link to="/internships" className={`menu-item ${internshipsClass}`}>Internships</Link>
                <Link to="/projects" className={`menu-item ${projectsClass}`}>Projects</Link>
                <Link to="/skills" className={`menu-item ${skillsClass}`}>Skills</Link>
                <Link to="/contact" className={`menu-item ${contactClass}`}>Contact</Link>
            </Menu>
          );
    }
}
export default withRouter(NavBar);