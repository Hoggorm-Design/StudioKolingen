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
          <h1>{image.header}</h1>
          <p>{image.text}</p>
          <img src={image.image.asset.url} alt={image.alt} />
          <p>{image.text2}</p>
          <img src={image.image2.asset.url} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default ArtDisplay;
