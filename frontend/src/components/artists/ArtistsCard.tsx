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

  return (
    <div className="bg-white sm:bg-[#1D192C] p-10 sm:py-20 xl:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-white flex flex-col sm:flex-row sm:h-80 w-full sm:p-5 gap-4"
          >
            {/* Image */}
            <div className="w-full max-h-[350px] sm:w-1/2 aspect-w-4 aspect-h-3 flex-shrink-0">
              <img
                src={artist.image.asset.url}
                alt={artist.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between sm:w-1/2">
              <div>
                <h3 className="text-xl font-semibold mb-2">{artist.header}</h3>
                <p className="text-sm">{artist.text}</p>
              </div>

              {/* Link */}
              <Link
                to={artist.link}
                className="text-sm text-[#B22C2B] hover:text-[#7c1e1d] transition"
              >
                Visit artist's page
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistCard;
