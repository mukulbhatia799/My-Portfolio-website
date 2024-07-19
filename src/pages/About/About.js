import './about.css'
function About() {
    return (
        <div className="about-outer-div my-5">
            <h1 className="text-success text-uppercase text-center">About Me</h1><hr />
            <div className="about-inner-div mt-5">
                <div className="about-me-content">
                    <div id="cup-container">
                        <div className="steam" id="steam1"> </div>
                        <div className="steam" id="steam2"> </div>
                        <div className="steam" id="steam3"> </div>
                        <div className="steam" id="steam4"> </div>

                        <div id="cup">
                            <div id="cup-body">
                                <div id="cup-shade"></div>
                            </div>
                            <div id="cup-handle"></div>
                        </div>

                        <div id="saucer"></div>

                        <div id="shadow"></div>
                    </div>
                    <div className="para-content">
                        <h4 className="first-line">Hi my name is Mukul Bhatia,</h4>
                        <p>I am from Delhi-NCR, Sonipat, Haryana. I completed my graduation in Bachelor of Computer Application (BCA) from SRM University. Currently I am pursuing my Master's in Computer Application (MCA) from Lovely Professional University.</p>

                        <p>I am a Frontend Developer with skills in HTML5, CSS3, and JavaScript ES6. I want to grow my career in the IT sector. I am interested in problem-solving and building new products. I enjoy writing code daily and improving my knowledge. I am passionate about Full Stack Development.</p>

                        <p>I am currently learning frameworks and becoming a MERN Stack Developer. I love to build products that can be used by millions of people.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About