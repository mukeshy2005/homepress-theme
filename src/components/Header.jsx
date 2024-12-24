import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation'; // Import Material UI Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="logo.png" alt="Homepress Logo" />
        <span>homepress</span>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/listing">Listing</Link>
        <Link to="/property">Property</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/idx-pages">IDX Pages</Link>
      </nav>
      <div className="header-actions">
        <button>Add Listing</button>
        <span className="icon"><AccessAlarmIcon /></span>  {/* Material UI Icon 1 */}
        <span className="icon"><FavoriteBorderIcon /></span>  {/* Material UI Icon 2 */}
        <span className="icon"><AccountCircleIcon /></span>  {/* Keep your existing icon or change it later */}
      </div>
    </header>
  );
};

export default Header;
