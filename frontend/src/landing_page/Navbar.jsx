import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo aligned to the left */}
            <div className="flex-shrink-0">
              <Link to={"/"}>
                <img className="h-8 w-auto" src="/media/images/logo.svg" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Menu - Anchor tags aligned to the right */}
            <div className="hidden md:flex space-x-8 ml-auto">
              <Link className="text-gray-600 hover:text-gray-900" to={"/signup"}>Signup</Link>
              <Link className="text-gray-600 hover:text-gray-900" to={"/about"}>About</Link>
              <Link className="text-gray-600 hover:text-gray-900" to={"/product"}>Product</Link>
              <Link className="text-gray-600 hover:text-gray-900" to={"/pricing"}>Pricing</Link>
              <Link className="text-gray-600 hover:text-gray-900" to={"/support"}>Support</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, toggle visibility based on isMenuOpen state */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-gray-600 hover:text-gray-900 block" to={"/signup"} onClick={handleLinkClick}>Signup</Link>
            <Link className="text-gray-600 hover:text-gray-900 block" to={"/about"} onClick={handleLinkClick}>About</Link>
            <Link className="text-gray-600 hover:text-gray-900 block" to={"/product"} onClick={handleLinkClick}>Product</Link>
            <Link className="text-gray-600 hover:text-gray-900 block" to={"/pricing"} onClick={handleLinkClick}>Pricing</Link>
            <Link className="text-gray-600 hover:text-gray-900 block" to={"/support"} onClick={handleLinkClick}>Support</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
