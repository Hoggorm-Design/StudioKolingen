import { useEffect, useRef, useState } from "react";
import { useLoading } from "../../context/LoadingContext.tsx";
import useContact from "../../hooks/useContactUs.ts";
import useLinks from "../../hooks/useLink.ts";
import useLocation from "../../hooks/useLocation.ts";
import LocationCarousel from "../LocationCarousel.tsx";

const Location = () => {
  const { location } = useLocation();
  const { links } = useLinks();
  const { contact } = useContact();
  const { isLoading } = useLoading();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);
  const [isInteractive, setIsInteractive] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setIsInteractive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  //   contact?.address || ""
  // )}&output=embed`;

  return (
    <>
      {!isLoading && location && (
        <section className="flex flex-col w-full pt-14 gap-4 px-5 sm:px-10 justify-center">
          <h2>{location.header}</h2>

          {/* Map Display */}
          <section>
            {contact?.address && (
              <div
                ref={mapRef}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full min-h-[500px] flex items-center justify-center"
              >
                {/* Overlay som hindrer scrolling */}
                {!isInteractive && (
                  <div
                    className="absolute inset-0 bg-transparent cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsInteractive(true);
                    }} // Klikk for å aktivere kartet
                  ></div>
                )}

                {/* Kartet */}
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=15gtce907QoUkeUAvp99UP9Opc86NrBM&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="500"
                  className={`${isInteractive ? "" : "pointer-events-none"}`} // Hindrer scroll inntil aktivert
                ></iframe>
              </div>
            )}
          </section>

          {/* Text Section */}
          <section className="flex flex-col pt-5">
            <p>{location.text} </p>
            {/* Conditionally Render Grid or Carousel */}
            {links.length > 0 ? (
              isMobileView ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-16 pt-5 pb-14">
                  {links.map((link, index) => (
                    <a key={index} href={link.url} className="block">
                      <div className="w-full h-full aspect-square overflow-hidden">
                        <img
                          src={link.image?.asset?.url}
                          alt={link.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-black mt-2">{link.imageAlt}</p>
                    </a>
                  ))}
                </div>
              ) : (
                <LocationCarousel links={links} />
              )
            ) : (
              <p>No links available.</p>
            )}
          </section>
        </section>
      )}
    </>
  );
};

export default Location;
