import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold text-golden" href="/">
          PP Minerals
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-golden active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-golden" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-golden" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mt-3 mt-lg-0 d-flex align-items-center ms-lg-4">
            <span className="me-3 contact-info">
              📞 +91 98290 39880
            </span>
            <span className="contact-info">
              ✉️ info@ppminerals.com
            </span>
          </div>
        </div>
        <style>
          {`
.custom-navbar {
  background-color: #002366; /* Royal Blue */
}

/* Golden text */
.text-golden {
  color: #FFD700 !important; /* Gold */
}

.text-golden:hover {
  color: #ffcc00 !important; /* Lighter gold on hover */
}

/* Contact info styling */
.contact-info {
  color: #FFD700;
  font-weight: 500;
}

/* Mobile Toggler (so it's visible on dark background) */
.navbar-toggler {
  border-color: #FFD700;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='gold' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
`}
</style>
      </div>
    </nav>
  );
};


export default Header;
