import React from "react";
import { Link } from "react-router-dom";
import { textColor } from "./colors";
import logo from "../assets/logo-grey.png";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <div>
        <img src={logo} alt="Logo" style={{ height: "95px" }} />
      </div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ marginLeft: "4rem" }}>
          <Link to="/" style={{ color: textColor }}>
            Home
          </Link>
        </li>
        <li style={{ marginLeft: "4rem" }}>
          <Link to="/about" style={{ color: textColor }}>
            About Us
          </Link>
        </li>
        <li style={{ marginLeft: "4rem" }}>
          <Link to="/portfolio" style={{ color: textColor }}>
            Portfolio
          </Link>
        </li>
        <li style={{ marginLeft: "4rem" }}>
          <Link to="/news" style={{ color: textColor }}>
            News
          </Link>
        </li>
        <li style={{ marginLeft: "4rem" }}>
          <Link to="/contact" style={{ color: textColor }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
