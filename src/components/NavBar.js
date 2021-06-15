import React from "react";
import { NavLink } from "react-router-dom";
import { Session } from '../requests'

function NavBar({ currentUser, onSignOut }) {

  function handleSignOut(){
    Session.destroy().then(() => {
      onSignOut()
    })
  }
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
      {currentUser ? (
        <React.Fragment>
          <span style={{ marginRight: "20px" }} >Welcome, {currentUser.first_name}</span>
          <button style={{ marginRight: "20px" }}  onClick={handleSignOut}>Sign Out</button>
        </React.Fragment>
      ) : (
        <>
          <NavLink style={{ marginRight: "20px" }} to="/sign_in">
            Sign In
          </NavLink>

          <NavLink style={{ marginRight: "20px" }} to="/sign_up">
            Sign Up
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
