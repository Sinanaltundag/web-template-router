import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="dark">
      <h1><Link to="/" className="logo-link"><span className="purple ">Clarusway </span> Web Design</Link></h1>
      <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'purple' : "nav__links")} >
                  HOME
                </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'purple' : "nav__links")}>
      ABOUT
                </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? 'purple' : "nav__links")}>
      SERVICES
                </NavLink>
        
      
      </nav>
    </header>
    
    
  );
};

export default Navbar;
