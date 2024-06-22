import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 text-blue-gray-900 bg-white border-b shadow-md bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between h-20 lg:h-28 px-4 lg:px-0">
        <Link to="/" className="flex items-center py-1.5">
          <img
            src="/logo-removebg.png"
            alt="Logo"
            className="h-16 lg:h-[150px] w-auto" 
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute top-20 left-0 w-full bg-white lg:static lg:block lg:w-auto`}
          >
            <ul className="flex flex-col gap-4 p-4 lg:flex-row lg:p-0 lg:gap-6">
              <li className="font-sans text-xl font-normal text-blue-gray-900 hover:text-blue-500 hover:underline">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="font-sans text-xl font-normal text-blue-gray-900 hover:text-blue-500 hover:underline">
                <Link to="/about">About</Link>
              </li>
              <li className="font-sans text-xl font-normal text-blue-gray-900 hover:text-blue-500 hover:underline">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
