import React from "react";
import { Link } from "react-router-dom";
import useNavbar from "../../hooks/useNavbar";

const Navbar: React.FC = () => {
  const { navbar, loading } = useNavbar();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!navbar) {
    return <div>No navbar content available.</div>;
  }

  return (
    <nav className="space-x-4">
      <img src={navbar.image.asset.url} alt={navbar.alt} />
      <Link to="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      <Link to="/facilities" className="text-blue-500 hover:underline">
        Facilities
      </Link>
      <Link to="/artists" className="text-blue-500 hover:underline">
        Artists
      </Link>
    </nav>
  );
};

export default Navbar;
