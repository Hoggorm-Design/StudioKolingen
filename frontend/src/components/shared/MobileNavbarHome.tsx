import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Squash } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import navbarLogo from "../../assets/logo.svg";
import { useLoading } from "../../context/LoadingContext.tsx";

const MobileNavbarHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isLoading } = useLoading();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isOpen) return; // Ensure the logo remains visible when the menu is open

      const subNavbar = document.getElementById("sub-navbar");
      if (subNavbar) {
        const rect = subNavbar.getBoundingClientRect();
        const shouldShowLogo = rect.top <= 0;

        // Prevent unnecessary state updates to avoid flickering
        setShowLogo((prev) =>
          prev !== shouldShowLogo ? shouldShowLogo : prev,
        );
      }

      // Throttle shadow update to prevent excessive re-renders
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setHasScrolled(currentScrollY > 10);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowLogo(true); // Ensure logo is always visible when menu is open
    } else {
      // Restore scroll-based logo visibility when menu closes
      const subNavbar = document.getElementById("sub-navbar");
      if (subNavbar) {
        const rect = subNavbar.getBoundingClientRect();
        setShowLogo(rect.top <= 0);
      }
    }
  }, [isOpen]);

  const logoVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  return (
    <>
      {!isLoading && (
        <nav
          className={`block lg:hidden fixed w-full z-50 bg-white top-0 left-0 transition-shadow duration-300 ${
            hasScrolled ? "shadow-md" : "shadow-none"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-2 w-full">
            {/* Logo Placeholder to Maintain Layout */}
            <div className="w-32">
              <AnimatePresence>
                {showLogo && (
                  <motion.div
                    key="logo"
                    className="flex items-center"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={logoVariants}
                  >
                    <Link to="/" className="flex items-center space-x-4">
                      <img
                        src={navbarLogo}
                        alt="Studio Kolingen Logo"
                        className="h-10"
                      />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
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
