import React from "react";
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
<header className="Header">
<img src="https://cdn.iconscout.com/icon/free/png-256/free-apple-notes-icon-download-in-svg-png-gif-file-formats--logo-note-apps-pack-user-interface-icons-493153.png?f=webp&w=256" className="logo"/>
<NavLink className="link" to="/" end >Home Page</NavLink>
<NavLink className="link" to="/counter">Counter</NavLink>
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