import React, { useState } from "react";
import "./AgentSection.css";

const agentsData = [
  {
    name: "Nick Swift",
    title: "Chief Technology Officer",
    mobile: "(865) 234-5679",
    office: "(875) 822-3356",
    fax: "(874) 823-3312",
    img: "male.jpg",
  },
  {
    name: "Kathleen Myers",
    title: "Chief Operating Officer",
    mobile: "(866) 123-4567",
    office: "(879) 711-2290",
    fax: "(879) 712-2291",
    img: "female.jpg",
  },
  {
    name: "John Smith",
    title: "Real Estate Agent",
    mobile: "(875) 555-1234",
    office: "(875) 555-5678",
    fax: "(875) 555-9012",
    img: "female2.jpg",
  },
  {
    name: "Alice Brown",
    title: "Senior Agent",
    mobile: "(877) 123-1234",
    office: "(877) 321-4321",
    fax: "(877) 555-6789",
    img: "female3.jpg",
  },
];

const AgentSection = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const handleNext = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex + 2) % agentsData.length);
  };

  const handlePrev = () => {
    setCurrentStartIndex((prevIndex) =>
      prevIndex === 0 ? agentsData.length - 2 : prevIndex - 2
    );
  };

  const visibleAgents = agentsData.slice(
    currentStartIndex,
    currentStartIndex + 2
  );

  return (
    <div className="agent-section">
      <div className="agent-header">
        <h1>Meet Our Agents</h1>
        <p>Meet our team of professionals who can help you find your dream home.</p>
      </div>
      <div className="agent-details-container">
        <button className="nav-button" onClick={handlePrev}>
          &#8249;
        </button>
        {visibleAgents.map((agent, index) => (
          <div key={index} className="agent-details">
            <div className="agent-image-container">
              <img src={agent.img} alt={agent.name} className="agent-image" />
            </div>
            <div className="agent-info">
              <h2>{agent.name}</h2>
              <h3>{agent.title}</h3>
              <p>
                <strong>Mobile:</strong> {agent.mobile} <br />
                <strong>Office:</strong> {agent.office} <br />
                <strong>Fax:</strong> {agent.fax}
              </p>
              <div className="social-icons">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-google"></i>
                <i className="fa fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
        <button className="nav-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default AgentSection;
