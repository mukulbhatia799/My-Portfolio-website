import React from "react";
import './menus.css'
// import './mediaQueries.css'
import {FcHome, FcAbout, FcContacts} from 'react-icons/fc'
import {GrTechnology} from 'react-icons/gr'
import myProfilePic from '../../images/mukulpic.png'
import {RiProjectorFill} from 'react-icons/ri'
import { IoSchoolSharp } from "react-icons/io5";

import '../../pages/Home/Home.js'
import '../../pages/About/About.js'
import '../../pages/Education/Education.js'
import '../../pages/Skills/Skills.js'
import '../../pages/Contact/Contact.js'
import '../../pages/projects/Project.js'

const Menus = ({toggle}) => {
    return <div>
        {!toggle ? (
            <div className="menu-div">
                <div>
                    <img src={myProfilePic} alt="Mypic" width="150px" height="150px" className="profile-image" />
                </div>
                <div className="nav-items">
                        <a href="#home-section" className="nav-link"><FcHome /> Home</a>
                        <a href="#about-section" className="nav-link"><FcAbout /> About Me</a>
                        <a href="#education-section" className="nav-link"><IoSchoolSharp /> Education</a>
                        <a href="#tech-section" className="nav-link"><GrTechnology /> Tech skills</a>
                        <a href="#projects-section" className="nav-link"><RiProjectorFill /> Projects</a>
                        <a href="#contact-section" className="nav-link"><FcContacts /> Contact Me</a>
                </div>
            </div>
        ) : (
            <div>
                <div className="nav-items">
                        <a href="#home-section" className="nav-link"><FcHome /></a>
                        <a href="#about-section" className="nav-link"><FcAbout /></a>
                        <a href="#education-section" className="nav-link"><IoSchoolSharp /></a>
                        <a href="#tech-section" className="nav-link"><GrTechnology /></a>
                        <a href="#projects-section" className="nav-link"><RiProjectorFill /></a>
                        <a href="#contact-section" className="nav-link"><FcContacts /></a>
                </div>
            </div>
        )}
    </div>
}

export default Menus;