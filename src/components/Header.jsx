import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon from Material UI

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src="white-logo.png" alt="Homepress Logo" />
        <span>homepress</span>
      </div>
      <div className="hamburger-menu" onClick={toggleNav}>
        <MenuIcon />
      </div>
      <nav className={`header-nav ${isNavOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/listing">Listing</Link>
        <Link to="/property">Property</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/idx-pages">IDX Pages</Link>
      </nav>
      <div className="header-actions">
        <button>Add Listing</button>
        <span className="icon"><AccessAlarmIcon /></span>
        <span className="icon"><FavoriteBorderIcon /></span>
        <span className="icon"><AccountCircleIcon /></span>
      </div>
    </header>
  );
};

export default Header;