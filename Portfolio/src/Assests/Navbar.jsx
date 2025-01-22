import React from 'react'
import { useState } from "react";
import { Link } from 'react-scroll';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
      
  return (
    <div>
         <nav className="flex flex-wrap items-center justify-between  md:px-20 px-3 py-4 bg-[#112331] ">
      {/* Logo */}
      <div className="text-white font-bold text-2xl">
        <a href="#">Arman Ali</a>
      </div>

      {/* Hamburger Menu */}
      <button
        className="block text-white md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Menu Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center md:space-x-6 w-full md:w-auto`}
      >
        <li className="mx-2 my-2 md:my-0">
            <Link
              to="Home"
              smooth={true}
              duration={700}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="about"
              smooth={true}
              duration={700}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="Services"
              smooth={true}
              duration={700}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="Skills"
              smooth={true}
              duration={700}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="Projects"
              smooth={true}
              duration={700}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="contact"
              smooth={true}
              duration={700}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
      </ul>
    </nav>

    </div>
  )
}

export default Navbar
