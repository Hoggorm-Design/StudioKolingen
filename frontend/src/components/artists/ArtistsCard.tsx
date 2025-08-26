import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useArtists from "../../hooks/useArtists.ts";

const ArtistCard = () => {
  const { artists } = useArtists();
  const { isLoading } = useLoading();


  return (
    <>
      {!isLoading && artists && (
        <div className="bg-white sm:bg-[#1D192C] px-5 sm:px-10 py-0 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white flex flex-col sm:flex-row sm:h-auto min-h-80 w-full sm:p-5 gap-4"
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
                    <h3 className="text-xl font-semibold mb-2">
                      {artist.header}
                    </h3>
                    <p className="text-sm ">{artist.text}</p>
                  </div>

                  {/* Link */}
                  {artist.link && artist.link.url && (
                    <Link
                      to={artist.link.url}
                      className="text-md mt-3 text-[#B22C2B] hover:text-[#7c1e1d] transition"
                    >
                      Visit artist's page
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistCard;
