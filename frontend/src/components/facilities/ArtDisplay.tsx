import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useFacilities from "../../hooks/useFacilities.ts";
import { Facilities } from "../../interfaces/artDisplay.ts";

const ArtDisplay = () => {
  const { facilities } = useFacilities();
  const { isLoading } = useLoading();
  const [isMobile, setIsMobile] = useState(false);

  // Oppdater `isMobile` basert på skjermbredde
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 640); // Sett til `true` for skjermer ≤ 640px
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <>
      {!isLoading && facilities && (
        <section className="bg-[#1D192C] px-5 sm:px-10 py-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 xs:gap-8 xl:gap-14">
            {facilities.map((facility: Facilities, index) => (
              <div
                key={index}
                className={`group block bg-white overflow-hidden ${
                  !isMobile
                    ? "transform transition duration-300 hover:scale-105 cursor-pointer"
                    : ""
                }`}
              >
                {/* Kvadratisk bildecontainer */}
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={facility.carouselImages[0].asset.url}
                    alt={facility.carouselImages[0].altText}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Header og tekst */}
                <div className="pt-4 pl-4">
                  <h3 className="text-lg font-semibold mb-2 sm:group-hover:text-[#B22C2B]">
                    {facility.header}
                  </h3>
                </div>

                {/* "Read More"-knapp for mobil */}
                {isMobile && (
                  <div className="p-4">
                    <Link
                      to={`/facilities/${facility.header.toLowerCase().trim().replace(/ /g, "-")}`}
                      className="text-lg text-[#B22C2B] hover:text-[#7c1e1d] transition"
                    >
                      Read More
                    </Link>
                  </div>
                )}

                {/* Link for desktop */}
                {!isMobile && (
                  <Link
                    to={`/facilities/${facility.header.toLowerCase().trim().replace(/ /g, "-")}`}
                    className="absolute inset-0"
                  ></Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ArtDisplay;
