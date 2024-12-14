import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo header" />
      <nav className="menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
        >
          Home
        </NavLink>
        <NavLink
          to="/planos"
          className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
        >
          Planos de Assinatura
        </NavLink>
        <NavLink
          to="/duvidas"
          className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
        >
          Dúvidas?
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
