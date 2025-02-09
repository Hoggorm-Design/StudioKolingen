import { useEffect, useState } from "react";
import useLocation from "../../hooks/useLocation.ts";
import useLinks from "../../hooks/useLink.ts";
import useContact from "../../hooks/useContactUs.ts";
import { useLoading } from "../../context/LoadingContext.tsx";
import LocationCarousel from "../LocationCarousel.tsx";

const Location = () => {
  const { location } = useLocation();
  const { links } = useLinks();
  const { contact } = useContact();
  const { isLoading } = useLoading();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    contact?.address || "",
  )}&output=embed`;

  return (
    <>
      {!isLoading && location && (
        <section className="flex flex-col w-full pt-14 gap-4 px-5 sm:px-10 justify-center">
          <h2>{location.header}</h2>

          {/* Map Display */}
          <section>
            {contact?.address && (
              <div className="relative w-full min-h-[500px]">
                <iframe
                  title="Google Map"
                  src={mapUrl}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            )}
          </section>

          {/* Text Section */}
          <section className="flex flex-col pt-5">
            <p>{location.text}</p>
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
