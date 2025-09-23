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
      name: "Ajit Kumar Parakh",
      role: "Founder",
      image: "/images/ajit.png",
      description: "The visionary behind PP Minerals, started the firm with a mission to deliver sustainable and reliable mining solutions. His dedication to innovation and client satisfaction has been the driving force behind our success."
    },
    {
      name: "Ritesh Purohit",
      role: "Co-Founder",
      image: "/images/rites.jpeg",
      description: "Brings extensive industry expertise and strategic vision to the company, ensuring operational excellence across all mining projects."
    },
    {
      name: "Prathviraj Chauhan",
      role: "Co-Founder",
      image: "/images/prithvi.png ",
      description: "Leads our technical operations with deep knowledge of mining processes and commitment to implementing innovative technologies."
    },
    {
      name: "Rhythm Jain",
      role: "Co-Founder",
      image: "/images/rytham.png",
      description: "Rhythm Jain is a seasoned professional with expertise in strategic decision-making and customer acquisition. As a qualified Company Secretary and Lawyer, she leverages her legal acumen to drive business growth. With a passion for investing and venture capital, she serves as a Director and Partner in prominent finance and venture capital firms in India. Her entrepreneurial spirit has paved the way for her to become one of the pioneer women in Mining Industry."
    }
  ];

  const galleryImages = [
    "/images/pp1.jpeg",
    "/images/6a.jpeg",
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
          interval={3000}
          onSelect={handleSelect}
          className="hero-carousel"
        >
          <Carousel.Item>
            <div 
              className="hero-slide d-flex align-items-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.4), rgba(0, 33, 71, 0.4)),url(/images/pp1.jpeg)`,
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
                backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.4), rgba(0, 33, 71, 0.4)), url(images/4.jpeg)`,
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
                backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.5), rgba(0, 33, 71, 0.5)),url(/images/6a.jpeg)
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
      <section
  className="py-5"
  style={{ backgroundColor: "#f9f9f9" }}
>
  <Container>
    <Row className="justify-content-center">
      <Col lg={10} className="text-center">
        {/* Section Heading */}
        <Badge
          style={{
            backgroundColor: "transparent",
            border: "2px solid #BFA14A",
            color: "#ffffffff",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
          className="mb-3 px-3 py-2 rounded-pill"
        >
          ABOUT PP MINERALS 
        </Badge>
        <h2
          className="fw-bold mb-4"
          style={{ color: "#0D1B4C" }}
        >
          Leading the Mining Industry Since 2011
        </h2>
       <p className="lead mb-4" style={{ color: "#555", lineHeight: "1.7" }}>
  Industry presence{" "}
  <span style={{ color: "#BFA14A", fontWeight: 600 }}>
    since 2011
  </span>{" "}
  in laterite and other minerals,{" "}
  <span style={{ color: "#BFA14A", fontWeight: 600 }}>PP Minerals</span> has
  become a trusted partner to leading{" "}
  <span style={{ color: "#0D1B4C", fontWeight: 600 }}>
    cement brands across India
  </span>
  . Our premium laterite, known for its{" "}
  <span style={{ color: "#BFA14A", fontWeight: 600 }}>
    exceptional Iron and Aluminium content
  </span>
  , helps manufacturers reduce dependency on costly raw materials like red
  ochre and blue dust—delivering{" "}
  <span style={{ color: "#0D1B4C", fontWeight: 600 }}>
    significant cost savings
  </span>{" "}
  in production. Guided by{" "}
  <span style={{ color: "#BFA14A", fontWeight: 600 }}>
    innovation, safety
  </span>{" "}
  and{" "}
  <span style={{ color: "#0D1B4C", fontWeight: 600 }}>
    environmental responsibility
  </span>
  , we continue to provide{" "}
  <span style={{ color: "#BFA14A", fontWeight: 600 }}>
    reliable and sustainable mineral solutions
  </span>{" "}
  with excellence and trust.
</p>

       

        {/* Laterite Section */}
        <Row className="text-start mt-5 align-items-center">
          <Col md={6} className="mb-4">
            <img
              src="/images/6a.jpeg"
              alt="Laterite"
              className="img-fluid rounded shadow"
              style={{
                border: "4px solid #BFA14A",
                borderRadius: "12px",
              }}
            />
          </Col>
          <Col md={6}>
            <Badge
              style={{
                backgroundColor: "#0D1B4C",
                color: "#fff",
              }}
              className="mb-3 px-3 py-2 rounded-pill"
            >
              OUR SPECIALTY
            </Badge>
            <h3
              className="fw-bold mb-3"
              style={{ color: "#0D1B4C" }}
            >
              Laterite Mining & Applications
            </h3>
            <p className="mb-4" style={{ color: "#555", lineHeight: "1.7" }}>
              Laterite is a soil and rock type rich in iron and aluminum,
              formed in hot and wet tropical areas. It is an essential
              source of iron ore and is widely used in various industries,
              particularly in cement production.
            </p>
            <h5
              className="fw-bold mb-3"
              style={{ color: "#BFA14A" }}
            >
              Properties in Cement Production:
            </h5>
            <ul style={{ color: "#444", lineHeight: "1.6" }}>
              <li>High iron content provides the necessary ferrous component</li>
              <li>Acts as a fluxing agent, reducing the clinkering temperature</li>
              <li>Contributes to strength and durability of the final product</li>
              <li>Cost-effective alternative to traditional iron sources</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  </section>



      {/* Image Gallery Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">OUR OPERATIONS</Badge>
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
    <section className="py-5 bg-light" id="Team">
  <Container>
    {/* Section Heading */}
    <Row className="justify-content-center mb-5">
      <Col lg={8} className="text-center">
        <Badge
          style={{ backgroundColor: "#BFA14A", color: "#fff" }}
          className="mb-3 px-3 py-2 fs-6 shadow-sm text-uppercase rounded-pill"
        >
          Our Leadership
        </Badge>
        <h2 className="fw-bold mb-3 display-6" style={{ color: "#0D1B4C" }}>
          Meet Our Founders
        </h2>
        <p className="text-muted fs-5">
          The visionary leaders behind{" "}
          <span style={{ color: "#BFA14A", fontWeight: 600 }}>PP Minerals</span>
          ' success
        </p>
      </Col>
    </Row>

    {/* Founders List */}
    <Row className="g-4 g-md-5">
      {founders.map((founder, index) => (
        <Col xs={12} md={6} key={index}>
          <div
            className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-4 bg-white shadow-sm rounded-4 h-100 founder-card"
            style={{ minHeight: "100%" }}
          >
            {/* Founder Image */}
            <div className="me-md-4 mb-3 mb-md-0 text-center text-md-start">
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-circle shadow-sm founder-img"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "4px solid #BFA14A",
                }}
              />
            </div>

            {/* Founder Details */}
            <div className="text-center text-md-start">
              <h4 className="fw-bold mb-1" style={{ color: "#0D1B4C" }}>
                {founder.name}
              </h4>
              <h6 className="fw-semibold mb-3" style={{ color: "#BFA14A" }}>
                {founder.role}
              </h6>
              <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                {founder.description}
              </p>
            </div>
          </div>
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
              <Badge style={{
            backgroundColor: "transparent",
            border: "2px solid #BFA14A",
            color: "#ffffffff",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
           className="mb-3 px-3 py-2 rounded-pill">WHY CHOOSE US</Badge>
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
                  <h4>Decades of Experience in Mining</h4>
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

      {/* Location Map Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">OUR LOCATION</Badge>
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

           .founder-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-top: 3px solid #0D1B4C;
    }
    .founder-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 24px rgba(13, 27, 76, 0.15);
    }
    .founder-img {
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .founder-card:hover .founder-img {
      transform: scale(1.05);
      border-color: #0D1B4C;
    }
        `}
      </style>
    </div>
    </Layout>
  );
};

export default Home;