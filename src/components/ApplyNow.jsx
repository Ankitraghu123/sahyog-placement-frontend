import React, { useState } from 'react';
// import './ApplyNow.css'; // Assuming you have a corresponding CSS file for styles
import pattern35 from '../assets/images/shape/pattern-35.png';
import pageTitle2 from '../assets/images/background/page-title-2.jpg';
import icon64 from '../assets/images/icons/icon-64.png';
import icon65 from '../assets/images/icons/icon-65.png';
import clientLogo13 from '../assets/images/clients/clients-logo-13.png';
import clientLogo14 from '../assets/images/clients/clients-logo-14.png';
import clientLogo15 from '../assets/images/clients/clients-logo-15.png';
import clientLogo16 from '../assets/images/clients/clients-logo-16.png';
import clientLogo17 from '../assets/images/clients/clients-logo-17.png';
import clientLogo18 from '../assets/images/clients/clients-logo-18.png';

const ApplyNow = () => {
  const [basicInfo, setBasicInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: ''
  });

  const [qualification, setQualification] = useState({
    education: '',
    skills: '',
    experience: '',
    qualities: '',
    uploadFile: ''
  });

  const [jobDetails, setJobDetails] = useState({
    jobNumber: '',
    workStatus: '',
    message: ''
  });

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  const handleQualificationChange = (e) => {
    const { name, value } = e.target;
    setQualification({ ...qualification, [name]: value });
  };

  const handleJobDetailsChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(basicInfo, qualification, jobDetails);
  };

  return (
    <>
      <section className="page-title pb-0" style={{ backgroundImage: `url(${pageTitle2})` }}>
        <div className="pattern-layer" style={{ backgroundImage: `url(${pattern35})` }}></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box centred">
              <h1>Apply Now</h1>
              <p>Your Staffing Needs are Unique and Always Evolving</p>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="">Home</a></li>
              <li>Job Seekers</li>
              <li>Apply Now</li>
            </ul>
            <div className="bg-shape"></div>
          </div>
        </div>
      </section>

      <section className="placejob-section applynow-section">
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="top-title">Job Opportunities</span>
            <h2>Apply Now Your Dream Job</h2>
            <p>We’re committed to fulfilling your unique hiring needs. Fill out the <br />form below & we’ll be in touch shortly</p>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="title-inner">
                  <figure className="icon-box"><img src={icon64} alt="" /></figure>
                  <h2>Basic Information</h2>
                  <p>Please fill out your contact person details here.</p>
                </div>
                <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/place-job.html" method="post" className="job-form information-form" onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="fname" placeholder="First Name*" required onChange={handleBasicInfoChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="lname" placeholder="Last Name*" required onChange={handleBasicInfoChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="email" name="email" placeholder="Email*" required onChange={handleBasicInfoChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="phone" placeholder="Phone" required onChange={handleBasicInfoChange} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text" name="address" placeholder="Address (eg: No,Street,City,State,Zip)" required onChange={handleBasicInfoChange} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="title-inner">
                  <figure className="icon-box"><img src={icon65} alt="" /></figure>
                  <h2>Qualification</h2>
                  <p>Please fill out your qualification details here.</p>
                </div>
                <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/place-job.html" method="post" className="job-form pualification-form" onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="education" placeholder="Education" required onChange={handleQualificationChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <div className="select-box">
                        <select className="wide" name="skills" onChange={handleQualificationChange}>
                          <option data-display="Skills">Skills</option>
                          <option value="ATX Group">ATX Group</option>
                          <option value="Ajax Company">Ajax Company</option>
                          <option value="Jhon Group">Jhon Group</option>
                          <option value="Nike Japan">Nike Japan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="experience" placeholder="Total Experience" required onChange={handleQualificationChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="qualities" placeholder="Personal Qualities" required onChange={handleQualificationChange} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <i className="flaticon-cloud-computing"></i>
                      <input type="text" name="uploadFile" placeholder="Upload Resume (DOC or PDF Files only, Up to 1 MB)" required onChange={handleQualificationChange} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-column">
              <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/" method="post" className="apply-form" onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="jobNumber" placeholder="Job Number*" required onChange={handleJobDetailsChange} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="select-box">
                      <select className="wide" name="workStatus" onChange={handleJobDetailsChange}>
                        <option data-display="Select Desired Work Status">Select Desired Work Status</option>
                        <option value="ATX Group">ATX Group</option>
                        <option value="Ajax Company">Ajax Company</option>
                        <option value="Jhon Group">Jhon Group</option>
                        <option value="Nike Japan">Nike Japan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Additional Information ..." onChange={handleJobDetailsChange}></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                    <button type="submit" className="theme-btn-one">Apply for Job</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section alternet-2">
        <div className="outer-container">
          <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            <figure className="clients-logo-box">
              <a href=""><img src={clientLogo13} alt="" /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
            <figure className="clients-logo-box">
              <a href=""><img src={clientLogo14} alt="" /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
            <figure className="clients-logo-box">
              <a href=""><img src={clientLogo15} alt="" /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
            <figure className="clients-logo-box">
              <a href=""><img src={clientLogo16} alt="" /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
            <figure className="clients-logo-box">
              <a href=""><img src={clientLogo17} alt="" /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
            <figure className="clients-logo-box">
              <a href=""><img src={clientLogo18} alt="" /></a>
              <span className="logo-title"><a href="">Visit Website</a></span>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyNow;
