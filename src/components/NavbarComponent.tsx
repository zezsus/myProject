import React from "react";
import "../assets/styles/components/NavbarComponent.scss";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  return (
    <div className="navbarComponent">
      <div className="navHeader">
        <NavLink to="/">
          <h2>WebDemo</h2>
        </NavLink>
      </div>
      <div className="navBody">
        <input type="text" placeholder="Search" />
        <button className="btn-search">
          <IoSearch title="Search" size={25} />
        </button>
      </div>
      <div className="navFooter"></div>
    </div>
  );
};

export default NavbarComponent;
