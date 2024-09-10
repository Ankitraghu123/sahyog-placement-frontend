import React, { useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { TiDelete } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { registerCompany } from '../features/company/companySlice';

// Importing images
import pageTitleBg from '../assets/images/background/page-title-2.jpg';
import patternLayer from '../assets/images/shape/pattern-35.png';
import companyIcon from '../assets/images/icons/icon-58.png';
import contactPersonIcon from '../assets/images/icons/icon-59.png';
import requestTalentIcon from '../assets/images/icons/icon-60.png';

const PlaceJob = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        companyName: '',
        companyWebsite: '',
        city: '',
        address: '',
        contactPersonName: '',
        contactPersonMobile: '',
        contactPersonEmail: '',
        note: '',
        jobs: [{}] // Array of job objects
    });

    const handleAddForm = () => {
        if (formData.jobs.length < 3) { // Limit to 3 total forms (1 initial + 2 more)
            setFormData({
                ...formData,
                jobs: [...formData.jobs, { role: '', jobLocation: '' }] // Add two fields per job
            });
        } else {
            alert("You can only add two more jobs."); // Optional alert to inform the user
        }
    };

    const handleDeleteForm = (index) => {
        const updatedJobs = formData.jobs.filter((_, i) => i !== index);
        setFormData({ ...formData, jobs: updatedJobs });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleJobChange = (index, e) => {
        const { name, value } = e.target;
        const updatedJobs = [...formData.jobs];
        updatedJobs[index] = { ...updatedJobs[index], [name]: value };
        setFormData({ ...formData, jobs: updatedJobs });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerCompany(formData))
        console.log('Form Data:', formData); // Capture all form data here
    };

    return (
        <>
            {/* Page Title */}
            <section className="page-title pb-0" style={{ backgroundImage: `url(${pageTitleBg})` }}>
                <div className="pattern-layer" style={{ backgroundImage: `url(${patternLayer})` }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1>Place Your Job</h1>
                            <p>Our Team Moves Faster, Keeping you Current on What's Hot</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="">Home</a></li>
                            <li>Employers</li>
                            <li>Place Job Order</li>
                        </ul>
                        <div className="bg-shape"></div>
                    </div>
                </div>
            </section>
            {/* End Page Title */}

            {/* placejob-section */}
            <section className="placejob-section">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="top-title">Request Needed Talent</span>
                        <h2>Tell Us About Your Hiring Needs</h2>
                        <p>We’re committed to fulfilling your unique hiring needs. Fill out the <br />form below & we’ll be in touch shortly</p>
                    </div>
                    <form onSubmit={handleSubmit} className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <div className="title-inner">
                                    <figure className="icon-box"><img src={companyIcon} alt="Company Icon" /></figure>
                                    <h2>Company Details</h2>
                                    <p>Please fill out your company details here.</p>
                                </div>
                                <div className="job-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="companyName" placeholder="Company Name*" required onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="companyWebsite" placeholder="Website" required onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="city" placeholder="City" required onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="address" placeholder="Address (eg: No,Street,City,State,Zip)" required onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <div className="title-inner">
                                    <figure className="icon-box"><img src={contactPersonIcon} alt="Contact Person Icon" /></figure>
                                    <h2>Contact Person</h2>
                                    <p>Please fill out your contact person details here.</p>
                                </div>
                                <div className="job-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="contactPersonName" placeholder="Contact Person Name*" required onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="contactPersonMobile" placeholder="Contact Person Mobile" required onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="email" name="contactPersonEmail" placeholder="Contact Person Email*" required onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <div className="title-inner d-flex justify-content-between">
                                    <div>
                                        <figure className="icon-box"><img src={requestTalentIcon} alt="Request Talent Icon" /></figure>
                                        <h2>Request Talent</h2>
                                        <p>Here you can leave your job details & Submit your job post.</p>
                                    </div>
                                    <p className="add-btn theme-btn" onClick={handleAddForm}>Add More Jobs</p>
                                </div>
                                <div className="job-form">
                                    {formData.jobs.map((_, index) => (
                                        <div className="job-form-section" key={index}>
                                            <div className="col clearfix">
                                                <div className="d-flex" id="add-job-responsive">
                                                    {index > 0 && (
                                                        <button type="button" id="job-btn" onClick={() => handleDeleteForm(index)}><TiDelete /></button>
                                                    )}
                                                    <div className="form-group w-100 mr-3">
                                                        <input type="text" name="role" placeholder="Role" required onChange={(e) => handleJobChange(index, e)} />
                                                    </div>
                                                    <div className="form-group w-100 mr-3">
                                                        <input type="text" name="jobLocation" placeholder="Job Location" required onChange={(e) => handleJobChange(index, e)} />
                                                    </div>
                                                    <div className="form-group w-100">
                                                        <input type="text" name="numberOfJobOpenings" placeholder="NO OF Opening Positions" required onChange={(e) => handleJobChange(index, e)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <button type="submit" className="theme-btn-one">Submit Request</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* placejob-section end */}
        </>
    );
};

export default PlaceJob;
