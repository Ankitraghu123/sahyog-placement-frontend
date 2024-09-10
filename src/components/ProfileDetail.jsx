import React, { useEffect } from 'react';
import { Card, Row, Col, Container } from '@themesberg/react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { candidateProfile } from '../features/candidate/candidateSlice';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(candidateProfile());
  }, [dispatch]);

  const candidateDetails = useSelector(state => state?.candidate?.candidateProfile);

  return (
    <Container className='shadow-lg mt-5 mb-5'>
      <Col xs={12} xl={12}>
        <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
            <h5 className="mb-4 register_heading">Candidate Profile Detail</h5>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Name:</h6>
                <p>{candidateDetails?.name || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Mobile:</h6>
                <p>{candidateDetails?.mobile || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Email:</h6>
                <p>{candidateDetails?.email || 'N/A'}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <h6>State:</h6>
                <p>{candidateDetails?.state || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>City:</h6>
                <p>{candidateDetails?.city || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Highest Qualification:</h6>
                <p>{candidateDetails?.highestQualification || 'N/A'}</p>
              </Col>
            </Row>
            <h5 className="mt-4">Post Graduation Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Apply Year:</h6>
                <p>{candidateDetails?.postGradApplyYear || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Passing Year:</h6>
                <p>{candidateDetails?.postGradPassingYear || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Percentage:</h6>
                <p>{candidateDetails?.postGradPercentage || 'N/A'}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <h6>University Name:</h6>
                <p>{candidateDetails?.postGradUniversityName || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Subject (Course Name):</h6>
                <p>{candidateDetails?.postGradSubject || 'N/A'}</p>
              </Col>
            </Row>
            <h5 className="mt-4">Graduation Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Apply Year:</h6>
                <p>{candidateDetails?.gradApplyYear || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Passing Year:</h6>
                <p>{candidateDetails?.gradPassingYear || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Percentage:</h6>
                <p>{candidateDetails?.gradPercentage || 'N/A'}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <h6>University Name:</h6>
                <p>{candidateDetails?.gradUniversityName || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Subject (Course Name):</h6>
                <p>{candidateDetails?.gradSubject || 'N/A'}</p>
              </Col>
            </Row>
            <h5 className="mt-4">12th Grade Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Passing Year:</h6>
                <p>{candidateDetails?.twelfthPassingYear || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Percentage:</h6>
                <p>{candidateDetails?.twelfthPercentage || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Board:</h6>
                <p>{candidateDetails?.twelfthBoard || 'N/A'}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Subject (Course Name):</h6>
                <p>{candidateDetails?.twelfthSubject || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>School Name:</h6>
                <p>{candidateDetails?.twelfthSchoolName || 'N/A'}</p>
              </Col>
            </Row>
            <h5 className="mt-4">10th Grade Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Passing Year:</h6>
                <p>{candidateDetails?.tenthPassingYear || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Percentage:</h6>
                <p>{candidateDetails?.tenthPercentage || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Board:</h6>
                <p>{candidateDetails?.tenthBoard || 'N/A'}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Subject (Course Name):</h6>
                <p>{candidateDetails?.tenthSubject || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>School Name:</h6>
                <p>{candidateDetails?.tenthSchoolName || 'N/A'}</p>
              </Col>
            </Row>
            <h5 className="mt-4">Additional Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <h6>Two-Wheeler License:</h6>
                <p>{candidateDetails?.twoWheeler || 'N/A'}</p>
              </Col>
              <Col md={4}>
                <h6>Driving License:</h6>
                <p>{candidateDetails?.drivingLicense || 'N/A'}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
