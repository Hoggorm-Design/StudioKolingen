import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef("");
  const lastPathname = useRef(location.pathname); // Track the last pathname

  useEffect(() => {
    const scrollToHash = (delay: number) => {
      const element = document.getElementById(lastHash.current);
      if (lastHash.current && element) {
        setTimeout(() => {
          const yOffset = -50; // Adjust this value to control the scroll offset
          const yPosition =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: yPosition, behavior: "smooth" });
          lastHash.current = ""; // Clear hash to prevent duplicate scrolling
        }, delay);
      }
    };

    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Save the hash
      const isSamePage = lastPathname.current === location.pathname; // Check if staying on the same page
      scrollToHash(isSamePage ? 0 : 200); // No delay for same page, delay for cross-page navigation
    } else {
      // If there's no hash, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    lastPathname.current = location.pathname; // Update last pathname
  }, [location]);

  return null;
};

export default ScrollToAnchor;
