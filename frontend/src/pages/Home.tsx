import About from "../components/home/About.tsx";
import SubImage from "../components/home/SubImage.tsx";
import Prices from "../components/shared/Prices.tsx";
import Location from "../components/shared/Location.tsx";
import ContactUs from "../components/home/ContactUs.tsx";
import DesktopNavbarHome from "../components/shared/DesktopNavbarHome.tsx";
import Header from "../components/home/Header.tsx";
import { useEffect } from "react";
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
  }, []);
  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
