import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

function Navbar() {
  return (
    <Header>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <NavLink to="/" className={({ isActive }) => "navbar__link" + (isActive ? "_active" : "")}><span className="navbar__span-accent">00</span>home</NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/destination" className={({ isActive }) => "navbar__link" + (isActive ? "_active" : "")}><span className="navbar__span-accent">01</span>destination</NavLink>
          </li>
          <li className="navbar__menu-item">
           <NavLink to="/crew" className={({ isActive }) => "navbar__link" + (isActive ? "_active" : "")}><span className="navbar__span-accent">02</span>crew</NavLink>          
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/technology" className={({ isActive }) => "navbar__link" + (isActive ? "_active" : "")}><span className="navbar__span-accent">03</span>technology</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Navbar;