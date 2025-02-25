import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Squash } from "hamburger-react";
import navbarLogo from "../../assets/logo.svg";
import { useLoading } from "../../context/LoadingContext.tsx";

const MobileNavbarHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useLoading();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isLoading && (
        <nav
          className={`block lg:hidden fixed w-full z-50 bg-white top-0 left-0 transition-shadow duration-300 ${hasScrolled ? "shadow-md" : "shadow-none"}`}
        >
          <div className="flex justify-between items-center px-6 py-2 w-full">
            {/* Logo Placeholder to Maintain Layout */}
            <div className="w-32">
              <div key="logo" className="flex items-center">
                <Link to="/" className="flex items-center space-x-4">
                  <img
                    src={navbarLogo}
                    alt="Studio kolingen logo"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>

            {/* Hamburger Icon Always on the Right */}
            <div className="ml-auto">
              <Squash
                size={25}
                toggled={isOpen}
                toggle={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>

          {/* Sliding Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="bg-white px-6 py-4">
              {[
                { label: "Blog", path: "/blog" },
                { label: "Facilities", path: "/facilities" },
                { label: "Prices", path: "/#prices" }, // Fixed
                { label: "About Us", path: "/#about" }, // Fixed
                { label: "Contact", path: "/#contact" }, // Fixed
                { label: "Artists", path: "/artists" },
                { label: "Makers Space", path: "/makersspace" },
              ].map(({ label, path }, index) => (
                <Link
                  key={index}
                  to={path}
                  className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileNavbarHome;
