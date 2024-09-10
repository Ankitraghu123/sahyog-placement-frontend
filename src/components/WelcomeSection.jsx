import React, { useState } from 'react';

// Importing images
import welcomeImage from '../assets/images/resource/welcome-1.png';
import icon1 from '../assets/images/icons/icon-1.png';
import icon2 from '../assets/images/icons/icon-2.png';
import icon71 from '../assets/images/icons/icon-71.png';
import icon72 from '../assets/images/icons/icon-72.png';

const WelcomeSection = () => {
    const [activeTab, setActiveTab] = useState('#tab-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="welcome-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="top-title">Welcome to Sahyog Placement</span>
                    <h2>Your Trusted Partner in Modern Staffing Solutions</h2>
                    <p>It's well known that the layout of a page can capture attention, drawing focus to what truly matters. <br />readable content of a page.</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box js-tilt">
                            <img src={welcomeImage} alt="Welcome" />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div id="content_block_1">
                            <div className="content-box">
                                <div className="tabs-box">
                                    <div className="tab-btn-box">
                                        <ul className="tab-btns tab-buttons clearfix">
                                            <li
                                                className={`tab-btn ${activeTab === '#tab-1' ? 'active-btn' : ''}`}
                                                data-tab="#tab-1"
                                                onClick={() => handleTabClick('#tab-1')}
                                            >
                                                <i className="employ-icon flaticon-businessman"></i>
                                                <h5>For Employers</h5>
                                                <i className="arrow-icon flaticon-up-arrow-2"></i>
                                            </li>
                                            <li
                                                className={`tab-btn ${activeTab === '#tab-2' ? 'active-btn' : ''}`}
                                                data-tab="#tab-2"
                                                onClick={() => handleTabClick('#tab-2')}
                                            >
                                                <i className="employ-icon flaticon-employer"></i>
                                                <h5>For Employees</h5>
                                                <i className="arrow-icon flaticon-up-arrow-2"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tabs-content">
                                        <div className={`tab ${activeTab === '#tab-1' ? 'active-tab' : ''}`} id="tab-1">
                                            <div className="inner-box">
                                                <h5>Discover Top Talent</h5>
                                                <h2>Easily Hire Your Next Candidate with Sahyog Placement</h2>
                                                <p>Consider this: who among us embarks on challenging tasks without expecting a reward? Likewise, no one should criticize those who make thoughtful choices.</p>
                                                <ul className="list clearfix">
                                                    <li>
                                                        <figure className="icon-box"><img src={icon1} alt="Understand Your Needs" /></figure>
                                                        <h4>Identify Your Needs</h4>
                                                    </li>
                                                    <li>
                                                        <figure className="icon-box"><img src={icon2} alt="Find the Perfect Candidate" /></figure>
                                                        <h4>Find the Talent You Need</h4>
                                                    </li>
                                                </ul>
                                                <div className="link">
                                                    <a href=""><i className="flaticon-right-arrow"></i>Your Required Talent</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab ${activeTab === '#tab-2' ? 'active-tab' : ''}`} id="tab-2">
                                            <div className="inner-box">
                                                <h5>Discover Your Ideal Role</h5>
                                                <h2>Navigate Your Career Journey with Sahyog Placement</h2>
                                                <p>We’ll clarify how the misconception of avoiding pleasure and embracing pain originated, and provide a thorough overview of the system, including a detailed explanation of its principles.</p>
                                                <ul className="list clearfix">
                                                    <li>
                                                        <figure className="icon-box"><img src={icon71} alt="Executive Opportunities" /></figure>
                                                        <h4>Executive Positions</h4>
                                                    </li>
                                                    <li>
                                                        <figure className="icon-box"><img src={icon72} alt="Non Executive Opportunities" /></figure>
                                                        <h4>Non-Executive Positions</h4>
                                                    </li>
                                                </ul>
                                                <div className="link">
                                                    <a href=""><i className="flaticon-right-arrow"></i>Find the Talent You Need</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;