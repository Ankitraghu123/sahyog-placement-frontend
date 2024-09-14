import React, { useEffect, useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector}from 'react-redux'
import { registerCandidate } from "../features/candidate/candidateSlice";
import { toast } from "react-toastify";

const RegistrationForm = ({ toggleForm }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    highestQualification: "",
    postGradApplyYear: "",
    postGradPassingYear: "",
    postGradPercentage: "",
    postGradUniversityName: "",
    postGradSubject: "",
    gradApplyYear: "",
    gradPassingYear: "",
    gradPercentage: "",
    gradUniversityName: "",
    gradSubject: "",
    twelfthApplyYear: "",
    twelfthPassingYear: "",
    twelfthPercentage: "",
    twelfthBoardName: "",
    twelfthSubject: "",
    twelfthSchoolName: "",
    tenthApplyYear: "",
    tenthPassingYear: "",
    tenthPercentage: "",
    tenthBoardName: "",
    tenthSchoolName: "",
    dob: "",
    resumeUrl:"",
    twoWheelerAvailable: false,
    drivingLicense: false,
  });

  const handleChange = (e) => {
    const { type, name, value, files } = e.target;

    if (type === 'file') {
        // File handling: update state to the selected file
        setFormData({ ...formData, [name]: files[0] });
    } else {
        // Other input handling
        setFormData({ ...formData, [name]: value });
    }
};

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to handle file upload
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
    });

 
    await dispatch(registerCandidate(formDataToSend)); 
 
 
       
};
const candidateState = useSelector(state => state?.candidate)
const {isError,isSuccess} = candidateState

useEffect(()=>{
  if(isSuccess){
      // toast.info("User registered successfully")
      navigate('/')
      window.location.reload()
  }else if (isError){
      // toast.error("Something went wrong")
  }
},[isSuccess,isError])
  return (
    <div className="Register pt-5 pb-5">
      <div className="form-container shadow-lg " id="register-form">
        <form  onSubmit={handleSubmit} >
          <h2 className="register_heading">Register Now...</h2>
          <div className="d-flex">
            <div className="form-group w-100 mr-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name.."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                id="name"
                placeholder="Enter your number.."

                value={formData.mobile}
                onChange={handleChange}
                 pattern="^\d{10}$"
                required
              />
               {formData.mobile && formData.mobile.length !== 10 && (
    <small className="text-danger">Mobile number must be 10 digits.</small>
  )}
            </div>
           
          </div>
          <div className="d-flex">
            <div className="form-group w-100 mr-3">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="gender">Gender</label>
              <select
                type="gender"
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-100 border p-2"
              >
                <option value="select gender">select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="d-flex">
            
            <div className="form-group w-100 mr-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email.."

                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="************"

                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="highestQualification">Highest Qualification</label>
            <select
              name="highestQualification"
              id="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              required
              className="w-100 border p-2"
            >
              <option value="">Select</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="Graduation">Graduation</option>
              <option value="12th">12th</option>
              <option value="10th">10th</option>
            </select>
          </div>

          {/* Post Graduation Fields */}
          {formData.highestQualification === "Post Graduation" && (
            <>
              <h3>Post Graduation</h3>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="postGradApplyYear">Apply Year</label>
                  <input
                    type="text"
                    name="postGradApplyYear"
                    id="postGradApplyYear"
                    value={formData.postGradApplyYear}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="postGradPassingYear">Passing Year</label>
                  <input
                    type="text"
                    name="postGradPassingYear"
                    id="postGradPassingYear"
                    value={formData.postGradPassingYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="postGradPercentage">Percentage</label>
                  <input
                    type="text"
                    name="postGradPercentage"
                    id="postGradPercentage"
                    value={formData.postGradPercentage}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="postGradSubject">Subject</label>
                  <input
                    type="text"
                    name="postGradSubject"
                    id="postGradSubject"
                    value={formData.postGradSubject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="postGradUniversityName">University Name</label>
                <input
                  type="text"
                  name="postGradUniversityName"
                  id="postGradUniversityName"
                  value={formData.postGradUniversityName}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* Graduation Fields */}
          {(formData.highestQualification === "Post Graduation" || formData.highestQualification === "Graduation") && (
            <>
              <h3>Graduation</h3>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="gradApplyYear">Apply Year</label>
                  <input
                    type="text"
                    name="gradApplyYear"
                    id="gradApplyYear"
                    value={formData.gradApplyYear}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="gradPassingYear">Passing Year</label>
                  <input
                    type="text"
                    name="gradPassingYear"
                    id="gradPassingYear"
                    value={formData.gradPassingYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="gradPercentage">Percentage</label>
                  <input
                    type="text"
                    name="gradPercentage"
                    id="gradPercentage"
                    value={formData.gradPercentage}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="gradSubject">Subject</label>
                  <input
                    type="text"
                    name="gradSubject"
                    id="gradSubject"
                    value={formData.gradSubject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="gradUniversityName">University Name</label>
                <input
                  type="text"
                  name="gradUniversityName"
                  id="gradUniversityName"
                  value={formData.gradUniversityName}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* 12th Grade Fields */}
          {(formData.highestQualification === "Post Graduation" || formData.highestQualification === "Graduation" || formData.highestQualification === "12th") && (
            <>
              <h3>12th Grade</h3>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="twelfthApplyYear">Apply Year</label>
                  <input
                    type="text"
                    name="twelfthApplyYear"
                    id="twelfthApplyYear"
                    value={formData.twelfthApplyYear}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="twelfthPassingYear">Passing Year</label>
                  <input
                    type="text"
                    name="twelfthPassingYear"
                    id="twelfthPassingYear"
                    value={formData.twelfthPassingYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="twelfthPercentage">Percentage</label>
                  <input
                    type="text"
                    name="twelfthPercentage"
                    id="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="twelfthSubject">Subject</label>
                  <input
                    type="text"
                    name="twelfthSubject"
                    id="twelfthSubject"
                    value={formData.twelfthSubject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="twelfthBoardName">Board Name</label>
                <input
                  type="text"
                  name="twelfthBoardName"
                  id="twelfthBoardName"
                  value={formData.twelfthBoardName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="twelfthSchoolName">School Name</label>
                <input
                  type="text"
                  name="twelfthSchoolName"
                  id="twelfthSchoolName"
                  value={formData.twelfthSchoolName}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* 10th Grade Fields */}
          {(formData.highestQualification === "Post Graduation" || formData.highestQualification === "Graduation" || formData.highestQualification === "12th" || formData.highestQualification === "10th") && (
            <>
              <h3>10th Grade</h3>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="tenthApplyYear">Apply Year</label>
                  <input
                    type="text"
                    name="tenthApplyYear"
                    id="tenthApplyYear"
                    value={formData.tenthApplyYear}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="tenthPassingYear">Passing Year</label>
                  <input
                    type="text"
                    name="tenthPassingYear"
                    id="tenthPassingYear"
                    value={formData.tenthPassingYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group w-100 mr-3">
                  <label htmlFor="tenthPercentage">Percentage</label>
                  <input
                    type="text"
                    name="tenthPercentage"
                    id="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100">
                  <label htmlFor="tenthBoardName">Board Name</label>
                  <input
                    type="text"
                    name="tenthBoardName"
                    id="tenthBoardName"
                    value={formData.tenthBoardName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tenthSchoolName">School Name</label>
                <input
                  type="text"
                  name="tenthSchoolName"
                  id="tenthSchoolName"
                  value={formData.tenthSchoolName}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

<div className="form-group w-100 mr-3">
                  <label htmlFor="skills">Your Skills</label>
                  <textarea name="" id="" placeholder="Enter your skills..." className="w-100 border"></textarea>
                </div>

                <div className="form-group w-100">
    <label htmlFor="resume">Upload Resume</label>
    <input
        type="file"
        name="resumeUrl"
        id="resume"
        onChange={handleChange}
    />
</div>

<div className="register-fields">
            <div className="form-group">
              <label>Do you have a two-wheeler?</label>
              <div className="d-flex">
                <label className="d-flex align-items-center mr-5">
                  yes
                  <input
                    type="radio"
                    name="twoWheelerAvailable"
                    value="yes"
                    checked={formData.twoWheelerAvailable === "yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        twoWheelerAvailable: e.target.value,
                      })
                    }
                    className="ml-4"
                  />
                </label>
                <label className="d-flex align-items-center">
                  No
                  <input
                    type="radio"
                    name="twoWheelerAvailable"
                    value="no"
                    checked={formData.twoWheelerAvailable === "no"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        twoWheelerAvailable: e.target.value,
                      })
                    }
                    className="ml-4"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Do you have a driving license?</label>
              <div className="d-flex">
                <label className="d-flex align-items-center mr-5">
                  Yes
                  <input
                    type="radio"
                    name="drivingLicense"
                    value="yes"
                    checked={formData.drivingLicense === "yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        drivingLicense: e.target.value,
                      })
                    }
                    className="ml-4"
                  />
                </label>
                <label className="d-flex align-items-center">
                  No
                  <input
                    type="radio"
                    name="drivingLicense"
                    value="no"
                    checked={formData.drivingLicense === "no"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        drivingLicense: e.target.value,
                      })
                    }
                    className="ml-4"
                  />
                </label>
              </div>
            </div>
            </div>


          <button type="submit" className="btn1">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p>
            {/* <Link to="#" onClick={toggleForm}>Toggle Form</Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
