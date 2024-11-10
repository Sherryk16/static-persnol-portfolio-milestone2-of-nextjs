"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id='navbar'>
      <div
        className="fixed top-0 left-0 w-full z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              My Portfolio
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/Home"
                className="text-white hover:bg-yellow-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/Projects"
                className="text-white hover:bg-yellow-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/ContactMe"
                className="text-white hover:bg-yellow-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/Resume1.pdf"
                download="Sheharyar_CV.pdf"
                className="text-white hover:bg-yellow-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                CV Resume
              </Link>
            </div>
          </div>

          {/* Hamburger Icon for Mobile (visible on small screens only) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/home"
              className="text-white hover:bg-yellow-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-white hover:bg-yellow-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contactme"
              className="text-white hover:bg-yellow-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              href="/Resume1.pdf"
              download="Sheharyar_CV.pdf"
              className="text-white hover:bg-yellow-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              CV Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
