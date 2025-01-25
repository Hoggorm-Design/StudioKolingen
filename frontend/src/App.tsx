import React from "react";
import { Routes, Route } from "react-router-dom";
import DesktopNavbar from "./components/shared/DesktopNavbar.tsx";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Facilities from "./pages/Facilities";
import Header from "./components/home/Header.tsx";
import Footer from "./components/shared/Footer.tsx";
import MobileNavbar from "./components/shared/MobileNavbar.tsx";
import ScrollToAnchor from "./components/shared/ScrollToAnchor.tsx";
import MakersSpace from "./pages/MakersSpace.tsx";

const App: React.FC = () => {
  return (
    <div>
      <MobileNavbar />
      <Header />
      <DesktopNavbar />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/makersspace" element={<MakersSpace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
