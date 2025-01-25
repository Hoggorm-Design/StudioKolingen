import useArtistInfo from "../../hooks/useArtistHeader.ts";
import React from "react";

const ArtistHeader: React.FC = () => {
  const { artistInfo, loading } = useArtistInfo();

  if (loading || !artistInfo) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex flex-col xl:flex-row w-full min-h-[50vh] gap-20 pt-32 px-10 lg:p-10 justify-center items-center">
      <section className="flex flex-col xl:w-1/2 space-y-4">
        <h2>{artistInfo.header}</h2>
        <p>{artistInfo.text}</p>
      </section>
      <section className="xl:w-1/2"></section>
    </header>
  );
};

export default ArtistHeader;
