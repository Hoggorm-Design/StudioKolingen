import React from "react";
import Header from "../components/home/Header.tsx";
import About from "../components/home/About.tsx";
import Carousel from "../components/home/carousel.tsx";
import SubImage from "../components/home/SubImage.tsx";
import Prices from "../components/shared/Prices.tsx";
import Location from "../components/shared/Location.tsx";
import ContactUs from "../components/home/ContactUs.tsx";
import Footer from "../components/shared/Footer.tsx";

const Home: React.FC = () => {
    return (
        <>
    <Header/><Carousel/><SubImage/><About/><Prices/><Location/><ContactUs/><Footer/>
        </>
    );
};

export default Home;