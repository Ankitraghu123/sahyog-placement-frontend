import React from 'react';
// Importing images
import pageTitleImage from '../assets/images/background/page-title.jpg';
import pattern35 from '../assets/images/shape/pattern-35.png';
import pattern14 from '../assets/images/shape/pattern-14.png';
import videoBg from '../assets/images/resource/video-bg-1.jpg';
import aboutImage from '../assets/images/resource/about-2.jpg';
import briefcaseImage from '../assets/images/resource/briefcase-1.png';
import authorThumb from '../assets/images/resource/author-1.png';
import signatureImage from '../assets/images/icons/signature-1.png';

const About = () => {
    return (
        <div>
            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: `url(${pageTitleImage})` }}>
                <div className="pattern-layer" style={{ backgroundImage: `url(${pattern35})` }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1>About Sahyog Placement</h1>
                            <p>Your Trusted Partner for Recruitment Solutions in Mumbai</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="">Home</a></li>
                            <li>About</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-style-two about-page">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="image_block_1">
                                    <div className="image-box">
                                        <div className="pattern-layer" style={{ backgroundImage: `url(${pattern14})` }}></div>
                                        <div className="video-inner" style={{ backgroundImage: `url(${videoBg})` }}>
                                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption="">
                                                <i className="flaticon-play"></i>
                                            </a>
                                            <div className="border"></div>
                                        </div>
                                        <figure className="image-1"><img src={aboutImage} alt="Our Team" /></figure>
                                        <figure className="image-2 wow slideInLeft animated animated" data-wow-delay="00ms"><img src={briefcaseImage} alt="Success Stories" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_3">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <span className="top-title">About Sahyog Placement</span>
                                            <h2>Dedicated Recruitment Services Tailored for You</h2>
                                        </div>
                                        <div className="text">
                                            <p>At Sahyog Placement, we understand that each business has unique hiring needs. With our extensive experience in the recruitment industry, we provide customized solutions that align with your specific requirements. Our goal is to simplify the hiring process and connect you with the best talent available.</p>
                                        </div>
                                        <div className="author-box">
                                            <div className="author-text">
                                                <h3>Empowering Your Hiring Process</h3>
                                            </div>
                                            {/* <div className="author-info">
                                                <figure className="author-thumb"><img src={authorThumb} alt="Founder" /></figure>
                                                <h4>Amit Sharma</h4>
                                                <span className="designation">Founder & CEO</span>
                                                <figure className="signature"><img src={signatureImage} alt="Signature" /></figure>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
