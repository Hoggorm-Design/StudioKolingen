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
    const handleScroll = () => {
      if (isOpen) return; // Keep logo visible when menu is open
      const subNavbar = document.getElementById("sub-navbar");
      if (subNavbar) {
        const rect = subNavbar.getBoundingClientRect();
        setShowLogo(rect.top <= 0);
      }
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowLogo(true);
    } else {
      const subNavbar = document.getElementById("sub-navbar");
      if (subNavbar) {
        const rect = subNavbar.getBoundingClientRect();
        setShowLogo(rect.top <= 0);
      } else {
        setShowLogo(false);
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
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  return (
    <>
      {!isLoading && (
        <nav
          className={`block lg:hidden fixed w-full z-50 bg-white top-0 left-0 transition-shadow duration-300 ${hasScrolled ? "shadow-md" : "shadow-none"}`}
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
                    exit="exit"
                    variants={logoVariants}
                  >
                    <Link to="/" className="flex items-center space-x-4">
                      <img
                        src={navbarLogo}
                        alt="Studio kolingen logo"
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
                "Blog",
                "Facilities",
                "Prices",
                "About Us",
                "Contact",
                "Artists",
                "Makers Space",
              ].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/ /g, "")}`}
                  className="block text-black hover:text-[#B22C2B] text-lg transition-colors mb-5"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
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
