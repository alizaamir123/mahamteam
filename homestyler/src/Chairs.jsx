import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Chairs.css";
import Cardchairs from "./Cardchairs.json"; // chairs JSON file
import { FaHeart } from "react-icons/fa";

function Chairs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleAddToWishlist = (item) => {
    console.log("Added to wishlist:", item.title);
  };

  // Filtered & Sorted Data
  const filteredAndSortedChairs = Cardchairs
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "nameAsc") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "nameDesc") {
        return b.title.localeCompare(a.title);
      }
      if (sortOption === "priceLow") {
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, ""))
        );
      }
      if (sortOption === "priceHigh") {
        return (
          parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          parseFloat(a.price.replace(/[^0-9.]/g, ""))
        );
      }
      return 0;
    });

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="chairs hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="chairs container animate-heading">
          <h1 className="chairs fw-bold display-4">Chairs and Recliners</h1>
        </div>
      </section>

      {/* Search and Sort Section */}
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

      {/* Chair Cards Section */}
      <section className="chair-section">
        <div className="container">
          <div className="chair-card-section">
            {filteredAndSortedChairs.map((card, index) => (
              <div className="chair-card" key={index}>
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
                  className="chair-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Name */}
                <div className="chair-product-name">{card.title}</div>

                {/* Price */}
                <div className="chair-product-price">{card.price}</div>

                {/* Card Content */}
                <div className="chair-card-content">
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

export default Chairs;
