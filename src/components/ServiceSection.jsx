import React from 'react';

// Import images
import animIcon1 from '../assets/images/icons/anim-icon-1.png';
import service1 from '../assets/images/service/service-1.jpg';
import service2 from '../assets/images/service/service-2.jpg';
import service3 from '../assets/images/service/service-3.jpg';
import service4 from '../assets/images/service/service-4.jpg';
import service5 from '../assets/images/service/service-5.jpg';
import service6 from '../assets/images/service/service-6.jpg';
import icon4 from '../assets/images/icons/icon-4.png';
import icon5 from '../assets/images/icons/icon-5.png';
import icon6 from '../assets/images/icons/icon-6.png';
import icon61 from '../assets/images/icons/icon-61.png';
import icon62 from '../assets/images/icons/icon-62.png';
import icon63 from '../assets/images/icons/icon-63.png';

const ServiceSection = () => {
  return (
    <section className="service-section service-page">
      <div className="anim-icon">
        <div
          className="icon-1"
          style={{ backgroundImage: `url(${animIcon1})` }}
        ></div>
        <div className="icon-2"></div>
      </div>
      <div className="auto-container">
        <div className="sec-title centred">
          <span className="top-title">Our Staffing Solutions</span>
          <h2>Tailored Staffing Solutions for Your Needs</h2>
          <p>
            Discover how our customized staffing solutions can help you meet your business objectives and overcome challenges.
          </p>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={service1} alt="Temporary Staffing" />
                </figure>
                <div className="lower-content">
                  <div className="content-box">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={icon4} alt="Temporary Staffing Icon" />
                      </figure>
                      <h4>Temporary Staffing</h4>
                    </div>
                    <div className="link">
                      <a href="temporary-staffing.html">Learn More</a>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <p>
                      Efficient temporary staffing solutions to quickly fill short-term gaps and meet project demands.
                    </p>
                    <a href="temporary-staffing.html">
                      <i className="flaticon-right-arrow"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={service2} alt="Direct Hire" />
                </figure>
                <div className="lower-content">
                  <div className="content-box">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={icon5} alt="Direct Hire Icon" />
                      </figure>
                      <h4>Direct Hire</h4>
                    </div>
                    <div className="link">
                      <a href="direct-hire.html">Learn More</a>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <p>
                      Streamlined direct hire services to bring top talent into your organization with ease.
                    </p>
                    <a href="direct-hire.html">
                      <i className="flaticon-right-arrow"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={service3} alt="Contract Staffing" />
                </figure>
                <div className="lower-content">
                  <div className="content-box">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={icon6} alt="Contract Staffing Icon" />
                      </figure>
                      <h4>Contract Staffing</h4>
                    </div>
                    <div className="link">
                      <a href="contract-staffing.html">Learn More</a>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <p>
                      Flexible contract staffing options to meet project needs and seasonal demands.
                    </p>
                    <a href="contract-staffing.html">
                      <i className="flaticon-right-arrow"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={service4} alt="Payrolling" />
                </figure>
                <div className="lower-content">
                  <div className="content-box">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={icon61} alt="Payrolling Icon" />
                      </figure>
                      <h4>Payrolling</h4>
                    </div>
                    <div className="link">
                      <a href="payrolling.html">Learn More</a>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <p>
                      Comprehensive payrolling solutions to streamline payroll management and compliance.
                    </p>
                    <a href="payrolling.html">
                      <i className="flaticon-right-arrow"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={service5} alt="Training" />
                </figure>
                <div className="lower-content">
                  <div className="content-box">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={icon62} alt="Training Icon" />
                      </figure>
                      <h4>Training</h4>
                    </div>
                    <div className="link">
                      <a href="training.html">Learn More</a>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <p>
                      Tailored training programs to enhance skills and boost productivity.
                    </p>
                    <a href="training.html">
                      <i className="flaticon-right-arrow"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={service6} alt="Executive Search" />
                </figure>
                <div className="lower-content">
                  <div className="content-box">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={icon63} alt="Executive Search Icon" />
                      </figure>
                      <h4>Executive Search</h4>
                    </div>
                    <div className="link">
                      <a href="executive-search.html">Learn More</a>
                    </div>
                  </div>
                  <div className="overlay-content">
                    <p>
                      Specialized executive search services to find top leadership talent for your organization.
                    </p>
                    <a href="executive-search.html">
                      <i className="flaticon-right-arrow"></i> Learn More
                    </a>
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

export default ServiceSection;
