import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
};

export default App;