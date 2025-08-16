import Nav from "./Nav";
import Footer from "./Footer";

function Detail() {
  return (
    <>
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #111;
          color: #fff;
        }
        .main-section {
          background-color: #1a1a1a;
        }
        .left-section {
          animation: fadeInLeft 1s ease-in-out;
        }
        .left-section h1 {
          font-size: 2.8rem;
          margin-bottom: 10px;
          color: #fff;
        }
        .left-section h2 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #ccc;
        }
        .left-section h2 span {
          color: #f9b233;
        }
        .features {
          list-style: none;
          margin-bottom: 30px;
          padding-left: 0;
        }
        .features li {
          margin: 12px 0;
          font-size: 1rem;
          position: relative;
          padding-left: 25px;
        }
        .features li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #f9b233;
        }
        .left-section p {
          font-size: 1rem;
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .custom-btn {
          display: inline-block;
          padding: 12px 30px;
          background-color: #f9b233;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          border-radius: 25px;
          transition: all 0.3s ease-in-out;
        }
        .custom-btn:hover {
          background-color: #e5a600;
          transform: scale(1.05);
        }
        .right-section {
          animation: fadeInRight 1.2s ease-in-out;
        }
        .right-section img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
          .bedroom.hero-section {
  height: 70vh;
  background: url("/images/heroc.jpg") center/cover no-repeat;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bedroom.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.bedroom.hero-section .container {
  position: relative;
  z-index: 1;
}

        }
      `}</style>

      <Nav />
        <section className="bedroom hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="container animate-heading">
        </div>
      </section>


      <section className="main-section container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-md-12 left-section mb-4 mb-lg-0">
            <h1>Luxury Marble Bathroom</h1>
            <h2>
              A <span>Sophisticated Retreat</span> with Golden Elegance
            </h2>

            <ul className="features">
              <li>
                <strong>Polished Marble Walls</strong> – Premium Quality Finish
              </li>
              <li>
                <strong>Golden Fittings</strong> – Luxurious & Stylish
              </li>
              <li>
                <strong>Ambient Lighting</strong> – Warm & Relaxing Glow
              </li>
            </ul>

            <p>
              An elegant marble bathroom with golden fittings, soft ambient
              lighting, and a serene, spa-like atmosphere. The polished surfaces
              and warm tones create a sophisticated retreat for relaxation.
            </p>

            <a href="#" className="btn custom-btn">
              Explore Bathroom Collection
            </a>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-md-12 right-section text-center">
            <img
              src="/images/bt1.jpg"
              alt="Luxury Marble Bathroom"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Detail;
