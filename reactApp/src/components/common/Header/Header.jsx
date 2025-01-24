import React from "react";
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
<header className="Header">
<NavLink to="/" end >Home Page</NavLink>
<NavLink to="/counter">Counter</NavLink>
</header>
  );
};

export default Header;


/*function Header() {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
}*/