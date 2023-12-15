import React from "react";
import "./contact.css";
import anay from "../../assets/anay.jpg";

const Contact = () => {
  return (
    <section id="contact">
      <div id="fake-footer"></div>
      <div id="footer-helper-container">
        <div id="contact-container">
          <div id="footer-line">
            <div id="footer-line1">
              <div id="my-img">
                <img src={anay} alt="anay" id="anay-image" />
              </div>
              <div id="line1" className="footer-main-text">
                Let's work
              </div>
            </div>
            <div id="footer-line2">
              <div id="line2" className="footer-main-text">
                together.
              </div>
            </div>
          </div>

          <div className="horizontal-line"></div>
          <div id="mail-phone">
            <div id="mail" className="contact-phone-mail">
              sisodiyaanay@iitgn.ac.in
            </div>
            <div id="phone" className="contact-phone-mail">
              +91 6263 818 327
            </div>
          </div>
        </div>
        <div id="bottom-footer" className="flex-row">
          <div id="bottom-left">
            <div className="version-time" id="version">
              <div className="up-text">VERSION</div>
              <div className="down-text">2023 © Edition </div>
            </div>
            <div className="version-time" id="time">
              <div className="up-text">TIME</div>
              <div className="down-text">11:57 AM GMT+5:30</div>
            </div>
          </div>
          <div id="bottom-right">
            <div className="up-text" id="social">
              SOCIALS
            </div>
            <ul>
              <li className="down-text">LinkedIn</li>
              <li className="down-text">GitHub</li>
              <li className="down-text">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
