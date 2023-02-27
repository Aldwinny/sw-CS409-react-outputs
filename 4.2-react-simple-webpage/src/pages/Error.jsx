import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Pixel Legion | Not found";
  });

  return (
    <div className="bg-blackTransparent py-16 px-5 my-16 text-center">
      <h1 className="text-salmon  text-xl phone:text-7xl phone:mx-14 mb-10">
        404
      </h1>
      <h1 className="header-text mt-2">PIXEL LEGION。</h1>
      <p className="text-lg font-display text-gray-500 phone:text-xl phone:mx-14 mb-14">
        404 - Not Found | This is either an unimplemented page or a non-existent
        page
      </p>
      <div className="flex justify-center items-center">
        <img
          src="https://64.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif"
          alt="Ghost"
          className="h-20"
        />
        <img
          src="https://64.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif"
          alt="Ghost"
          className="h-20"
        />
        <img
          src="https://64.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif"
          alt="Ghost"
          className="h-20"
        />
      </div>
      <p className="text-lg font-display text-gray-300 phone:text-xl phone:mx-14">
        You may be lost but don't worry, you can always go{" "}
        <Link
          to="/"
          className="text-sky-500 hover:text-sky-200 active:text-sky-800"
        >
          Home.
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
