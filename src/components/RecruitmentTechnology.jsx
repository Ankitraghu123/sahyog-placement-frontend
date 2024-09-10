import React from 'react';
import recruitMentOne from '../assets/images/resource/recruitment-1.png'
import IconSeven from '../assets/images/icons/icon-7.png'
import IconEight from '../assets/images/icons/icon-8.png'
import IconNine from '../assets/images/icons/icon-9.png'

const RecruitmentTechnology = () => {
  return (
    <section className="recruitment-technology">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <figure className="image-box js-tilt clearfix">
              <img src={recruitMentOne} alt="Recruitment Technology" />
            </figure>
          </div>
          {/* Content Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div id="content_block_4">
              <div className="content-box">
                <div className="sec-title">
                  <span className="top-title">Recruitment Technologies</span>
                  <h2>Revolutionizing Recruitment Through Technology</h2>
                  <p>In today's fast-paced world, recruitment technology plays a pivotal role in connecting the right talent with the right opportunities. By leveraging advanced tools and platforms, we streamline the hiring process, making it more efficient, scalable, and targeted to your unique needs.</p>
                </div>
                <div className="inner-box">
                  {/* Single Item 1 */}
                  <div className="single-item wow fadeInRight animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={IconSeven} alt="Sourcing the Best Talent" />
                      </figure>
                      <h3>
                        <span>01</span>
                        <a href="#sourcing">
                          Sourcing the Best Talent<i className="flaticon-right-arrow"></i>
                        </a>
                      </h3>
                      <p>We utilize cutting-edge algorithms and AI-driven platforms to identify and engage top-tier candidates who are not just qualified, but also the best fit for your company culture.</p>
                    </div>
                  </div>
                  {/* Single Item 2 */}
                  <div className="single-item wow fadeInRight animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={IconEight} alt="Volume Hiring" />
                      </figure>
                      <h3>
                        <span>02</span>
                        <a href="#volume-hiring">
                          Efficient Volume Hiring<i className="flaticon-right-arrow"></i>
                        </a>
                      </h3>
                      <p>Our advanced recruitment systems allow us to manage large-scale hiring projects with ease, ensuring that each candidate is vetted and matched according to your specifications, all while maintaining a personal touch.</p>
                    </div>
                  </div>
                  {/* Single Item 3 */}
                  <div className="single-item wow fadeInRight animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner">
                      <figure className="icon-box">
                        <img src={IconNine} alt="Team Building Partners" />
                      </figure>
                      <h3>
                        <span>03</span>
                        <a href="#team-building">
                          Strategic Team Building<i className="flaticon-right-arrow"></i>
                        </a>
                      </h3>
                      <p>We partner with you to build cohesive teams that drive success. Our technology enables a collaborative approach to recruitment, ensuring that each new hire aligns with your strategic goals.</p>
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

export default RecruitmentTechnology;
