import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, background: "#333", padding: "10px 20px", color: "#fff", zIndex: 9999, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0 }}>Person Information</h1>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "inline-block", marginRight: "10px" }}>
            <Link to="/addPerson" style={{ textDecoration: "none", color: "#fff" }}>Add Person</Link>
          </li>
          <li style={{ display: "inline-block" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
