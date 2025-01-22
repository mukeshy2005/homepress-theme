import React, { useState } from "react";
import "./ClientSection.css";

const ClientSection = () => {
  const testimonials = [
    {
      name: "Maria E. Flynn",
      title: "Manager at ColdHawk Inc.",
      feedback:
        "It’s ideal for business clients who simply prefer to pay for transactions only as incurred. They help managing your time so you’ll get more done.",
      img: "client1.jpg",
    },
    {
      name: "Dalmar Johnson",
      title: "Founder of WebFlex Inc.",
      feedback:
        "We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job Training program and other employer.",
      img: "client2.jpg",
    },
  ];

  const logos = [
    "brand-1.png",
    "brand-2.png",
    "brand-3.png",
    "brand-4.png",
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="client-section">
      <h1 className="section-title">Our Clients Say</h1>
      <div className="testimonials-container">
        <button className="nav-button" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="testimonial">
          <div className="image-container">
            <img
              src={testimonials[currentTestimonial].img}
              alt={testimonials[currentTestimonial].name}
            />
          </div>
          <h2>{testimonials[currentTestimonial].name}</h2>
          <h3>{testimonials[currentTestimonial].title}</h3>
          <p>{testimonials[currentTestimonial].feedback}</p>
        </div>
        <button className="nav-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
