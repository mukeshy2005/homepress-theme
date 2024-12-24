import React from "react";
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

  return (
    <div className="client-section">
      <h1 className="section-title">Our Clients Says</h1>
      <div className="testimonials-container">
        <button className="nav-button">&#8249;</button>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="image-container">
              <img src={testimonial.img} alt={testimonial.name} />
            </div>
            <h2>{testimonial.name}</h2>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
        <button className="nav-button">&#8250;</button>
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
