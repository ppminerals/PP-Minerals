import React from "react";
import { Container, Row, Col, Card, Button, Badge, Accordion } from "react-bootstrap";
import { 
  FaHardHat, 
  FaIndustry, 
  FaTruck, 
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import Layout from "../Layout/Layout";

const Services = () => {
  const services = [
    {
      title: "Mineral Extraction",
      description: "Efficient extraction processes using modern technology and sustainable methods to ensure high-quality mineral output.",
      icon: <FaHardHat size={30} className="text-warning" />,
      details: "Our extraction services utilize advanced technology to maximize yield while minimizing environmental impact. We follow strict safety protocols and sustainable practices in all our mining operations."
    },
    {
      title: "Processing",
      description: "Advanced processing facilities to refine and deliver premium-grade minerals, maintaining industry standards.",
      icon: <FaIndustry size={30} className="text-warning" />,
      details: "Our state-of-the-art processing plants ensure that raw minerals are refined to meet the highest quality standards. We employ cutting-edge technology and rigorous quality control at every stage."
    },
    {
      title: "Supply & Distribution",
      description: "Reliable logistics network ensuring timely delivery of minerals in India.",
      icon: <FaTruck size={30} className="text-warning" />,
      details: "With a robust logistics network and strategic partnerships, we guarantee timely delivery of minerals to clients worldwide. Our supply chain solutions are tailored to meet specific client requirements."
    },
  ];

  const lateriteApplications = [
    {
      title: "Cement Production",
      description: "Laterite is a cost-effective source of iron oxide in cement manufacturing, acting as a fluxing agent that reduces clinkering temperature.",
      benefits: ["Reduces production costs", "Improves cement strength", "Environmentally sustainable option"]
    },
    {
      title: "Construction Material",
      description: "Laterite blocks are used as building material in tropical regions due to their durability and natural insulation properties.",
      benefits: ["Excellent thermal insulation", "Natural resistance to weathering", "Cost-effective construction"]
    },
    {
      title: "Road Construction",
      description: "Laterite is used as a sub-base material in road construction, particularly in rural areas where it provides a stable foundation.",
      benefits: ["High bearing capacity", "Good drainage properties", "Locally available material"]
    },
    {
      title: "Industrial Applications",
      description: "Laterite finds applications in various industries including ceramics, pigments, and as a source of nickel in some metallurgical processes.",
      benefits: ["Versatile industrial uses", "Rich in iron and aluminum", "Sustainable raw material"]
    }
  ];

  const lateriteProperties = [
    { property: "Iron Content", value: "(50-60%)", importance: "Essential for cement production" },
    { property: "Aluminum Content", value: "Moderate to High", importance: "Contributes to pozzolanic properties" },
    { property: "Nickel Content", value: "Varies by deposit", importance: "Valuable for metallurgical applications" },
    { property: "Porosity", value: "High", importance: "Good for construction materials" },
    { property: "Color", value: "Reddish-brown", importance: "Natural pigment for various applications" }
  ];

  return (
    <Layout>
      <div className="services-page">
        {/* Hero Section */}
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="justify-content-center text-center py-5">
              <Col lg={10}>
                <Badge bg="warning" className="mb-3 px-3 py-2">OUR SERVICES</Badge>
                <h1 className="display-4 fw-bold mb-4">Comprehensive Mining Solutions</h1>
                <p className="lead">
                  Specializing in Laterite mining and applications, we provide end-to-end mineral solutions 
                  with a focus on sustainability and innovation.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Overview */}
        <section className="py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold text-primary mb-4">Our Core Services</h2>
                <p className="text-muted">
                  From extraction to delivery, we offer comprehensive mining solutions tailored to meet 
                  the specific needs of our clients across various industries.
                </p>
              </Col>
            </Row>
            
            <Row>
              {services.map((service, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <Card className="h-100 border-0 shadow text-center p-4 service-card">
                    <div className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                      {service.icon}
                    </div>
                    <Card.Body>
                      <Card.Title className="text-primary fw-bold mb-3">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="text-muted mb-4">
                        {service.description}
                      </Card.Text>
                      <Card.Text className="text-muted small">
                        {service.details}
                      </Card.Text>
                    </Card.Body>
                    <Button variant="outline-primary" href="/contact">
                      Learn More <FaArrowRight className="ms-2" />
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Laterite Specialization Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <img 
  src="/images/laterite.jpeg" 
  alt="Laterite Mining" 
  className="img-fluid rounded shadow"
  style={{ height: "600px", objectFit: "cover",width: "600px" }}
/>

              </Col>
              <Col lg={6}>
                <Badge bg="primary" className="mb-3 px-3 py-2">OUR SPECIALIZATION</Badge>
                <h2 className="fw-bold text-primary mb-4">Laterite Expertise</h2>
                <p className="text-muted mb-4">
                  PP Minerals has established itself as a leader in Laterite mining and applications, 
                  particularly serving the cement industry with high-quality iron-rich laterite.
                </p>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">What is Laterite?</h5>
                  <p className="text-muted">
                    Laterite is a soil and rock type rich in iron and aluminum, formed in hot and wet 
                    tropical areas through prolonged weathering. It develops through intensive and long-lasting 
                    weathering of the underlying parent rock.
                  </p>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>High iron content ideal for cement production</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Cost-effective alternative to traditional iron sources</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Environmentally sustainable mining practices</span>
                </div>
                
              </Col>
            </Row>
          </Container>
        </section>

        {/* Laterite Properties Table */}
        <section className="py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={10} className="text-center">
                <h2 className="fw-bold text-primary mb-4">Laterite Properties & Characteristics</h2>
                <p className="text-muted">
                  Our laterite deposits exhibit exceptional qualities that make them ideal for various industrial applications
                </p>
              </Col>
            </Row>
            
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th>Property</th>
                        <th>Typical Value</th>
                        <th>Industrial Importance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lateriteProperties.map((item, index) => (
                        <tr key={index}>
                          <td className="fw-bold text-primary">{item.property}</td>
                          <td>{item.value}</td>
                          <td>{item.importance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Laterite Applications */}
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Badge bg="warning" className="mb-3 px-3 py-2">APPLICATIONS</Badge>
                <h2 className="fw-bold mb-4">Laterite Industrial Applications</h2>
                <p className="text-light">
                  Discover the diverse applications of laterite across various industries
                </p>
              </Col>
            </Row>
            
            <Row>
              {lateriteApplications.map((app, index) => (
                <Col lg={6} className="mb-4" key={index}>
                  <Card className="h-100 border-0 bg-dark text-white">
                    <Card.Body className="p-4">
                      <Card.Title className="fw-bold mb-3">{app.title}</Card.Title>
                      <Card.Text className="mb-4">
                        {app.description}
                      </Card.Text>
                      <div>
                        <h6 className="text-warning mb-3">Key Benefits:</h6>
                        <ul className="ps-3">
                          {app.benefits.map((benefit, i) => (
                            <li key={i} className="mb-2">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Cement Industry Focus */}
        <section className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="order-2 order-lg-1">
                <Badge bg="warning" className="mb-3 px-3 py-2">CEMENT INDUSTRY</Badge>
                <h2 className="fw-bold text-primary mb-4">Laterite in Cement Production</h2>
                <p className="text-muted mb-4">
                  Laterite serves as an excellent source of iron oxide in cement manufacturing, 
                  offering both technical and economic advantages over traditional iron sources.
                </p>
                
                <h5 className="fw-bold text-primary mb-3">Technical Advantages:</h5>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Acts as a fluxing agent, reducing clinkering temperature</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Contributes to the formation of cementitious compounds</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Enhances final product strength and durability</span>
                </div>
                
                <h5 className="fw-bold text-primary mt-4 mb-3">Economic Benefits:</h5>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Cost-effective alternative to purchased iron oxide</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Reduces overall production costs</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="text-warning me-3" />
                  <span>Locally available, reducing transportation costs</span>
                </div>
              </Col>
              
              <Col lg={6} className="order-1 order-lg-2 mb-5 mb-lg-0">
                <img 
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cement Production" 
                  className="img-fluid rounded shadow"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-muted">
                  Find answers to common questions about our services and laterite applications
                </p>
              </Col>
            </Row>
            
            <Row className="justify-content-center">
              <Col lg={10}>
                <Accordion defaultActiveKey="0" className="shadow-sm">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Why is laterite suitable for cement production?</Accordion.Header>
                    <Accordion.Body>
                      Laterite is rich in iron oxide, which is an essential component in cement manufacturing. 
                      It acts as a fluxing agent, helping to lower the clinkering temperature and contributing 
                      to the formation of cementitious compounds that enhance the strength and durability of the final product.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What makes PP Minerals' laterite different?</Accordion.Header>
                    <Accordion.Body>
                      Our laterite deposits have consistently high iron content (typically 40-50%) and uniform composition, 
                      making them ideal for industrial applications. We employ rigorous quality control measures and sustainable 
                      mining practices to ensure our product meets the highest standards.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Do you provide technical support for laterite usage?</Accordion.Header>
                    <Accordion.Body>
                      Yes, we offer comprehensive technical support to help our clients optimize their processes when using our laterite. 
                      Our team of experts can provide guidance on blending ratios, processing parameters, and quality control measures 
                      to ensure optimal results.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>What are the environmental benefits of using laterite?</Accordion.Header>
                    <Accordion.Body>
                      Laterite mining has a lower environmental impact compared to traditional mining operations. It requires less energy 
                      for processing, and our sustainable mining practices ensure minimal ecological disruption. Additionally, using locally 
                      available laterite reduces transportation-related carbon emissions.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        {/* <section className="py-5 bg-warning">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h2 className="fw-bold mb-4 text-dark">Ready to Enhance Your Operations with Quality Laterite?</h2>
                <p className="lead mb-4 text-dark">
                  Contact our experts today to discuss how our laterite can benefit your specific application
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <Button variant="primary" size="lg" className="px-4 py-2 fw-bold">
                    Request a Quote
                  </Button>
                  <Button variant="outline-dark" size="lg" className="px-4 py-2 fw-bold">
                    Technical Consultation
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* Custom Styles */}
        <style>
          {`
            .services-page {
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
            
            .service-card {
              transition: transform 0.3s ease;
            }
            
            .service-card:hover {
              transform: translateY(-5px);
            }
            
            .icon-wrapper {
              width: 70px;
              height: 70px;
            }
            
            .accordion-button:not(.collapsed) {
              background-color: var(--royal-blue);
              color: white;
            }
            
            .accordion-button:focus {
              box-shadow: none;
              border-color: rgba(0,0,0,.125);
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Services;