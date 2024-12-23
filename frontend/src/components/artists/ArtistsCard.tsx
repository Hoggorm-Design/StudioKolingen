import React from "react";
import { Link } from "react-router-dom";
import useArtists from "../../hooks/useArtists.ts";

const ArtistCard: React.FC = () => {
    const { artists, loading } = useArtists();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!artists || artists.length === 0) {
        return <div>No artists found.</div>;
    }
    console.log(artists);

    return (
        <div className="artist-card">
            {artists.map((artist, index) => (
                <div key={index}>
                    <h3>{artist.header}</h3>
                    <p>{artist.text}</p>
                    <Link to={artist.link}>Visit artist's page</Link>
                    <img
                        src={artist.image.asset.url}
                        alt={artist.alt}
                    />
                </div>
            ))}
        </div>
    );
};

export default ArtistCard;
