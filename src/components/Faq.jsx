import React, { useState } from 'react';
// import './styles.css'; // Assuming you have a CSS file for styles

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div>
            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: 'url(/src/assets/images/background/page-title-2.jpg)' }}>
                <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-35.png)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1>FAQ’S</h1>
                            <p>Things You Need to Know and We Know You Need</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="">Home</a></li>
                            <li>Employers</li>
                            <li>FAQ’S</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Page Title */}

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <figure className="image-box">
                                <img src="/src/assets/images/resource/faq-1.png" alt="" />
                            </figure>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                            <div className="inner-box">
                                <div className="sec-title">
                                    <span className="top-title">Employer Faq’s</span>
                                    <h2>You'll Find Answers Here!</h2>
                                </div>
                                <ul className="accordion-box">
                                    {[
                                        { question: "01. What Kind of Services Offer?", answer: "To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right." },
                                        { question: "02. How Do I Start Hiring?", answer: "To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right." },
                                        { question: "03. What is the Job Approval Process?", answer: "To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right." },
                                        { question: "04. Why is the Job I Posted Not Approved Yet?", answer: "To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right." },
                                        { question: "05. What is the Refund Policy?", answer: "To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right." },
                                        { question: "06. What is Contractual Staffing?", answer: "To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right." },
                                    ].map((faq, index) => (
                                        <li className={`accordion block ${activeIndex === index ? 'active-block' : ''}`} key={index}>
                                            <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                                <div className="icon-outer"></div>
                                                <h5>{faq.question}</h5>
                                            </div>
                                            <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                                <div className="text">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End FAQ Section */}

            {/* Clients Style Two */}
            <section className="clients-style-two" style={{ backgroundImage: 'url(/src/assets/images/background/clients-1.jpg)' }}>
                <div className="auto-container">
                    <div className="title-inner centred">
                        <h2>Need of Highly Qualified HR Personnel or Employment Opportunities</h2>
                        <div className="btn-box">
                            <a href="index-" className="btn-one">Hire</a>
                            <a href="index-" className="btn-two">Apply</a>
                        </div>
                    </div>
                    <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <figure className="clients-logo-box">
                            <a href=""><img src="/src/assets/images/clients/clients-logo-7.png" alt="" /></a>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href=""><img src="/src/assets/images/clients/clients-logo-8.png" alt="" /></a>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href=""><img src="/src/assets/images/clients/clients-logo-9.png" alt="" /></a>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href=""><img src="/src/assets/images/clients/clients-logo-10.png" alt="" /></a>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href=""><img src="/src/assets/images/clients/clients-logo-11.png" alt="" /></a>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href=""><img src="/src/assets/images/clients/clients-logo-12.png" alt="" /></a>
                        </figure>
                    </div>
                </div>
            </section>
            {/* End Clients Style Two */}
        </div>
    );
};

export default Faq;
