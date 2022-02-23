import React from 'react'
import './App.css'
import { HashRouter,Route} from 'react-router-dom';
import Home from './../Home/Home'
import About from './../About/About'
import Internships from './../Internships/Internships'
import Projects from './../Projects/Projects'
import Skills from './../Skills/Skills'
import Contact from './../Contact/Contact'
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

const App=()=>{
    return(
        <div>
            <HashRouter>
                <NavBar/>
                <div>
                    <Route path='/' exact component = {Home}/>
                    <Route path='/about' exact component = {About}/>
                    <Route path='/internships' exact component = {Internships}/>
                    <Route path='/projects' exact component = {Projects}/>
                    <Route path='/skills' exact component = {Skills}/>
                    <Route path='/contact' exact component = {Contact}/>
                </div>
                <GoHome/>
            </HashRouter>
        </div>
    );
}
export default App;