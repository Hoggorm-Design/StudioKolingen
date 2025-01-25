import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useNavbar from "../../hooks/useNavbar.ts";

const DesktopNavbar: React.FC = () => {
  const { navbar, loading } = useNavbar();
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;
        setIsFixed(navbarTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!navbar) {
    return <div>No navbar content available.</div>;
  }
  return (
    <nav
      ref={navbarRef}
      className={`hidden lg:flex overflow-hidden items-center px-10 py-4 w-full bg-white z-50 sticky top-0 transition-all duration-500 ${
        isFixed ? "shadow-md" : ""
      } h-20`}
    >
      {/* Logo Section */}
      <div className="flex items-center h-14">
        <Link to="/">
          <img src={navbar.image.asset.url} alt={navbar.alt} className="h-14" />
        </Link>
      </div>

      {/* Links Section */}
      <div className="flex items-center justify-end gap-x-10 w-full">
        <Link
          to="/blog"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          Blog
        </Link>
        <Link
          to="/facilities"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          Facilities
        </Link>
        <Link
          to="/#prices"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          Prices
        </Link>
        <Link
          to="/#about"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          About Us
        </Link>
        <Link
          to="/#contact"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          Contact
        </Link>
        <Link
          to="/artists"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          Artists
        </Link>
        <Link
          to="/makersspace"
          className="hover:text-[#B22C2B] transition-colors menuItem text-center"
        >
          Makers Space
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
