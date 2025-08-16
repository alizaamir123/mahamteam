import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Cardstorage from "./Cardstorage.json"; // ✅ JSON file for storage
import { FaHeart } from "react-icons/fa";
import "./Storage.css";

function Storage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleAddToWishlist = (item) => {
    console.log("Added to wishlist:", item.title);
  };

  const filteredAndSortedStorage = Cardstorage
    .filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "nameAsc") return a.title.localeCompare(b.title);
      if (sortOption === "nameDesc") return b.title.localeCompare(a.title);
      if (sortOption === "priceLow")
        return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
      if (sortOption === "priceHigh")
        return parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""));
      return 0;
    });

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="storage hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="storage container animate-heading">
          <h1 className="storage fw-bold display-4">Storage</h1>
        </div>
      </section>

      {/* Search + Sort */}
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

      {/* Storage Cards */}
      <section className="storage-section">
        <div className="container">
          <div className="storage-card-section">
            {filteredAndSortedStorage.map((card, index) => (
              <div className="storage-card" key={index}>
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
                  className="storage-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Title */}
                <div className="storage-product-name">{card.title}</div>

                {/* Price */}
                <div className="storage-product-price">{card.price}</div>

                {/* Description */}
                <div className="storage-card-content">
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

export default Storage;
