import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Living.css";
import Carddata from "./Carddata.json";

function Living() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="living hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="living container animate-heading">
          <h1 className="living fw-bold display-4">Living Room</h1>
        </div>
      </section>

      {/* Cards Section */}
      <section className="living-room-section">
        <div className="container">
          <div className="living-room-card-section">
            {Carddata.map((card, index) => (
              <div className="living-room-card" key={index}>
                
                {/* Image */}
                <div
                  className="living-room-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Name with animation */}
                <div className="living-room-product-name">{card.title}</div>

                {/* Card Content */}
                <div className="living-room-card-content">
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Living;
