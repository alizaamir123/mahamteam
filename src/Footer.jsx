import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light">
      <div className="overlay"></div>

      <div className="container position-relative pt-4 pb-4">
        <div className="row gy-4">
          {/* Logo and Address */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h4 className="mb-4 d-flex align-items-center justify-content-center justify-content-md-start orange-text fs-1">
              Home Styler
            </h4>
            <p className="fw-bold mb-2">
              Small details, big difference — discover our décor accessories.
            </p>
            <p>
              5609 E Sprague Ave, Spokane Valley,
              <br /> WA 99212, USA
            </p>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/aboutus" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contactus" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/sitemap" className="text-light text-decoration-none">
                  Site Map
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-light text-decoration-none">
                  Feedback Form
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h6 className="fw-bold mb-2 text-footer">+(084) 456-0789</h6>
            <p>
              <a
                href="mailto:support@example.com"
                className="text-light fw-bold text-decoration-none"
              >
                Support@example.com
              </a>
            </p>

            {/* Social Links */}
            <div className="mt-3">
              <a href="#!" className="text-light me-3">
                Facebook
              </a>
              <a href="#!" className="text-light me-3">
                Instagram
              </a>
              <a href="#!" className="text-light me-3">
                YouTube
              </a>
              <a href="#!" className="text-light">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          <p className="mb-0">
            © Copyright 2025{" "}
            <span className="text-footer">Home Styler</span>. All rights
            reserved.
          </p>
        </div>

        {/* Watermark */}
        <div className="footer-watermark pt-4 text-center">styler's</div>
      </div>
    </footer>
  );
};

export default Footer;
