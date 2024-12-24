import React from 'react';
import './PropertySection.css';

const NewListings = () => {
  const listings = [
    { image: 'sildeshowimg1.jpg', title: 'Awesome Family Home', details: '🛏 1 🛁 1 📐 1200 sq ft', price: '$450,000' },
    { image: 'Contemporary-Studio.jpg', title: 'Contemporary Studio', details: '🛏 1 🛁 1 📐 1300 sq ft', price: '$250,000' },
    { image: 'Studio-Bay-View.jpg', title: 'Studio Bay View', details: '🛏 1 🛁 1 📐 4400 sq ft', price: '$180,000' },
    { image: 'Modern-Apartment.jpg', title: 'Modern Apartment', details: '🛏 2 🛁 1 📐 2000 sq ft', price: '$500,000' },
    { image: 'Cozy-Cottage.jpg', title: 'Cozy Cottage', details: '🛏 3 🛁 2 📐 1500 sq ft', price: '$320,000' },
    { image: 'Luxury-Villa.jpg', title: 'Luxury Villa', details: '🛏 4 🛁 3 📐 5000 sq ft', price: '$1,200,000' },
    { image: 'Urban-Condo.jpg', title: 'Urban Condo', details: '🛏 2 🛁 2 📐 1400 sq ft', price: '$400,000' },
    { image: 'Mountain-Retreat.jpg', title: 'Mountain Retreat', details: '🛏 3 🛁 2 📐 2000 sq ft', price: '$600,000' },
    { image: 'Seaside-Mansion.jpg', title: 'Seaside Mansion', details: '🛏 5 🛁 4 📐 7000 sq ft', price: '$2,500,000' },
  ];

  return (
    <div className="new-listings">
      <header className="nl-header">
        <h1>Explore Our Listings</h1>
        <p>Discover a variety of properties tailored to your needs</p>
      </header>
      <div className="listings-grid">
        {listings.map((listing, index) => (
          <div className="listing" key={index}>
            <div className="listing-image">
              <img src={listing.image} alt={listing.title} />
            </div>
            <div className="listing-details">
              <h2>{listing.title}</h2>
              <p>{listing.details}</p>
              <p className="price">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <button>View More</button>
      </div>
    </div>
  );
};

export default NewListings;
