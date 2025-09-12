import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Carousel, 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge,
  Modal
} from "react-bootstrap";
import { 
  FaHardHat, 
  FaIndustry, 
  FaTruck, 
  FaAward, 
  FaGlobe, 
  FaUsers, 
  FaClock,
  FaQuoteLeft,
  FaChevronRight,
  FaChevronLeft
} from "react-icons/fa";

import Layout from "../Layout/Layout";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Mineral Extraction",
      description: "Efficient extraction processes with modern technology.",
      fullDescription: "Our mineral extraction services utilize state-of-the-art technology and sustainable practices to maximize yield while minimizing environmental impact. We specialize in both surface and underground mining operations with a focus on safety and efficiency.",
      icon: <FaHardHat size={40} className="text-warning" />
    },
    {
      id: 2,
      title: "Processing",
      description: "Advanced processing to deliver high-quality minerals.",
      fullDescription: "Our processing facilities employ cutting-edge technology to refine raw minerals into premium-grade products. With quality control at every stage, we ensure that our minerals meet the highest industry standards and client specifications.",
      icon: <FaIndustry size={40} className="text-warning" />
    },
    {
      id: 3,
      title: "Supply",
      description: "Reliable distribution ensuring timely delivery worldwide.",
      fullDescription: "Our global logistics network ensures timely delivery of minerals to clients worldwide. We maintain strategic partnerships with transportation providers to offer flexible and reliable supply chain solutions tailored to your needs.",
      icon: <FaTruck size={40} className="text-warning" />
    }
  ];

  const achievements = [
    { value: "13+", label: "Years Experience", icon: <FaAward className="text-warning" /> },
    { value: "500+", label: "Projects Completed", icon: <FaHardHat className="text-warning" /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaUsers className="text-warning" /> }
  ];

  const founders = [
    {
      name: "Mr. Ajit Kumar Parakh",
      role: "Founder & CEO",
      image: "/images/ajit.jpeg",
      description: "The visionary behind PP Minerals, started the firm with a mission to deliver sustainable and reliable mining solutions. His dedication to innovation and client satisfaction has been the driving force behind our success."
    },
    {
      name: "Ritesh Purohit",
      role: "Co-Founder",
      image: "/images/ritesh.jpeg",
      description: "Brings extensive industry expertise and strategic vision to the company, ensuring operational excellence across all mining projects."
    },
    {
      name: "Prithivi Raj",
      role: "Co-Founder",
      image: "/images/prithvi.jpg",
      description: "Leads our technical operations with deep knowledge of mining processes and commitment to implementing innovative technologies."
    },
    {
      name: "Rytham Jain",
      role: "Director & Company Secretary",
      image: "/images/rytham.jpeg",
      description: "She is a key person in PP Minerals. A company secretary with qualifications in Law and business management. She also serves as director in Nanda Fincap and Partner in Nanda capital holding."
    }
  ];

  const galleryImages = [
    "/images/pp1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
  ];

  // Custom carousel navigation
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  useEffect(() => {
    // Add scroll animation effect
    const scrollElements = document.querySelectorAll(".scroll-animate");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, { threshold: 0.1 });
    
    scrollElements.forEach(el => observer.observe(el));
    
    return () => {
      scrollElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout>
    <div className="home-page">
      {/* Hero Carousel */}
      <div className="position-relative">
        <Carousel 
          ref={carouselRef}
          fade 
          controls={false} 
          indicators={false} 
          interval={5000}
          onSelect={handleSelect}
          className="hero-carousel"
        >
          <Carousel.Item>
            <div 
              className="hero-slide d-flex align-items-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.8), rgba(0, 33, 71, 0.8)),url(/images/pp1.jpeg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
              }}
            >
              <Container>
                <Row className="justify-content-center text-center">
                  <Col lg={8}>
                    <h1 className="display-3 fw-bold text-white mb-4 scroll-animate">
                      PP Minerals – Reliable Mining Solutions
                    </h1>
                    <p className="lead text-light mb-4 scroll-animate">
                      Empowering industries with trusted mineral resources through innovation and sustainability
                    </p>
                    <Button 
                      variant="warning" 
                      size="lg" 
                      className="scroll-animate px-4 py-2 fw-bold"
                      onClick={() => handleShowModal({
                        title: "Our Services",
                        content: "Discover how our comprehensive mining solutions can benefit your operations. From extraction to delivery, we provide end-to-end services tailored to your needs."
                      })}
                    >
                      Explore
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div 
              className="hero-slide d-flex align-items-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.8), rgba(0, 33, 71, 0.8)), url(https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
              }}
            >
              <Container>
                <Row className="justify-content-center text-center">
                  <Col lg={8}>
                    <h1 className="display-3 fw-bold text-white mb-4">Sustainable Mining Practices</h1>
                    <p className="lead text-light mb-4">
                      Committed to environmental stewardship and community development
                    </p>
                    <Button variant="outline-light" size="lg" className="px-4 py-2 fw-bold" href="/services">
                      Our Services
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div 
              className="hero-slide d-flex align-items-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.8), rgba(0, 33, 71, 0.8)),url(https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)
`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
              }}
            >
              <Container>
                <Row className="justify-content-center text-center">
                  <Col lg={8}>
                    <h1 className="display-3 fw-bold text-white mb-4">Global Mineral Supply</h1>
                    <p className="lead text-light mb-4">
                      Delivering quality minerals to industries worldwide with reliability and precision
                    </p>
                    <Button variant="warning" size="lg" className="px-4 py-2 fw-bold" href="#Team">
                      Meet Our Team
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Custom Carousel Controls */}
        <div className="carousel-controls position-absolute w-100">
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <Button 
                variant="outline-light" 
                className="carousel-control-prev rounded-circle d-flex align-items-center justify-content-center"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </Button>
              <div className="carousel-indicators-custom">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => carouselRef.current && carouselRef.current.to(index)}
                  />
                ))}
              </div>
              <Button 
                variant="outline-light" 
                className="carousel-control-next rounded-circle d-flex align-items-center justify-content-center"
                onClick={handleNext}
              >
                <FaChevronRight />
              </Button>
            </div>
          </Container>
        </div>
      </div>

      {/* About Preview */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <Badge bg="warning" className="mb-3 px-3 py-2">ABOUT US</Badge>
              <h2 className="fw-bold mb-4 text-primary">Leading the Mining Industry Since 2011</h2>
              <p className="lead text-muted mb-4">
                At PP Minerals, we specialize in reliable and sustainable mineral solutions, 
                serving industries with excellence and trust for over a decade. Our commitment to 
                innovation, safety, and environmental responsibility sets us apart.
              </p>
              <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
                {achievements.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow-sm text-center achievement-item">
                    <div className="mb-3 achievement-icon">
                      {item.icon}
                    </div>
                    <h3 className="text-warning fw-bold">{item.value}</h3>
                    <p className="mb-0 text-dark">{item.label}</p>
                  </div>
                ))}
              </div>
              
              {/* Laterite Information */}
              <Row className="text-start mt-5 align-items-center">
                <Col md={6} className="mb-4">
                  <img 
                    src="/images/6a.jpeg"
                    alt="Laterite" 
                    className="img-fluid rounded shadow"
                  />
                </Col>
                <Col md={6}>
                  <Badge bg="primary" className="mb-3 px-3 py-2">OUR SPECIALTY</Badge>
                  <h3 className="fw-bold mb-3 text-primary">Laterite Mining & Applications</h3>
                  <p className="text-muted">
                    Laterite is a soil and rock type rich in iron and aluminum, formed in hot and wet tropical areas. 
                    It is an essential source of iron ore and is widely used in various industries, particularly in cement production.
                  </p>
                  <h5 className="fw-bold mt-4 text-primary">Properties in Cement Production:</h5>
                  <ul className="text-muted">
                    <li>High iron content provides the necessary ferrous component for cement</li>
                    <li>Acts as a fluxing agent, reducing the clinkering temperature</li>
                    <li>Contributes to the strength and durability of the final product</li>
                    <li>Cost-effective alternative to traditional iron sources</li>
                  </ul>
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="warning" className="mb-3 px-3 py-2">OUR SERVICES</Badge>
              <h2 className="fw-bold mb-3">Comprehensive Mining Solutions</h2>
              <p className="text-light">
                We offer end-to-end mining services tailored to meet the specific needs of our clients
              </p>
            </Col>
          </Row>
          
          <Row>
            {services.map(service => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <Card className="h-100 border-0 shadow service-card">
                  <Card.Body className="text-center p-5">
                    <div className="icon-wrapper mb-4">
                      {service.icon}
                    </div>
                    <Card.Title className="h4 text-primary">{service.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {service.description}
                    </Card.Text>
                    <Button 
                      variant="outline-primary" 
                      onClick={() => handleShowModal({
                        title: service.title,
                        content: service.fullDescription
                      })}
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="warning" className="mb-3 px-3 py-2">WHY CHOOSE US</Badge>
              <h2 className="fw-bold mb-3">Excellence in Every Operation</h2>
              <p className="text-light">
                Our commitment to quality, safety, and sustainability makes us the preferred choice
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={6} className="mb-4">
              <div className="d-flex">
                <div className="me-4">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                    <span className="text-dark fw-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4>13+ Years of Experience</h4>
                  <p className="text-light">
                    Over a decade of industry knowledge and expertise ensure we deliver the best solutions.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="d-flex">
                <div className="me-4">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                    <span className="text-dark fw-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4>Trusted & Reliable Partnerships</h4>
                  <p className="text-light">
                    We build long-term relationships based on trust and mutual success.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="d-flex">
                <div className="me-4">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                    <span className="text-dark fw-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4>Quality Assurance Guaranteed</h4>
                  <p className="text-light">
                    Rigorous quality control processes ensure the highest standards are met.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="d-flex">
                <div className="me-4">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                    <span className="text-dark fw-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4>On-time Delivery, Every Time</h4>
                  <p className="text-light">
                    Our efficient logistics ensure your materials arrive when you need them.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Gallery Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2">OUR OPERATIONS</Badge>
              <h2 className="fw-bold mb-3 text-primary">Mining Excellence in Action</h2>
              <p className="text-muted">
                A glimpse into our mining operations and facilities
              </p>
            </Col>
          </Row>
          
          <Row className="mb-4">
            {galleryImages.slice(0, 3).map((img, index) => (
              <Col md={4} className="mb-4" key={index}>
                <div className="gallery-item overflow-hidden rounded shadow">
                  <img 
                    src={img} 
                    alt={`Mining operation ${index + 1}`} 
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{transition: 'transform 0.3s ease'}}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            {galleryImages.slice(3, 6).map((img, index) => (
              <Col md={4} className="mb-4" key={index}>
                <div className="gallery-item overflow-hidden rounded shadow">
                  <img 
                    src={img} 
                    alt={`Mining operation ${index + 4}`} 
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{transition: 'transform 0.3s ease'}}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Founders Section */}
      <section className="py-5 bg-white" id="Team">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2">OUR LEADERSHIP</Badge>
              <h2 className="fw-bold mb-3 text-primary">Meet Our Founders</h2>
              <p className="text-muted">
                The visionary leaders behind PP Minerals' success
              </p>
            </Col>
          </Row>
          
          <Row>
            {founders.map((founder, index) => (
              <Col lg={6} className="mb-5" key={index}>
                <div className="d-flex flex-column flex-md-row">
                  <div className="me-md-4 mb-3 mb-md-0">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="rounded shadow"
                      style={{width: '150px', height: '150px', objectFit: 'cover'}}
                    />
                  </div>
                  <div>
                    <h4 className="text-primary fw-bold">{founder.name}</h4>
                    <h6 className="text-warning mb-3">{founder.role}</h6>
                    <p className="text-muted">{founder.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Location Map Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2">OUR LOCATION</Badge>
              <h2 className="fw-bold mb-3 text-primary">Visit Our Operations</h2>
              <p className="text-muted">
                Located in the mineral-rich region of Pinchhala, Madhya Pradesh
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col lg={12}>
              <div className="rounded overflow-hidden shadow">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25136.248462972537!2d75.51413032938031!3d24.18443271538338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396452a2139ae675%3A0xbac0ae7069462b69!2sPinchhala%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1757650612969!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PP Minerals Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-5 bg-warning">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3 text-dark">Looking for trusted mining solutions?</h2>
              <p className="lead mb-4 text-dark">Get in touch with us today and let's collaborate on your next project.</p>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <Button variant="primary" size="lg" className="px-4 py-2 fw-bold" href="/contact">
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <p>{modalContent.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Close
          </Button>
    <Button variant="primary" onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add custom CSS for animations */}
      <style>
        {`
          :root {
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
          
          .btn-warning {
            background-color: var(--gold);
            border-color: var(--gold);
            color: var(--royal-blue);
          }
          
          .btn-warning:hover {
            background-color: #e6c200;
            border-color: #e6c200;
            color: var(--royal-blue);
          }
          
          .scroll-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .scroll-animate.animated {
            opacity: 1;
            transform: translateY(0);
          }
          
          .hero-slide {
            transition: transform 0.5s ease;
          }
          
          .service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
          }
          
          .icon-wrapper {
            background: #f8f9fa;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            transition: transform 0.3s ease;
          }
          
          .service-card:hover .icon-wrapper {
            transform: scale(1.1);
          }
          
          .achievement-item {
            min-width: 150px;
            transition: transform 0.3s ease;
          }
          
          .achievement-item:hover {
            transform: translateY(-10px);
          }
          
          .achievement-icon {
            transition: transform 0.3s ease;
          }
          
          .achievement-item:hover .achievement-icon {
            transform: scale(1.2);
          }
          
          .carousel-controls {
            bottom: 30px;
            z-index: 10;
          }
          
          .carousel-control-prev,
          .carousel-control-next {
            width: 50px;
            height: 50px;
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }
          
          .carousel-control-prev:hover,
          .carousel-control-next:hover {
            opacity: 1;
          }
          
          .carousel-indicators-custom {
            display: flex;
            gap: 10px;
          }
          
          .carousel-indicators-custom .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: none;
            background-color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
          }
          
          .carousel-indicators-custom .indicator.active {
            background-color: var(--gold);
            transform: scale(1.2);
          }
          
          .hero-carousel .carousel-item {
            transition: transform 1.2s ease-in-out;
          }
          
          .gallery-item {
            transition: transform 0.3s ease;
          }
          
          .gallery-item:hover {
            transform: translateY(-5px);
          }

          .gallery-item {
  width: 100%;
  height: 250px; /* Adjust height as you like */
  overflow: hidden;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </div>
    </Layout>
  );
};

export default Home;