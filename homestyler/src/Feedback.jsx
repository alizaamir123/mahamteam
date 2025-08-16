import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Feedback.css";

function Feedback() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="feedback hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="feedback container animate-heading">
          <h1 className="feedback fw-bold display-4">Feedback</h1>
        </div>
      </section>

      {/* Feedback Section */}
      <div className="feedback-section-wrapper">
        <div className="container py-5">
          <div className="row align-items-center">
            
            {/* Feedback Form */}
            <div className="col-md-6">
              <h2 className="heading mb-4">We Value Your Feedback</h2>
              <p className="text-muted">
                Please fill out the form below and let us know how we can improve.
              </p>

              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control custom-input" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control custom-input" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control custom-input" rows="4" placeholder="Write your feedback..."></textarea>
                </div>

                <button type="submit" className="send-btn">
                  Send Feedback <i className="bi bi-send"></i>
                </button>
              </form>
            </div>

            {/* Feedback Image */}
            <div className="col-md-6">
              <div className="img-container">
                <img
                  src="https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/122451/full/Casa-Padrino-Luxus-Sofa-Elfenbein-250-x-120-x-H--76-cm-Gebogenes-Wohnzimmer-Sofa-Hotel-Sofa-Wohnzimmer-Moebel-Hotel-Moebel-Luxus-Moebel-Luxus-Einrichtung-Wohnzimmer-Einrichtung-122451_4.JPG"
                  alt="Feedback"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Feedback;
