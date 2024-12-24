import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import 'font-awesome/css/font-awesome.min.css';

const images = [
  { src: 'sildeshowimg1.jpg', title: 'Studio on Grand Avenue', details: '281 Beds - 287 Baths - 1150 sq ft', price: '$675,000' },
  { src: 'home-inside.jpg', title: 'Luxury Villa in LA', details: '150 Beds - 180 Baths - 2100 sq ft', price: '$1,200,000' },
  { src: 'hkim2.jpg', title: 'Penthouse in New York', details: '3 Beds - 3 Baths - 2500 sq ft', price: '$3,000,000' }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Trigger animation when the current index changes
  useEffect(() => {
    setAnimate(true); // Add animation
    const timer = setTimeout(() => setAnimate(false), 800); // Remove animation after duration matches CSS animation (0.8s)

    return () => clearTimeout(timer); // Cleanup timer
  }, [currentIndex]);

  const { src, title, details, price } = images[currentIndex];

  return (
    <div className="slideshow">
      <img src={src} alt={title} className="slideshow-image" />
      <div className={`slideshow-overlay ${animate ? 'fade-in' : ''}`}>
        <h1>{title}</h1>
        <p>{details}</p>
        <h2>{price}</h2>
        <button className="view-details">View Details</button>
      </div>
      <div className="slide-counter">
        <span>{currentIndex + 1}</span>
        <div className="line"></div>
        <span>{images.length}</span>
      </div>
    </div>
  );
};

export default Slideshow;
