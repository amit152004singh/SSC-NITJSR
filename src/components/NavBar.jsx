import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NavBar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-10 block w-full max-w-full px-2  text-blue-gray-900 bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4"
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="mr-2 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
        >
          <img
            src="../../public/logo-removebg.png"
            className="object-scale-down h-32 w-full max-w-xl"
          ></img>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900 hover:text-blue-500 hover:underline">
                <Link to="/blogs" className="flex items-center">
                  Blogs
                </Link>
              </li>
              <li className="block p-1 font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900 hover:text-blue-500 hover:underline">
                <Link to="/about" className="flex items-center">
                  About
                </Link>
              </li>
              <li className="block p-1 font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900 hover:text-blue-500 hover:underline">
                <Link to="/contact" className="flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
