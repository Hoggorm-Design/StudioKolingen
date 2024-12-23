import useArtistInfo from "../../hooks/useArtistHeader.ts";
import React from "react";


const ArtistHeader: React.FC = () => {
    const { artistInfo, loading } = useArtistInfo();

    if (loading || !artistInfo) {
        return <div>Loading...</div>;
    }

    return (
        <header>
            <section>
                <h1>{artistInfo.header}</h1>
                <p>{artistInfo.text}</p>
            </section>
        </header>
    );
};

export default ArtistHeader;
