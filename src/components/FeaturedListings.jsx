import React, { useState } from 'react';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const listings = [
    {
      image: 'sildeshowimg1.jpg',
      title: 'Awesome Family Home',
      details: '🛏 1 🛁 1 📐 1200 sq ft',
      price: '$450,000',
      buttons: ['BUY', 'RENT'],
    },
    {
      image: 'Contemporary-Studio.jpg',
      title: 'Contemporary Studio',
      details: '🛏 1 🛁 1 📐 1300 sq ft',
      price: '$250,000',
      buttons: ['BUY', 'RENT'],
    },
    {
      image: 'Studio-Bay-View.jpg',
      title: 'Studio Bay View',
      details: '🛏 1 🛁 1 📐 4400 sq ft',
      price: '$180,000',
      buttons: ['BUY'],
    },
    {
      image: 'Modern-Apartment.jpg',
      title: 'Modern Apartment',
      details: '🛏 2 🛁 1 📐 2000 sq ft',
      price: '$500,000',
      buttons: ['BUY', 'RENT'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 3) % listings.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + listings.length) % listings.length
    );
  };

  return (
    <div className="featured-listings">
      <header className="fl-header">
        <h1>Discover Our Featured Listings</h1>
        <p>These featured listings contain exclusive real estate opportunities within the city</p>
      </header>
      <div className="listings-slider">
        <button className="nav-arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="listings-container">
        {listings
  .slice(currentIndex, currentIndex + 3)
  .map((listing, index) => (
    <div className="listing" key={index}>
      <div className="listing-image">
        <img src={listing.image} alt={listing.title} />
        <div className="listing-buttons">
          {listing.buttons.map((button, idx) => (
            <button key={idx} className={button.toLowerCase()}>
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="listing-details">
        <div className="details-text">
          <h2>{listing.title}</h2>
          <p>{listing.details}</p>
        </div>
        <p className="price">{listing.price}</p>
      </div>
    </div>
  ))}

        </div>
        <button className="nav-arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default FeaturedListings;
