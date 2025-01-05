import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <nav className="shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo flex items-center gap-3">
          <img src="/dog.svg" alt="Logo" className="w-7" />
          <h1 className="font-bold text-xl">DOGGIPEDIA</h1>
        </div>

        <button
          className="lg:hidden block text-white focus:outline-none ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <ul
          className={`lg:flex lg:space-x-6 flex-col lg:flex-row absolute lg:static top-14 lg:top-auto w-full lg:w-auto ${
            isMenuOpen ? "bg-[#1D6885] text-white block" : "hidden"
          }`}
        >
          <li className="text-center lg:text-left py-2 lg:py-0">
            <Link
              to="/"
              className={`block px-4 ${
                currentPath === "/"
                  ? "text-white border-b-2 border-gray-100"
                  : "hover:text-gray-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="text-center lg:text-left py-2 lg:py-0">
            <Link
              to="/product"
              className={`block px-4 ${
                currentPath === "/product"
                  ? "text-white border-b-2 border-gray-100"
                  : "hover:text-gray-200"
              }`}
            >
              Product
            </Link>
          </li>
          <li className="text-center lg:text-left py-2 lg:py-0">
            <Link
              to="/about"
              className={`block px-4 ${
                currentPath === "/about"
                  ? "text-white border-b-2 border-gray-100"
                  : "hover:text-gray-200"
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
