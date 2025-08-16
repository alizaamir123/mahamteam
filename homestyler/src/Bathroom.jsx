import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Bathroom.css";
import Carddata from "./CarddataBathroom.json";

function Bathroom() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="bathroom hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="bathroom container animate-heading">
          <h1 className="bathroom fw-bold display-4">Bathroom</h1>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bathroom-room-section">
        <div className="container">
          <div className="bathroom-room-card-section">
            {Carddata.map((card, index) => (
              <div className="bathroom-room-card" key={index}>
                
                {/* Image */}
                <div
                  className="bathroom-room-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Name with animation */}
                <div className="bathroom-room-product-name">{card.title}</div>

                {/* Card Content */}
                <div className="bathroom-room-card-content">
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

export default Bathroom;
