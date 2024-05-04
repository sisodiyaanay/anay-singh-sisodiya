import React, { useEffect } from "react";
// import React from "react";
import "./contact.css";
import anay from "../../assets/anay.jpg";

const Contact = () => {
  useEffect(() => {
    var datetime = new Date();
    var ISTOptions = { timeZone: "Asia/Kolkata", hour12: true };
    var ISTString = datetime.toLocaleString("en-US", ISTOptions);
    console.log(ISTString);
    document.getElementById("timeSpan").textContent = ISTString;
  }, []);

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
              <a className="contact-link" href="mailto:sisodiyaanay@iitgn.ac.in">sisodiyaanay@iitgn.ac.in</a>
            </div>
            <div id="phone" className="contact-phone-mail">
              <a href="tel:+916263818327">+91 6263 818 327</a>
            </div>
          </div>
        </div>
        <div id="bottom-footer" >
          <div id="bottom-left">
            <div className="version-time" id="version">
              <div className="up-text">VERSION</div>
              <div className="down-text">2024 © Edition </div>
            </div>
            <div className="version-time" id="time">
              <div className="up-text">TIME</div>
              <div className="down-text">
                <span id="timeSpan"></span> <span> IST</span>
              </div>
            </div>
          </div>
          <div id="bottom-right">
            <div className="up-text" id="social">
              SOCIALS
            </div>
            <ul>
              <li className="down-text"><a href="https://www.linkedin.com/in/anay-singh-sisodiya-147473247/">LinkedIn</a></li>
              <li className="down-text"><a href="https://github.com/sisodiyaanay">GitHub</a></li>
              <li className="down-text"><a href="https://www.instagram.com/anay.singh_/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
