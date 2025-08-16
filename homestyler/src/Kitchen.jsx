import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Kitchen.css";
import Carddata from "./CarddataKitchen.json";

function Kitchen() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="kitchen hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="kitchen container animate-heading">
          <h1 className="kitchen fw-bold display-4">Kitchen</h1>
        </div>
      </section>

      {/* Cards Section */}
      <section className="kitchen-room-section">
        <div className="container">
          <div className="kitchen-room-card-section">
            {Carddata.map((card, index) => (
              <div className="kitchen-room-card" key={index}>
                
                {/* Image */}
                <div
                  className="kitchen-room-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Name with animation */}
                <div className="kitchen-room-product-name">{card.title}</div>

                {/* Card Content */}
                <div className="kitchen-room-card-content">
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

export default Kitchen;
