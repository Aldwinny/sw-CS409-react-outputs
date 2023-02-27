import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blackTransparent text-white font-display text-lg p-6 flex flex-wrap flex-row align-center justify-around">
        <div className="tablet:w-1/4 w-full mx-6 mt-3">
          <h1 className="font-silkscreen text-2xl text-salmon my-6">
            PIXEL LEGION。
          </h1>
          <p className="text-gray-400">
            A Talents Company made by passionate artists that started with
            making pixel art and voxel art. As time goes by, we started growing
            and adding more members on our team. Now we are teeming with
            talented people all across the Philippines.
          </p>
        </div>
        <div className="tablet:w-1/4 w-full mx-6 mt-3">
          <h1 className="font-silkscreen text-xl text-mauve my-6">
            Useful links
          </h1>
          <ul className="text-md text-sky-400 link-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Portfolio</Link>
            </li>
            <li>
              <Link to="/u/register">Register</Link>
            </li>
            <li>
              <Link to="/u/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="tablet:w-1/4 w-full mx-6 mt-3 text-gray-400">
          <h1 className="text-sm my-6 text-white">
            A website by Aldwin Dennis L. Reyes.{" "}
            <Link
              className="text-sky-400 underline underline-offset-2 hover:text-sky-200 active:text-sky-800"
              to="https://aldwinny.github.io/"
              target="_blank"
            >
              Check me out!
            </Link>
          </h1>
          <h1 className="text-sm my-2">
            This website is made for an assignment (Assignment 4.2 - Mobile
            Computing)
          </h1>
          <h1 className="text-sm my-2">
            All rights to assets used in this website all belong to their
            respective owners.
          </h1>
          <h1 className="text-sm my-6">
            Copyright &#169; Pixel Legion inc. | Not a real company
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
