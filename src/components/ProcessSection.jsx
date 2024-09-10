import React from 'react';

// Import images
import icon16 from '../assets/images/icons/icon-16.png';
import icon17 from '../assets/images/icons/icon-17.png';
import icon18 from '../assets/images/icons/icon-18.png';
import pattern8 from '../assets/images/shape/pattern-8.png';
import animIcon2 from '../assets/images/icons/anim-icon-2.png';

const ProcessSection = () => {
  return (
    <section className="process-section centered">
      <div className="auto-container">
        <div className="sec-title">
          <span className="top-title">Our Proven Approach</span>
          <h2>Streamlined Recruitment in Three Simple Steps</h2>
          <p>
            Discover how our methodical process ensures effective and efficient recruitment.
          </p>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div
              className="process-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="icon-box">
                  <img src={icon16} alt="Step 1 Icon" />
                  <span>01</span>
                  <div className="anim-icon">
                    <div
                      className="icon-1"
                      style={{ backgroundImage: `url(${pattern8})` }}
                    ></div>
                    <div
                      className="icon-2 rotate-me"
                      style={{ backgroundImage: `url(${animIcon2})` }}
                    ></div>
                    <div
                      className="icon-3 rotate-me"
                      style={{ backgroundImage: `url(${animIcon2})` }}
                    ></div>
                  </div>
                </figure>
                <div className="lower-content">
                  <h3>Initial Consultation</h3>
                  <p>We start by understanding your needs and setting clear objectives.</p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div
              className="process-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="icon-box">
                  <img src={icon17} alt="Step 2 Icon" />
                  <span>02</span>
                  <div className="anim-icon">
                    <div
                      className="icon-1"
                      style={{ backgroundImage: `url(${pattern8})` }}
                    ></div>
                    <div
                      className="icon-2 rotate-me"
                      style={{ backgroundImage: `url(${animIcon2})` }}
                    ></div>
                    <div
                      className="icon-3 rotate-me"
                      style={{ backgroundImage: `url(${animIcon2})` }}
                    ></div>
                  </div>
                </figure>
                <div className="lower-content">
                  <h3>Strategic Planning</h3>
                  <p>Our team crafts a tailored strategy to address your recruitment needs efficiently.</p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div
              className="process-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="icon-box">
                  <img src={icon18} alt="Step 3 Icon" />
                  <span>03</span>
                  <div className="anim-icon">
                    <div
                      className="icon-1"
                      style={{ backgroundImage: `url(${pattern8})` }}
                    ></div>
                    <div
                      className="icon-2 rotate-me"
                      style={{ backgroundImage: `url(${animIcon2})` }}
                    ></div>
                    <div
                      className="icon-3 rotate-me"
                      style={{ backgroundImage: `url(${animIcon2})` }}
                    ></div>
                  </div>
                </figure>
                <div className="lower-content">
                  <h3>Execution & Follow-up</h3>
                  <p>We implement the strategy and provide ongoing support to ensure success.</p>
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
