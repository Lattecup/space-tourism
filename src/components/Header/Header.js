import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import MenuMobile from "../MenuMobile/MenuMobile";

function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen(isMenuOpen ? false : true);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo"/>
      </Link>
      <MenuMobile isOpen={isMenuOpen} onClose={toggleMenu} onOpen={toggleMenu} />
      <span className="header__line"></span>
      {props.children}
    </header>
  );
};

export default Header;