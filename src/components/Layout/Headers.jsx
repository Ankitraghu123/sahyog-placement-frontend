import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { Button, Col, Row } from 'react-bootstrap';
import { isLoggedIn } from '../../utils/config';
import Logo from '../../assets/logo.png'

function Headers() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Initial check on component mount
    setIsAuthenticated(isLoggedIn());

    // Listen for storage changes (e.g., login/logout in different tabs)
    const handleStorageChange = () => {
      setIsAuthenticated(isLoggedIn());
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="nav pt-3 pb-3 position-sticky sticky-top bg-white">
      <Container>
        <Col xs={6} md={3}>
          <Navbar.Brand href="/" id="logo">
            <img src={Logo} alt="" />
          </Navbar.Brand>
        </Col>
        <Col id="content" xs={6} md={9}>
          <Navbar.Toggle className="me-2" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Employer" id="basic-nav-dropdown">
                <NavDropdown.Item href="/placejob">Place job</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Candidate" id="basic-nav-dropdown">
              <NavDropdown.Item href="/job-openings">Job Opening</NavDropdown.Item>
              {isAuthenticated ?<>
              <NavDropdown.Item href="/apply">My Jobs</NavDropdown.Item>
                <NavDropdown.Item href="/edit">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="/detail">Profile Detail</NavDropdown.Item>
                </>
              :null
            }

              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <div className="Register_btn">
                {isAuthenticated ? (
                  <Button
                    onClick={handleLogout}
                    id="radio"
                    className="btn btn-primary text-center"
                    style={{ border: 'none' }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Nav.Link
                    id="radio"
                    className="btn btn-primary text-center"
                    href="/login"
                  >
                    Login
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Headers;
