import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuMobile.css';

function MenuMobile(props) {

  return (
    <>
      <button type="button" className="menu-mobile__open-button" aria-label="Открыть" onClick={props.onOpen}/>
      <div className={`menu-mobile ${props.isOpen ? "menu-mobile_opened" : ""}`}>
        <nav className="menu-mobile__navigation">
          <div className="menu-mobile__links">
            <NavLink to="/" className={({ isActive }) => "menu-mobile__link" + (isActive ? "_active" : "")}><span className="menu-mobile__link-span-accent">00</span>Home</NavLink>
            <NavLink to="/destination" className={({ isActive }) => "menu-mobile__link" + (isActive ? "_active" : "")}><span className="menu-mobile__link-span-accent">01</span>Destination</NavLink>
            <NavLink to="/crew" className={({ isActive }) => "menu-mobile__link" + (isActive ? "_active" : "")}><span className="menu-mobile__link-span-accent">02</span>Crew</NavLink>
            <NavLink to="/technology" className={({ isActive }) => "menu-mobile__link" + (isActive ? "_active" : "")}><span className="menu-mobile__link-span-accent">03</span>Technology</NavLink>
          </div>
        </nav>
        <button type="button" className="menu-mobile__close-button" aria-label="Закрыть" onClick={props.onClose}/>
      </div>
    </>
  );
};

export default MenuMobile;