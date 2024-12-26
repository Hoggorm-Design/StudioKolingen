import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor: React.FC = () => {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    const scrollToHash = () => {
      const element = document.getElementById(lastHash.current);
      if (lastHash.current && element) {
        setTimeout(() => {
          const yOffset = -50; // Adjust this value to control the scroll offset
          const yPosition =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: yPosition, behavior: "smooth" });
          lastHash.current = ""; // Clear hash to prevent duplicate scrolling
        }, 200); // Delay for rendering completion
      }
    };

    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Save hash
      scrollToHash();
    } else {
      // If there's no hash, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollToAnchor;
