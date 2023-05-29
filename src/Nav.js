import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav({dogs}) {
  const dog = dogs.map(dog => (
    <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
    ))

  return (
    <nav className="Nav">
      <NavLink to="/dogs" end>
        Dog List
      </NavLink>
      {dog}
    </nav>
  );
}

export default Nav;