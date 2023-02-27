import React from "react";
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
          {location.pathname === "/" ? (
            <></>
          ) : (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {location.pathname === "/about" ? (
            <></>
          ) : (
            <li>
              <Link to="/about">About Us</Link>
            </li>
          )}
          {location.pathname === "/services" ? (
            <></>
          ) : (
            <li>
              <Link to="/services">Our Portfolio</Link>
            </li>
          )}
          {location.pathname === "/u/login" ||
          location.pathname === "/u/register" ? (
            <></>
          ) : (
            <li>
              <Link to="/u/login">Login / Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
