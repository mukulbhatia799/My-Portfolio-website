import React from "react";
import "./home.css"
// import { useTheme } from "../../context/ThemeContext";
import Typewriter from 'typewriter-effect';
import mukulResume from '../../images/MukulBhatia-Resume-15thJuly.pdf';
import { FiDownload } from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";
// import { PiSunLight } from "react-icons/pi";
// import { BsMoonStarsFill } from "react-icons/bs";

import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    // const [theme, setTheme] = useTheme();
    // const themeChanger = () => {
    //     setTheme((prevTheme) => (prevTheme === 'light')?'dark':'light')
    // }
    return (
        <>
            <div className="home-outer-div" id="home-section">
                {/* <button className="theme-btn" onClick={themeChanger}>
                    {theme === 'light' ? (<PiSunLight size={30}/>):(<BsMoonStarsFill size={30}/>)}
                    
                </button> */}
                <div className="home-inner-div">
                    <h1>Hi I'm a </h1>
                    <h1 className="typewriter-div">
                        <Typewriter
                            options={{
                                strings: ['Software Developer', 'MERN Stack Developer', 'Competitive Programmer'],
                                autoStart: true,
                                loop: true,
                                delay: 30,
                            }}
                        />
                    </h1>
                    <h2 className="passion-heading">Passionate about Technology and Problem Solving | Life long learner</h2>
                    <div className="buttons-div">
                        <a className="btn btn-primary resume-btn" href={mukulResume} target="_blank">My Resume</a>
                        <a className="btn btn-light download-btn" href={mukulResume} download={"MukulResume"}>
                            <FiDownload size={25} />
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/mukul-bhatia-a67944209/" target="_blank">
                            <FaLinkedinIn className="icon linkedin-icon" />
                        </a>
                        <a href="https://github.com/mukulbhatia799" target="_blank">
                            <FaGithub className="icon github-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;