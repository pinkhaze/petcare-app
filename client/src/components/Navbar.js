import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink to="/" className="navbar-item mx-3 is-size-4" >
            Home
          </NavLink>
          <NavLink to="/pets-overview" className="navbar-item mx-3 is-size-4" >
            Pets Overview
          </NavLink>
          <NavLink to="/dashboard" className="navbar-item mx-3 is-size-4" >
            Dashboard
          </NavLink>
          <NavLink to="/help-page" className="navbar-item mx-3 is-size-4" >
            Help
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
