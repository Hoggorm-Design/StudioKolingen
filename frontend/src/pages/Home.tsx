import { useEffect } from "react";
import About from "../components/home/About.tsx";
import ContactUs from "../components/home/ContactUs.tsx";
import Header from "../components/home/Header.tsx";
import SubImage from "../components/home/SubImage.tsx";
import DesktopNavbarHome from "../components/shared/DesktopNavbarHome.tsx";
import Footer from "../components/shared/Footer.tsx";
import Location from "../components/shared/Location.tsx";
import MobileNavbarHome from "../components/shared/MobileNavbarHome.tsx";
import Prices from "../components/shared/Prices.tsx";
import SubNavbarMobile from "../components/shared/SubNavbarMobile.tsx";
import { useLoading } from "../context/LoadingContext.tsx";

const Home = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [setIsLoading]);
  return (
    <>
      <Header />
      <MobileNavbarHome />
      <SubNavbarMobile />
      <DesktopNavbarHome />
      <SubImage />
      <section id="about">
        <About />
      </section>
      <section id="prices">
        <Prices />
      </section>
      <Location />
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
};

export default Home;
