import React from "react";
import "../style/header.css";
import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <header id="header">
      <h1>{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
