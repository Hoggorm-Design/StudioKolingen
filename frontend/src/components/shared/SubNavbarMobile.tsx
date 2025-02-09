import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";

const SubNavbarMobile: React.FC = () => {
  const { isLoading } = useLoading();
  const navbarRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {!isLoading && (
        <nav
          ref={navbarRef}
          className="border-t border-[#B22C2B] flex lg:hidden overflow-hidden items-center justify-center w-full bg-transparent px-6 py-4 transition-all duration-500"
          id={"sub-navbar"}
        >
          {/* Links Section */}
          <div className="flex items-center justify-center gap-x-10 sm:gap-x-24 w-full">
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
              to="makersspace"
              className="hover:text-[#B22C2B] transition-colors menuItem text-center"
            >
              Makers Space
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default SubNavbarMobile;
