import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Cardfloor from "./Cardfloor.json"; // ✅ JSON file for floor lamps
import { FaHeart } from "react-icons/fa";
import "./Floor.css";

function Floor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleAddToWishlist = (item) => {
    console.log("Added to wishlist:", item.title);
  };

  // ✅ Filter + Sort
  const filteredAndSortedFloor = Cardfloor
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
      <section className="floor hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="floor container animate-heading">
          <h1 className="floor fw-bold display-4">Floor Lamps</h1>
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

      {/* ✅ Floor Lamps Cards */}
      <section className="floor-section">
        <div className="container">
          <div className="floor-card-section">
            {filteredAndSortedFloor.map((card, index) => (
              <div className="floor-card" key={index}>
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
                  className="floor-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Title */}
                <div className="floor-product-name">{card.title}</div>

                {/* Price */}
                <div className="floor-product-price">{card.price}</div>

                {/* Description */}
                <div className="floor-card-content">
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

export default Floor;
