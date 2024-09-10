import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { candidateProfile, jobsAppliedByCandidate } from '../features/candidate/candidateSlice';

const ApplyDetailTable = () => {
  const dispatch = useDispatch();

  // Fetch candidate profile on component mount
  useEffect(() => {
    dispatch(candidateProfile());
  }, [dispatch]);

  const candidateDetails = useSelector(state => state.candidate?.candidateProfile);
  const applyDetails = useSelector(state => state.candidate?.jobsApllied); // Corrected selector

  // Fetch jobs applied by candidate when candidate details are loaded
  useEffect(() => {
    if (candidateDetails?._id) {
      dispatch(jobsAppliedByCandidate(candidateDetails._id));
    }
  }, [dispatch, candidateDetails]);

  return (
    <Container className='pt-5 pb-5'>
      <h2 className="my-4 register_heading">Apply Details</h2>
      <Table className='apply-table' striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Apply Date</th>
            <th>Designation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applyDetails?.map((detail, idx) => (
            <tr key={detail?.jobId?._id}>
              <td>{idx + 1}</td>
              <td>{detail?.jobId?.companyName}</td>
              <td>{new Date(detail?.jobId?.createdAt).toLocaleDateString()}</td>
              <td>{detail?.jobId?.role}</td> {/* Corrected the case from JobId to jobId */}
              <td>{detail?.jobId?.status}</td> {/* Corrected the case from JobId to jobId */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ApplyDetailTable;
