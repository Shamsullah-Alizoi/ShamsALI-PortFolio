import React from "react";
import { MdEmail, MdLocationOn, MdPhone, MdArrowForward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
// import "./contact.css";
// import "../styles/components/contact.css";

const Contact: React.FC = () => {
  const email = "alizoishams@gmail.com";

  const handleEmailClick = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-top text-center">GET IN TOUCH</p>

        <h2 className="section-title text-center">Contact Me</h2>

        <div className="contact-wrapper mt-5">
          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="contact-card">
              <MdEmail className="icon" />
              <div>
                <h4>Email</h4>
                <p>{email}</p>
                <button onClick={handleEmailClick}>
                  Send Email <MdArrowForward />
                </button>
              </div>
            </div>

            <div className="contact-card">
              <MdLocationOn className="icon" />
              <div>
                <h4>Location</h4>
                <p>Kabul, Afghanistan</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kabul+Afghanistan"
                  target="_blank"
                >
                  View Map <MdArrowForward />
                </a>
              </div>
            </div>

            <div className="contact-card">
              <MdPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+93 77715177</p>
                <a href="tel:+9377715177">
                  Call Now <MdArrowForward />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h3>
              <FaPaperPlane /> Send a Message
            </h3>

            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows={5}></textarea>

              <button type="button">
                Send Message <MdArrowForward />
              </button>
            </form>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="social">
          <a href="https://github.com/" target="_blank">
            <FaGithub /> GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
