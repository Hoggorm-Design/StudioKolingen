import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useNavbar from "../../hooks/useNavbar.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const DesktopNavbarHome: React.FC = () => {
  const { navbar } = useNavbar();
  const { isLoading } = useLoading();

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

  const logoVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const linksVariants = {
    center: {
      x: "-7%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    end: {
      x: "10%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {!isLoading && navbar && (
        <nav
          ref={navbarRef}
          className={`hidden lg:flex overflow-hidden items-center border-t border-[#B22C2B] px-10 py-4 w-full bg-white z-50 sticky top-0 transition-all duration-500 ${
            isFixed ? "shadow-md" : ""
          } h-20`}
        >
          {/* Logo Section */}
          <motion.div
            className="flex items-center h-14"
            initial="hidden"
            animate={isFixed ? "visible" : "hidden"}
            exit="exit"
            variants={logoVariants}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img
                src={navbar.image.asset.url}
                alt={navbar.alt}
                className="h-14"
              />
            </Link>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="flex items-center justify-center gap-x-10 w-full"
            initial="center"
            animate={isFixed ? "end" : "center"}
            variants={linksVariants}
          >
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
              to="makersspace"
              className="hover:text-[#B22C2B] transition-colors menuItem text-center"
            >
              Makers Space
            </Link>
          </motion.div>
        </nav>
      )}
    </>
  );
};

export default DesktopNavbarHome;
