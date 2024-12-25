import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar.tsx";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Facilities from "./pages/Facilities";
import Header from "./components/home/Header.tsx";
import Footer from "./components/shared/Footer.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
