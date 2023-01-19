import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Bookstore CMS</h1>
      <div>
        <NavLink to="/">Books</NavLink>
        <NavLink to="Categories">Categories</NavLink>
      </div>
    </div>
  );
}
