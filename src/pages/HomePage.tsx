import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import ListUser from "./ListUser";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="homeHeader">
        <NavbarComponent />
      </div>
      <div className="homeBody">
        <ListUser />
      </div>
      <div className="homeFooter"></div>
    </div>
  );
};

export default HomePage;
