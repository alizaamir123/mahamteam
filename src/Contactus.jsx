import Nav from "./Nav";
import Footer from "./Footer";
import "./Contactus.css";

function Contactus() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="contact hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="contact container animate-heading">
          <h1 className="contact fw-bold display-4">Contact Us</h1>
        </div>
      </section>

      {/* Form + Heading in one div */}
      <section className="contact-section-gradient">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5 animated-main-heading">
              Turning Houses Into <span>Homes!</span> One Detail{" "}
              <span>At A Time~</span>
            </h1>
          </div>

          <div className="row g-4">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="mb-4">
                <h6 className="fw-bold">Address:</h6>
                <p className="mb-1">
                  5609 E Sprague Ave, Spokane Valley, WA 99212, USA
                </p>
              </div>
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/family-room-1-1588080207.jpg"
                alt="Contact"
                className="img-fluid contact-img"
              />
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-lg-6">
              <h6 className="fw-bold">Phone:</h6>
              <p className="mb-1" style={{ color: "#c29b68" }}>
                +(084) 456-0789
              </p>
              <br />
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Full Name *</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone *</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control form-field"
                    placeholder="Email Address *"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Subject *</label>
                  <input
                    type="text"
                    className="form-control form-field"
                    placeholder="I Want To"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Your Message *
                  </label>
                  <textarea
                    className="form-control form-field"
                    rows="4"
                    placeholder="Your Message.."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn send-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Map */}
      <section className="map-section">
        <iframe
          title="Google Map Dark Theme"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.472504542699!2d-117.28832932392672!3d47.657929571193215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e21042f1a482b%3A0xd2a77fbef3f0734b!2s5609%20E%20Sprague%20Ave%2C%20Spokane%20Valley%2C%20WA%2099212%2C%20USA!5e0!3m2!1sen!2sus!4v1691844233495!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </section>

      <Footer />
    </>
  );
}

export default Contactus;
