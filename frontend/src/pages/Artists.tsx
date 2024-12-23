import React from "react";
import ArtistHeader from "../components/artists/ArtistHeader.tsx";
import ArtistsCard from "../components/artists/ArtistsCard.tsx";
import Footer from "../components/shared/Footer.tsx";

const Artists: React.FC = () => {
    return (
        <>
        <ArtistHeader /><ArtistsCard/><Footer/>
        </>
    );
};

export default Artists;