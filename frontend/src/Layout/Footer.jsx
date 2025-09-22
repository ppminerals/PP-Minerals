import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";


const Footer = () => {
  return (
    <footer 
      className="text-center text-lg-start mt-auto text-white" 
      style={{ backgroundColor: "#0A1D37" }} 
    >
      
      <div className="container p-4">
        <div className="row">

          {/* Column 1 - About */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 style={{ color: "#FFD700" }} className="fw-bold text-uppercase mb-3">
              About
                    <img src='/images/logo.jpeg' alt='PP Minerals Logo' style={{height: '35px', margin: '35px'}} />

            </h5>
            <p className="small">
              PP Minerals is dedicated to providing high-quality mineral products 
              with a commitment to excellence and sustainability.
            </p>

            {/* LinkedIn Links */}
            <div className="d-flex flex-column align-items-start mt-3">
              <a 
                href="https://www.linkedin.com/in/rhythm-jain-3ab629246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-decoration-none mb-2 d-flex align-items-center"
              >
                <i className="bi bi-linkedin me-2" style={{ color: "#0A66C2", fontSize: "1.2rem" }}></i>
                Rhythm Parakh
              </a>
              
              <a 
                href="https://www.linkedin.com/in/pp-minerals-5670a6386/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-decoration-none d-flex align-items-center"
              >
                <i className="bi bi-linkedin me-2" style={{ color: "#0A66C2", fontSize: "1.2rem" }}></i>
                PP Minerals
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 style={{ color: "#FFD700" }} className="fw-bold text-uppercase mb-3">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 style={{ color: "#FFD700" }} className="fw-bold text-uppercase mb-3">
              Contact Info
            </h5>
            <p className="mb-1"><strong>Phone:</strong> +91 98290 39880</p>
            <p className="mb-1"><strong>Email:</strong> info@ppminerals.org.in</p>
            <p className="mb-1">
              <strong>Website:</strong>{" "}
              <a href="https://www.ppminerals.org.in" className="text-warning text-decoration-none">
                www.ppminerals.org.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div 
        className="text-center p-3" 
        style={{ backgroundColor: "#001022", color: "#FFD700" }}
      >
        © {new Date().getFullYear()} <strong>PP Minerals</strong> | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
