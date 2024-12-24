import React from "react";
import "./SearchSection.css";

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="dropdown">
        <button className="dropdown-button">Buy</button>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Apartments</button>
        <span className="dropdown-arrow">▼</span>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
      <button className="search-button">
        <span className="search-icon">🔍</span>
        SEARCH
      </button>
      <div className="advanced-search">
        Advanced search <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

export default SearchSection;
