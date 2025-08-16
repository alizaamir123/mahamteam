import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Wall.css";
import Cardwall from "./Cardwall.json"; // ✅ JSON data for Wall Lights
import { FaHeart } from "react-icons/fa";

function Wall() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleAddToWishlist = (item) => {
    console.log("Added to wishlist:", item.title);
  };

  // Filter + Sort
  const filteredAndSortedWallLights = Cardwall
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "nameAsc") return a.title.localeCompare(b.title);
      if (sortOption === "nameDesc") return b.title.localeCompare(a.title);
      if (sortOption === "priceLow")
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, ""))
        );
      if (sortOption === "priceHigh")
        return (
          parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          parseFloat(a.price.replace(/[^0-9.]/g, ""))
        );
      return 0;
    });

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="wall hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="wall container animate-heading">
          <h1 className="wall fw-bold display-4">Wall Lights</h1>
        </div>
      </section>

      {/* Search + Sort Section */}
      <div className="search-sort-filter-container py-4">
        <div className="container">
          <h4 className="section-title">SEARCH AND SORTING PRODUCTS</h4>

          <div className="form-group mb-3">
            <label className="form-label sort-label">Sort by:</label>
            <select
              className="form-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Select</option>
              <option value="nameAsc">Name (A–Z)</option>
              <option value="nameDesc">Name (Z–A)</option>
              <option value="priceLow">Price (Low to High)</option>
              <option value="priceHigh">Price (High to Low)</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Product Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Wall Lights Cards */}
      <section className="wall-section">
        <div className="container">
          <div className="wall-card-section">
            {filteredAndSortedWallLights.map((card, index) => (
              <div className="wall-card" key={index}>
                {/* Heart Icon */}
                <div
                  className="heart-icon"
                  onClick={() => handleAddToWishlist(card)}
                  title="Add to wishlist"
                >
                  <FaHeart />
                </div>

                {/* Image */}
                <div
                  className="wall-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Title */}
                <div className="wall-product-name">{card.title}</div>

                {/* Price */}
                <div className="wall-product-price">{card.price}</div>

                {/* Description */}
                <div className="wall-card-content">
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

export default Wall;
