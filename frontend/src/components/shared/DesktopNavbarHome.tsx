import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import navbarLogo from "../../assets/logo.svg";
import { useLoading } from "../../context/LoadingContext.tsx";

const DesktopNavbarHome: React.FC = () => {
  const { isLoading } = useLoading();
  const [xOffset, setXOffset] = useState("20%");
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateXOffset = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setXOffset("22%");
      } else if (width >= 1335) {
        setXOffset("18%");
      } else if (width >= 1250) {
        setXOffset("16%");
      } else if (width >= 1158) {
        setXOffset("14%");
      } else if (width >= 1100) {
        setXOffset("12%");
      } else {
        setXOffset("10%");
      }
    };

    updateXOffset();
    window.addEventListener("resize", updateXOffset);
    return () => window.removeEventListener("resize", updateXOffset);
  }, []);

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

  const logoVariants: Variants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const linksVariants: Variants = {
    center: {
      x: "-6%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    end: {
      x: xOffset,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {!isLoading && (
        <nav
          ref={navbarRef}
          className={`hidden lg:flex overflow-hidden items-center border-t border-[#B22C2B] px-10 py-4 w-full bg-white z-50 sticky top-0 transition-all duration-500 ${
            isFixed ? "shadow-md" : ""
          } h-16`}
        >
          {/* Logo Section */}
          <div className="w-40">
            <AnimatePresence>
              {isFixed && (
                <motion.div
                  key="logo"
                  className="flex items-center h-full md:translate-x-[20%]"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={logoVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/">
                    <img
                      src={navbarLogo}
                      alt="Studio kolingen logo"
                      className="w-full h-auto"
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
