import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebookF
} from "react-icons/fa";

import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="justify-content-center text-center py-5">
              <Col lg={8}>
                <Badge bg="warning" className="mb-3 px-3 py-2">CONTACT US</Badge>
                <h1 className="display-4 fw-bold mb-4">Get in Touch With PP Minerals</h1>
                <p className="lead">
                  We're here to answer your questions and discuss how our mining solutions can meet your needs
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="py-5">
          <Container>
            <Row className="mb-5">
              <Col lg={12} className="text-center">
                <h2 className="fw-bold text-primary mb-3">Our Contact Information</h2>
                <p className="text-muted">Reach out to us through any of the following channels</p>
              </Col>
            </Row>
            
            <Row>
              <Col lg={4} className="mb-4">
                <Card className="h-100 border-0 shadow text-center py-4 contact-card">
                  <Card.Body>
                    <div className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                      <FaPhone className="text-warning" size={24} />
                    </div>
                    <Card.Title className="text-primary">Phone</Card.Title>
                    <Card.Text>
                      <a href="tel:+919829039880" className="text-decoration-none text-dark">
                        +91 9829039880
                      </a>
                      <br />
                      <a href="tel:+919829878999" className="text-decoration-none text-dark">
                        +91 9829878999
                      </a>
                    </Card.Text>
                    <small className="text-muted">Mon-Fri, 9:00 AM - 6:00 PM</small>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} className="mb-4">
                <Card className="h-100 border-0 shadow text-center py-4 contact-card">
                  <Card.Body>
                    <div className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                      <FaEnvelope className="text-warning" size={24} />
                    </div>
                    <Card.Title className="text-primary">Email</Card.Title>
                    <Card.Text>
                      <a href="mailto:info@ppminerals.com" className="text-decoration-none text-dark">
                        info@ppminerals.com
                      </a>
                      <br />
                      <a href="mailto:sales@ppminerals.com" className="text-decoration-none text-dark">
                        sales@ppminerals.com
                      </a>
                    </Card.Text>
                    <small className="text-muted">We respond within 24 hours</small>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} className="mb-4">
                <Card className="h-100 border-0 shadow text-center py-4 contact-card">
                  <Card.Body>
                    <div className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                      <FaMapMarkerAlt className="text-warning" size={24} />
                    </div>
                    <Card.Title className="text-primary">Address</Card.Title>
                    <Card.Text>
                      PP Minerals Office
                      <br />
                      1 Suvidhi Nagar, Ramganjmandi
                      <br />
                      Kota, Rajasthan, 
                      India 326519
                    </Card.Text>
                    <small className="text-muted">Headquarters</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Map and Office Hours */}
        <section className="py-5 bg-light">
          <Container>
            <Row>
              <Col lg={8} className="mb-4 mb-lg-0">
                <h3 className="fw-bold text-primary mb-4">Our Location</h3>
                <div className="rounded overflow-hidden shadow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25136.248462972537!2d75.51413032938031!3d24.18443271538338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396452a2139ae675%3A0xbac0ae7069462b69!2sPinchhala%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1757650612969!5m2!1sen!2sin" 
                    width="100%" 
                    height="400" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PP Minerals Location"
                  ></iframe>
                </div>
              </Col>
              
              <Col lg={4}>
                <h3 className="fw-bold text-primary mb-4">Office Hours</h3>
                <Card className="border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        <FaClock className="text-warning" />
                      </div>
                      <div>
                        <h5 className="mb-0 text-primary">Business Hours</h5>
                      </div>
                    </div>
                    
                    <div className="mb-3 pb-2 border-bottom">
                      <div className="d-flex justify-content-between">
                        <span className="fw-medium">Monday - Friday</span>
                        <span className="text-primary">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                    
                    <div className="mb-3 pb-2 border-bottom">
                      <div className="d-flex justify-content-between">
                        <span className="fw-medium">Saturday</span>
                        <span className="text-primary">10:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                    
                    <div className="mb-3 pb-2 border-bottom">
                      <div className="d-flex justify-content-between">
                        <span className="fw-medium">Sunday</span>
                        <span className="text-primary">Closed</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="text-primary mb-3">Emergency Contact</h5>
                      <p className="mb-1">For urgent matters outside business hours:</p>
                      <a href="tel:+91 9829878999" className="text-decoration-none text-dark fw-bold">
                        +91 8298 78999
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                
                {/* <div className="mt-4">
                  <h5 className="text-primary mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="social-icon bg-primary d-inline-flex align-items-center justify-content-center rounded-circle">
                      <FaLinkedin className="text-warning" />
                    </a>
                    <a href="#" className="social-icon bg-primary d-inline-flex align-items-center justify-content-center rounded-circle">
                      <FaTwitter className="text-warning" />
                    </a>
                    <a href="#" className="social-icon bg-primary d-inline-flex align-items-center justify-content-center rounded-circle">
                      <FaFacebookF className="text-warning" />
                    </a>
                  </div>
                </div> */}
              </Col>
            </Row>
          </Container>
        </section>

  

        {/* CTA Section */}
        <section className="py-5 bg-warning">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h2 className="fw-bold mb-4 text-dark">Ready to Discuss Your Mineral Needs?</h2>
                <p className="lead mb-4 text-dark">
                  Contact our team today for quotes, technical specifications, or to schedule a visit to our facilities.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <a href="tel:+91 9829039880" className="btn btn-primary btn-lg px-4 py-2 fw-bold">
                    Call Now
                  </a>
                  <a href="mailto:info@ppminerals.com" className="btn btn-outline-dark btn-lg px-4 py-2 fw-bold">
                    Send Email
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Custom Styles */}
        <style>
          {`
            .contact-page {
              --royal-blue: #002147;
              --gold: #FFD700;
            }
            
            .bg-primary {
              background-color: var(--royal-blue) !important;
            }
            
            .text-primary {
              color: var(--royal-blue) !important;
            }
            
            .btn-primary {
              background-color: var(--royal-blue);
              border-color: var(--royal-blue);
            }
            
            .btn-primary:hover {
              background-color: #001a36;
              border-color: #001a36;
            }
            
            .contact-card {
              transition: transform 0.3s ease;
            }
            
            .contact-card:hover {
              transform: translateY(-5px);
            }
            
            .icon-wrapper {
              width: 60px;
              height: 60px;
            }
            
            .social-icon {
              width: 40px;
              height: 40px;
              text-decoration: none;
              transition: transform 0.3s ease;
            }
            
            .social-icon:hover {
              transform: scale(1.1);
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Contact;