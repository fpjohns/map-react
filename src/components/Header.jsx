import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <div className="about_us">
        <span>Cover</span>
        <div className="about">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
