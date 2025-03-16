import './about.css'

function About() {
    return (
        <div className="about-outer-div" id="about-section">
            <div className="about-content-wrapper">
                <h1 className="text-success text-uppercase text-center text-2xl sm:text-3xl lg:text-4xl font-bold">About Me</h1>
                <hr className="mx-auto w-40 sm:w-60 lg:w-96 border-t-2 border-green-600" />

                <div className="about-inner-div mt-5 flex flex-col lg:flex-row gap-10">
                    {/* Cup Animation */}
                    <div className="flex justify-center lg:justify-start">
                        <div id="cup-container">
                            <div className="steam" id="steam1"></div>
                            <div className="steam" id="steam2"></div>
                            <div className="steam" id="steam3"></div>
                            <div className="steam" id="steam4"></div>

                            <div id="cup">
                                <div id="cup-body">
                                    <div id="cup-shade"></div>
                                </div>
                                <div id="cup-handle"></div>
                            </div>

                            <div id="saucer"></div>
                            <div id="shadow"></div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="para-content text-center lg:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold first-line">Hi, my name is Mukul Bhatia,</h4>
                        <p className="text-gray-600 mt-2">I am from Delhi-NCR, Sonipat, Haryana. I completed my BCA from SRM University and am currently pursuing MCA at Lovely Professional University.</p>

                        <p className="text-gray-600 mt-2">I am a Frontend Developer skilled in HTML, CSS, and JavaScript ES6. I love problem-solving, coding daily, and building scalable products. I am passionate about Full Stack Development.</p>

                        <p className="text-gray-600 mt-2">Currently, I am learning MERN Stack to build products that impact millions of people.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;