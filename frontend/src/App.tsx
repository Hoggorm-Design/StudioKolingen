import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Facilities from "./pages/Facilities";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/artists" element={<Artists />} />
            </Routes>
        </div>
    );
};

export default App;