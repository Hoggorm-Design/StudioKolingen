import React from "react";
import About from "../components/home/About.tsx";
import SubImage from "../components/home/SubImage.tsx";
import Prices from "../components/shared/Prices.tsx";
import Location from "../components/shared/Location.tsx";
import ContactUs from "../components/home/ContactUs.tsx";

const Home: React.FC = () => {
  return (
    <>
      <SubImage />
      <About />
      <Prices />
      <Location />
      <ContactUs />
    </>
  );
};

export default Home;
