import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// Importing images
// import borderShape from '../assets/images/shape/border-1.png';
import quoteIcon from '../assets/images/icons/quote-1.png';
import testimonial1 from '../assets/images/resource/testimonial-1.png';
import testimonial2 from '../assets/images/resource/testimonial-2.png';

const TestimonialSection = () => {
    const options = {
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
    };

    return (
        <section className="testimonial-section bg-color-2">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="top-title">Users Testimonials</span>
                    <h2>Highest User Satisfaction Rate</h2>
                </div>
                <OwlCarousel className="testimonial-carousel owl-carousel owl-theme owl-dots-none owl-nav-none" {...options}>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="border-shap" ></div>
                            <figure className="quote-box"><img src={quoteIcon} alt="Quote" /></figure>
                            <div className="author-box">
                                <figure className="author-thumb"><img src={testimonial1} alt="Evan Clement" /></figure>
                                <ul className="rating clearfix">
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                </ul>
                                <h3>Evan Clement - <span>Manager, Cypertech</span></h3>
                            </div>
                            <div className="text">
                                <p>Sahyog PLacement is very accurate when comes to helping you find a job and if that job finishes, They help you to find another job placement!.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="border-shap" ></div>
                            <figure className="quote-box"><img src={quoteIcon} alt="Quote" /></figure>
                            <div className="author-box">
                                <figure className="author-thumb"><img src={testimonial2} alt="Freddie Esther" /></figure>
                                <ul className="rating clearfix">
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                </ul>
                                <h3>Freddie Esther - <span>VP, Daily News</span></h3>
                            </div>
                            <div className="text">
                                <p>I really appreciated the outstanding time, work, and effort that the entire staff put into finding me an excellent job placement. Thank you very much.</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
};

export default TestimonialSection;
