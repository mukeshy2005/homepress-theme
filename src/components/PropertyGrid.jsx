import React from "react";
import "./PropertyGrid.css";
import LazyImage from './LazyImage'; // Import LazyImage component

const PropertyGrid = () => {
  const properties = [
    { title: "Townhome", properties: "20 Properties", img: "short1.jpg", gridArea: "townhome" },
    { title: "Houses", properties: "20 Properties", img: "hotelroom1.jpg", gridArea: "houses" },
    { title: "Studio", properties: "12 Properties", img: "modern-office-space-interior.jpg", gridArea: "studio" },
    { title: "Apartments", properties: "19 Properties", img: "white-pillow-bed.jpg", gridArea: "apartments" },
    { title: "Offices", properties: "20 Properties", img: "vertical.jpg", gridArea: "offices" },
  ];

  return (
    <div className="property-section">
         <div className="property-header">
        <h1>Explore Apartment Types</h1>
        <p>
          Explore all the different types of apartments so you can choose the
          best option for you.
        </p>
      </div>
      <div className="property-grid">
        {properties.map((property, index) => (
          <div key={index} className={`property-item ${property.gridArea}`}>
            <LazyImage src={property.img} alt={property.title} /> {/* Use LazyImage component */}
            <div className="property-overlay">
              <h2>{property.title}</h2>
              <p>{property.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
