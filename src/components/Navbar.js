import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navigation">
      {/* Logo cliquable redirigeant vers la page d'accueil */}
      <NavLink to="/">
        <img src={logo} alt="logo Kasa" />
      </NavLink>
      <ul>
        {/* Lien de navigation pour la page d'accueil */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        {/* Lien de navigation pour la page "A Propos" */}
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;