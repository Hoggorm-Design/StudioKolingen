import React from "react";
import ApartmentHeader from "../components/facilities/ApartmentHeader.tsx";
import ApartmentShowcase from "../components/facilities/ApartmentShowcase.tsx";
import Location from "../components/shared/Location.tsx";
import ArtDisplay from "../components/facilities/ArtDisplay.tsx";
import Footer from "../components/shared/Footer.tsx";

const Facilities: React.FC = () => {
    return (
        <><ApartmentHeader/><ApartmentShowcase/><Location/><ArtDisplay/><Footer/></>
    );
};

export default Facilities;