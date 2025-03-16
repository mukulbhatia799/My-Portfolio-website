import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Check if sidebar is open by looking for a class on the body or checking a global state
  useEffect(() => {
    // Method 1: Check for a class on body element
    const checkSidebarStatus = () => {
      const sidebarOpen = document.body.classList.contains('sidebar-open');
      setIsSidebarOpen(sidebarOpen);
    };

    // Initial check
    checkSidebarStatus();

    // Set up a MutationObserver to watch for class changes on body
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          checkSidebarStatus();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className={`contact ${isSidebarOpen ? 'sidebar-adjusted' : ''}`} id="contact-section">
      <h1 className="text-center text-success">Contact ME</h1>
      <hr />
      <div className="card card0 border-0 my-5">
        <div className="row g-0"> {/* Added g-0 to remove gutters */}
          <div className="col-md-12 col-lg-6">
            <div className="card1">
              <div className="border-line">
                <LightSpeed>
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </LightSpeed>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <Rotate>
              <div className="card2 card border-0">
                <div className="w-100">
                  <div className="social-icons">
                    <h6>Contact With</h6>
                    <a href="#linkedin">
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href="#github">
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                    <a href="#facebook">
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </a>
                  </div>

                  <div className="mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      rows="4"
                    />
                  </div>
                  <div>
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;