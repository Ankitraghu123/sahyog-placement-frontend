import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { candidateProfile } from '../features/candidate/candidateSlice';

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(candidateProfile())
    })
    const candidateState = useSelector(state => state.candidate?.candidateProfile)

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-section">
        <h2>Basic Information</h2>
        <p><strong>Name:</strong> {candidateState?.name}</p>
        <p><strong>Email:</strong> {candidateState?.email}</p>
        <p><strong>Date of Birth:</strong> {new Date(candidateState?.dob).toLocaleDateString()}</p>
      </div>

      <div className="profile-section">
        <h2>Qualifications</h2>
        <p><strong>Highest Qualification:</strong> {candidateState?.highestQualification}</p>
        
        {candidateState?.highestQualification === 'Post Graduation' && (
          <>
            <p><strong>Post Grad Apply Year:</strong> {candidateState?.postGradApplyYear}</p>
            <p><strong>Post Grad Passing Year:</strong> {candidateState?.postGradPassingYear}</p>
            <p><strong>Post Grad Percentage:</strong> {candidateState?.postGradPercentage}</p>
            <p><strong>Post Grad University Name:</strong> {candidateState?.postGradUniversityName}</p>
            <p><strong>Post Grad Subject:</strong> {candidateState?.postGradSubject}</p>
          </>
        )}

        {['Post Graduation', 'Graduation'].includes(candidateState?.highestQualification) && (
          <>
            <p><strong>Graduation Apply Year:</strong> {candidateState?.gradApplyYear}</p>
            <p><strong>Graduation Passing Year:</strong> {candidateState?.gradPassingYear}</p>
            <p><strong>Graduation Percentage:</strong> {candidateState?.gradPercentage}</p>
            <p><strong>Graduation University Name:</strong> {candidateState?.gradUniversityName}</p>
            <p><strong>Graduation Subject:</strong> {candidateState?.gradSubject}</p>
          </>
        )}

        {['Post Graduation', 'Graduation', '12th'].includes(candidateState?.highestQualification) && (
          <>
            <p><strong>12th Passing Year:</strong> {candidateState?.twelfthPassingYear}</p>
            <p><strong>12th Percentage:</strong> {candidateState?.twelfthPercentage}</p>
            <p><strong>12th Board Name:</strong> {candidateState?.twelfthBoardName}</p>
            <p><strong>12th Subject:</strong> {candidateState?.twelfthSubject}</p>
            <p><strong>12th School Name:</strong> {candidateState?.twelfthSchoolName}</p>
          </>
        )}

        <p><strong>10th Passing Year:</strong> {candidateState?.tenthPassingYear}</p>
        <p><strong>10th Percentage:</strong> {candidateState?.tenthPercentage}</p>
        <p><strong>10th Board Name:</strong> {candidateState?.tenthBoardName}</p>
        <p><strong>10th School Name:</strong> {candidateState?.tenthSchoolName}</p>
      </div>

      <div className="profile-section">
        <h2>Other Information</h2>
        <p><strong>Two-Wheeler Available:</strong> {candidateState?.twoWheelerAvailable ? 'Yes' : 'No'}</p>
        <p><strong>Driving License:</strong> {candidateState?.drivingLicense ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
