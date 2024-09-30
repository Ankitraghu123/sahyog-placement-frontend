import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJob } from "../features/job/jobSlice";
import { Link } from "react-router-dom";
import logo from '../assets/images/resource/job-logo.png';
const JobOpenings = () => {
  const dispatch = useDispatch()
  const [searchRole, setSearchRole] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(()=>{
    dispatch(getAllJob())
  },[])
  const jobState = useSelector(state => state.job?.jobs)

  const pendingJobs = jobState?.filter(job => job.status === "Pending");

  const filteredJobs = pendingJobs?.filter((job) => {
    return (
      job.role.toLowerCase().includes(searchRole.toLowerCase()) &&
      job.jobLocation.toLowerCase().includes(searchLocation.toLowerCase())
    );
  });


  function timeAgo(dateString) {
    const timeStamp = new Date(dateString);
    const now = new Date();
    const difference = now - timeStamp;

    const seconds = Math.floor(difference / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else {
        return `${days} days ago`;
    }
  }

  return (
    <div>
      {/* Page Title */}
      {/* <section
        className="page-title"
        style={{
          backgroundImage: `url(/src/assets/images/background/page-title-2.jpg)`,
        }}
      >
        <div
          className="pattern-layer"
          style={{
            backgroundImage: `url(/src/assets/images/shape/pattern-35.png)`,
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box centred">
              <h1>Job Openings</h1>
              <p>Our Team Moves Faster, Keeping you Current on What's Hot</p>
            </div>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Job Seekers</li>
              <li>Job Openings</li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* End Page Title */}

      {/* Find Job Section */}
      <section className="findjob-section">
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="top-title">Recently Posted Jobs</span>
            <h2>Find Your Job You Deserve It</h2>
            <p>
              Long established fact that a reader will be distracted by the
              <br />
              readable content of a page.
            </p>
          </div>
          <div className="search-inner">
            <form
              className="search-form"
            >
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 column">
                  <div className="form-group">
                    <i className="flaticon-search"></i>
                    <input
                      type="search"
                      name="search-role"
                      placeholder="Keyword (Role)"
                      value={searchRole}
                      onChange={(e) => setSearchRole(e.target.value)}
                    />

                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 column">
                  <div className="form-group">
                    <i className="flaticon-place"></i>
                    <input
                      type="search"
                      name="search-location"
                      placeholder="Location (City or State)"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 column">
                <div className="form-group">
                    <button type="button" className="theme-btn-one">
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="post-jobs">
          {filteredJobs?.map((jobDetails) =>
              jobDetails.salary ? (
                <JobPost
                  key={jobDetails._id}
                  title={jobDetails.role}
                  location={jobDetails.jobLocation}
                  salary={jobDetails.salary}
                  experience={jobDetails.experienceRequired}
                  deadline={jobDetails.deadline}
                  logo={logo}
                  id={jobDetails._id}
                />
              ) : null
            )}
          </div>
        </div>
      </section>
      {/* Find Job Section End */}

      {/* Hiring Section */}
      {/* <section className="hiring-section">
        <div className="image-layer">
          <figure className="image-1">
            <img src="/src/assets/images/resource/hiring-1.png" alt="" />
          </figure>
          <figure className="image-2">
            <img src="/src/assets/images/resource/hiring-2.png" alt="" />
          </figure>
        </div>
        <div className="outer-container clearfix">
          <div className="left-column pull-left clearfix">
            <div className="inner-box pull-right">
              <div className="icon-box">
                <i className="flaticon-factory"></i>
              </div>
              <h2>Industries Hiring</h2>
              <p>
                Find fault with a man who chooses to enjoy a pleasure that has
                no annoying consequences.
              </p>
              <a href="service.html">Industries</a>
            </div>
          </div>
          <div className="right-column pull-right clearfix">
            <div className="inner-box pull-left">
              <div className="icon-box">
                <i className="flaticon-working-man"></i>
              </div>
              <h2>Professions Hiring</h2>
              <p>
                Chooses to enjoy a pleasure that has no annoying one who avoids
                a pain that produces.
              </p>
              <a href="service.html">Professions</a>
            </div>
          </div>
        </div>
      </section> */}
      {/* Hiring Section End */}

      {/* Contact Section */}
      {/* <section className="contact-section">
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="top-title">Get Touch With US</span>
            <h2>Send Your Message Us</h2>
          </div>
          <div className="form-inner">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: `url(/src/assets/images/shape/pattern-42.png)`,
              }}
            ></div>
            <form
              action="https://st.ourhtmldemo.com/new/Eazyrecruitz/service.html"
              method="post"
              className="default-form"
            >
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone *"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Hiring Employees">
                        Hiring Employees
                      </option>
                      <option value="1">ATX Group</option>
                      <option value="2">Ajax Company</option>
                      <option value="3">Jhon Group</option>
                      <option value="4">Nike Japan</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    required=""
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    name="message"
                    placeholder="Message ..."
                  ></textarea>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                  <button type="submit" className="theme-btn-one">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      {/* Contact Section End */}
    </div>
  );
};

const JobPost = ({ posted, title, location, salary, experience, logo ,id,deadline}) => {

  return (
    <div className="single-job-post">
      <div className="job-header clearfix">
        <ul className="info pull-left">
          {/* <li>
            <a href="job-openings.html">{type}</a>
          </li> */}
          {/* <li>
            <i className="flaticon-clock"></i>
            {posted}
          </li> */}
        </ul>
        <div className="number pull-right">
          <p>Posted: {posted}</p>
        </div>
      </div>
      <div className="job-inner clearfix">
        <div className="job-title">
          <figure className="company-logo">
            <img className="mb-2" src={logo} alt={title} />
          </figure>
         <Link to={`/job-details/${id}`}>
         <h3 className="text-capitalize text-black">{title}</h3>
         </Link>
          <p>
            <i className="flaticon-place"></i>
            {location}
          </p>
        </div>
        <div className="salary-box d-flex gap-5">
          <div><span>Salary</span>
          <p>{salary}</p></div>

          <div><span>Deadline</span>
          <p>{deadline}</p></div>
        </div>
        <div className="experience-box">
          <span>Experience Need</span>
          <p>{experience}</p>
         
        </div>
        {/* <div className="experience-box">
         
        </div> */}
        <div className="apply-btn">
          <Link to={`/job-details/${id}`}>Apply</Link>

        </div>
      </div>
    </div>
  );
};

export default JobOpenings;

