import React, { useState } from "react";
import Logo from "../../Public/Logo.png";
import { Link } from "react-router-dom";
import Login from "./../Modals/Login";
import SignUp from "./../Modals/SignUp";  // Import the SignUp modal

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);  // State to control Login modal visibility
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);  // State to control SignUp modal visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);  // Toggle Login modal visibility
  };

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);  // Toggle SignUp modal visibility
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#121421] w-full text-white flex justify-between items-center px-6 py-4 relative">
        <Link to="/">
          <div className="font-bold text-3xl flex items-center gap-2">
            <img className="w-12" src={Logo} alt="Logo" />
            <p>Convertly</p>
          </div>
        </Link>

        <ul className="hidden lg:flex flex-row items-center gap-8 text-lg tracking-wider">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={toggleLoginModal}  // Open Login modal
              className="rounded-full px-4 py-2 font-bold bg-black border-2"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={toggleSignUpModal}  // Open SignUp modal
              className="rounded-full px-4 py-2 -ml-5 font-bold bg-[#91ec59] text-black"
            >
              Signup
            </button>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none z-30"
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        <div
          className={`absolute top-0 left-0 w-full bg-[#121421] p-5 shadow-lg lg:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg tracking-wider">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={toggleLoginModal}  // Open Login modal in mobile
                className="rounded-full px-4 py-2 font-bold bg-black border-2 w-full"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={toggleSignUpModal}  // Open SignUp modal in mobile
                className="rounded-full px-4 py-2 font-bold bg-[#91ec59] text-black w-full"
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Conditionally render Login and SignUp Modals */}
      <Login isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
      <SignUp isOpen={isSignUpModalOpen} onClose={toggleSignUpModal} />
    </div>
  );
}

export default Header;
