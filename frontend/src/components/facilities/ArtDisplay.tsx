import { Link } from "react-router-dom";
import useArtDisplay from "../../hooks/useArtDisplay.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const ArtDisplay = () => {
  const { artDisplay } = useArtDisplay();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && artDisplay && (
        <section className="bg-[#1D192C] px-5 sm:px-10 py-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 xs:gap-8 xl:gap-14">
            {artDisplay.map((image, index) => (
              <Link
                to={`/facilities/${image.header}`}
                key={index}
                className="group block bg-white overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {/* Kvadratisk bildecontainer */}
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={image.image.asset.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Header og tekst */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#B22C2B]">
                    {image.header}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ArtDisplay;
