import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Hjem</Link>
            <Link to="/blog" className="text-blue-500 hover:underline">Blog</Link>
        </nav>
    );
};

export default Navbar;