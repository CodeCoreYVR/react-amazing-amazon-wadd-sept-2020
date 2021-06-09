import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav
      style={{
        padding: "10px",
        display: "flex",
      }}
    >
      <NavLink style={{ marginRight: "20px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/products">
        Products
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/products/new">
        New Product
      </NavLink>
    </nav>
  );
}

export default NavBar;
