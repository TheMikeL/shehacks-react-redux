import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/pokemon">Find Pokemon</Link>
      <Link to="/forms">Forms!</Link>
    </div>
  );
};

export default Header;