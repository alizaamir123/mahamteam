import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Bedroom.css";
import Carddata from "./CarddataBedroom.json";

function Bedroom() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="bedroom hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="container animate-heading">
          <h1 className="fw-bold display-4">Bed Room</h1>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bedroom-room-section">
        <div className="container">
          <div className="bedroom-room-card-section">
            {Carddata.map((card, index) => (
              <div className="bedroom-room-card" key={index}>
                
                {/* Image */}
                <div
                  className="bedroom-room-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Name with animation */}
                <div className="bedroom-room-product-name">{card.title}</div>

                {/* Card Content */}
                <div className="bedroom-room-card-content">
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

export default Bedroom;
