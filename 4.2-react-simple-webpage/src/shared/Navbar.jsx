import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  return (
    <header id="top">
      <nav>
        <ul className="flex flex-row p-4">
          <li className="logo mr-auto ml-2">
            <Link to="/">Pixel Legion。</Link>
          </li>
          <li>
            {location.pathname === "/about" || (
              <Link to="/about">About us</Link>
            )}
          </li>
          <li>
            {location.pathname === "/services" || (
              <Link to="/services">Our Portfolio</Link>
            )}
          </li>
          <li>
            {location.pathname === "/u/login" ||
              location.pathname === "/u/register" || (
                <Link to="/u/login">Login</Link>
              )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
