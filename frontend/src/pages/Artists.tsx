import React from "react";
import ArtistHeader from "../components/artists/ArtistHeader.tsx";
import ArtistsCard from "../components/artists/ArtistsCard.tsx";

const Artists: React.FC = () => {
  return (
    <>
      <ArtistHeader />
      <ArtistsCard />
    </>
  );
};

export default Artists;
