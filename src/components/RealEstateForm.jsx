import React from 'react';
import './RealEstateForm.css';
import LazyImage from './LazyImage'; // Import LazyImage component

const RealEstateForm = () => {
  return (
    <div className="real-estate-form">
      <div className="form-section">
        <h1>Real Estate Inquiry Form</h1>
        <form>
          <label>
            Inquiry Type
            <select>
              <option>Select value</option>
            </select>
          </label>
          <div className="personal-info">
            <label>
              Personal Info
              <select>
                <option>Select</option>
              </select>
            </label>
            <input type="text" placeholder="Your Name" />
          </div>
          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            How to address you
            <select>
              <option>Select</option>
            </select>
          </label>
          <div className="address-details">
            <input type="text" placeholder="Max price" />
            <input type="text" placeholder="Minimum size (Sq Ft)" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="why-choose-us">
        <h1>Why Choose Us</h1>
        <p>It’s our job to get you the best price for your home and make sure that you get the best possible deal on the property</p>
        <div className="reasons">
          <div className="reason">
            <div className="icon">🏢</div>
            <h2>Wide Range of Properties</h2>
            <p>With a robust selection of popular properties on hand, as well as leading properties from real estate experts.</p>
          </div>
          <div className="reason">
            <div className="icon">💰</div>
            <h2>Financing Made Easy</h2>
            <p>Our stress-free finance department can find financial solutions to save you money.</p>
          </div>
          <div className="reason">
            <div className="icon">👥</div>
            <h2>Trusted by Thousands</h2>
            <p>10 new offers every day, 350 offers on site, trusted by a community of thousands of users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateForm;
