import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assets/user.png';

export default function Navbar() {
  return (
    <div className="header">
      <div className="nav-text-container">
        <NavLink className="title" to="/">Bookstore CMS</NavLink>
        <div className="navbar">
          <NavLink to="/">Books</NavLink>
          <NavLink to="Categories">Categories</NavLink>
        </div>
      </div>
      <div className="nav-icon-container">
        <div className="icon-bg">
          <img src={icon} alt="profile" />
        </div>
      </div>
    </div>
  );
}
