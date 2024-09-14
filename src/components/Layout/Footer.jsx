import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer bg-color-1">
      <div className="pattern-layer no-anim" style={{ backgroundImage: 'url(assets/images/shape/pattern-39.png)' }}></div>
      <div className="auto-container">
        <div className="footer-top">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget about-widget">
                  <div className="widget-title">
                    <h3>Office</h3>
                  </div>
                  <div className="text">
                    {/* <p>
                      It is a long established fact that a reader will distracted by the readable ...{' '}
                      <i className="fas fa-arrow-up"></i>
                    </p> */}
                    <p>
                    Infront of, Flat No.-301 Third Floor, HIG-34 Sahara Homes Shivaji Nagar,Bhopal, Madhya Pradesh 462016
                    </p>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <h5>Connected:</h5>
                    </li>
                    <li>
        <a className="facebook" href="https://www.facebook.com/sahyogplacementgroup/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF /> 
        </a>
      </li>
      <li>
        <a className="twitter" href="https://twitter.com/sahyog5415" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> 
        </a>
      </li>
      <li>
        <a className="linkedin" href="https://www.linkedin.com/in/sahyog-placement-46135b172/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn /> 
        </a>
      </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="links-list clearfix">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="">Resources</a>
                    </li>
                    <li>
                      <a href="">Our Solutions</a>
                    </li>
                    <li>
                      <a href="">Testimonials</a>
                    </li>
                    <li>
                      <a href="/placejob">Employers</a>
                    </li>
                    <li>
                      <a href="">How It’s Work</a>
                    </li>
                    <li>
                      <a href="/job-openings">Job Openings</a>
                    </li>
                    <li>
                      <a href="">Industries</a>
                    </li>
                    <li>
                      <a href="">Leadership</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="single-info-box">
                    <div className="widget-title">
                      <h3>For Employers</h3>
                    </div>
                    <ul className="info-box clearfix">
                      <li>
                        <a href="tel:+919111505882">+91 9111505882</a> 
                        </li>
                        <li>
                        <a href="tel:+919111505881">+91 9111505881</a>
                        </li>
                        <li>
                        <a href="tel:0755-4922276">0755-4922276</a>
                      </li>
                      <li>
                        <a href="mailto:info@sahyogplacement.com">info@sahyogplacement.com</a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="single-info-box">
                    <div className="widget-title">
                      <h3>For Employees</h3>
                    </div>
                    <ul className="info-box clearfix">
                      <li>
                        <a href="tel:8004560123">(800) 789-0123</a>
                      </li>
                      <li>
                        <a href="mailto:careeroption@example.com">careeroption@example.com</a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-subscribe">
          <div className="text centred">
            <h3>Subscribe Us & Get Our Recruitment Updates in Your Inbox</h3>
          </div>
          <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/contact.html" method="post" className="subscribe-form">
            <div className="form-group">
              <input type="email" name="email" placeholder="Enter your email address here ..." required />
              <button type="submit">
                <i className="flaticon-right-arrow"></i>Subscribe US
              </button>
            </div>
          </form>
        </div> */}
        {/* <div className="footer-bottom clearfix">
          <div className="copyright pull-left">
            <p>
              &copy; 2020 <a href="">Eazy Recruitz</a>, All Rights Reserved.
            </p>
          </div>
          <ul className="footer-nav pull-right clearfix">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
          </ul>
        </div> */}
      </div>
      {/* Scroll to top */}
      {/* <button className="scroll-top scroll-to-target" data-target="html">
        <i className="flaticon-up-arrow-1">go top</i>Top
      </button> */}
    </footer>
  );
};

export default Footer;
