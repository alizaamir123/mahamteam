import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Tables.css";
import Cardtables from "./CarddataTables.json"; // ✅ JSON data for tables
import { FaHeart } from "react-icons/fa";

function Tables() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleAddToWishlist = (item) => {
    console.log("Added to wishlist:", item.title);
  };

  // ✅ Filtered & Sorted Data
  const filteredAndSortedTables = Cardtables
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "nameAsc") return a.title.localeCompare(b.title);
      if (sortOption === "nameDesc") return b.title.localeCompare(a.title);
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
      <section className="tables hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="tables container animate-heading">
          <h1 className="tables fw-bold display-4">Tables</h1>
        </div>
      </section>

      {/* Search and Sort Section */}
      <div className="search-sort-filter-container py-4">
        <div className="container">
          <h4 className="section-title">SEARCH AND SORTING PRODUCTS</h4>

          {/* Sort */}
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

          {/* Search */}
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

      {/* Table Cards Section */}
      <section className="table-section">
        <div className="container">
          <div className="table-card-section">
            {filteredAndSortedTables.map((card, index) => (
              <div className="table-card" key={index}>
                
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
                  className="table-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Product Name */}
                <div className="table-product-name">{card.title}</div>

                {/* Price */}
                <div className="table-product-price">{card.price}</div>

                {/* Description */}
                <div className="table-card-content">
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

export default Tables;
