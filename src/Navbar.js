import React from "react";
import { NavLink } from "react-router-dom";
// import Breadcrumbs from "./Breadcrumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import foxlogo from "./foxlogo.png";
import Tooltip from "./Layouts/Tooltip";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand">
        <img src={foxlogo} alt="BadBank Fox Logo" className="foxlogo" />
        <h1>FoxBank</h1>
        <Tooltip text="Home">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Tooltip>
        <Tooltip text="Create Account">
          <NavLink to="/CreateAccount">Create Account</NavLink>
        </Tooltip>
        {/* <Tooltip text="Login">
          <NavLink to="/Login">Login</NavLink>
        </Tooltip> */}
        <Tooltip text="Deposit">
          <NavLink to="/Deposit">Deposit</NavLink>
        </Tooltip>
        <Tooltip text="Withdraw">
          <NavLink to="/Withdraw">Withdraw</NavLink>
        </Tooltip>
        {/* <Tooltip text="Balance">
          <NavLink to="/Balance">Balance</NavLink>
        </Tooltip> */}
        <Tooltip text="All Data">
          <NavLink to="/AllData">All Data</NavLink>
        </Tooltip>
        <Tooltip text="Help">
          <NavLink to="/Help">Help</NavLink>
        </Tooltip>
      </nav>
      {/* <Breadcrumbs /> */}
    </header>
  );
};

export default NavBar;
