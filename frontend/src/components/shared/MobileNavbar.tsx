import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash } from "hamburger-react";
import useNavbar from "../../hooks/useNavbar.ts";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navbar, loading } = useNavbar();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!navbar) {
    return <div>No navbar content available.</div>;
  }

  return (
    <nav className="block lg:hidden fixed w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-4">
          <img src={navbar.image.asset.url} alt={navbar.alt} className="h-14" />
        </Link>

        {/* Hamburger Icon */}
        <div>
          <Squash toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-4">
          <Link
            to="/"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/facilities"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Facilities
          </Link>
          <Link
            to="/#prices"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Prices
          </Link>
          <Link
            to="/#about"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/#contact"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/artists"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Artists
          </Link>
          <Link
            to="#"
            className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
            onClick={() => setIsOpen(false)}
          >
            Makers Space
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
