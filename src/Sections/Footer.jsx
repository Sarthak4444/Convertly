import React from "react";
import Logo from "../../Public/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#121421] text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="font-bold text-3xl flex items-center gap-2">
              <img className="w-12" src={Logo} alt="Logo" />
              <p>Convertly</p>
            </div>
            <p className="text-sm mt-2 text-gray-400">
              Your reliable currency converter solution.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-center md:text-left">
            <Link
              to="/"
              className="hover:text-[#91ec59] transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#91ec59] transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#91ec59] transition duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 md:mt-0 flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#91ec59] transition duration-300"
            >
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#91ec59] transition duration-300"
            >
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#91ec59] transition duration-300"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Convertly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
