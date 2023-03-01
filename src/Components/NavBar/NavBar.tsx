import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="post-new-link" to="/postNew">
        Add a Link
      </Link>
      <Link className="about-link" to="/about">
        About
      </Link>
    </div>
  );
}
