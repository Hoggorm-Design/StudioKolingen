import { Route, Routes, useLocation } from "react-router-dom";
import DesktopNavbar from "./components/shared/DesktopNavbar.tsx";
import MobileNavbar from "./components/shared/MobileNavbar.tsx";
import ScrollToAnchor from "./components/shared/ScrollToAnchor.tsx";
import ApartmentPage from "./pages/ApartmentPage.tsx";
import Artists from "./pages/Artists";
import Blog from "./pages/Blog.tsx";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import MakersSpace from "./pages/MakersSpace.tsx";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <MobileNavbar />}
      {location.pathname !== "/" && <DesktopNavbar />}
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/makersspace" element={<MakersSpace />} />
        <Route path="/facilities/:header" element={<ApartmentPage />} />
      </Routes>
    </div>
  );
};

export default App;
