import React from "react";
import useArtDisplay from "../../hooks/useArtDisplay.ts";


const ArtDisplay: React.FC = () => {
    const { artDisplay, loading } = useArtDisplay();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!artDisplay) {
        return <div>No art to display.</div>;
    }

    return (
        <section>
            {artDisplay.map((image, index) => (
            <div className="art-images" key={index}>
                <img src={image.image.asset.url} alt={image.alt} />
            </div>
                ))}
        </section>
    );
};

export default ArtDisplay;
