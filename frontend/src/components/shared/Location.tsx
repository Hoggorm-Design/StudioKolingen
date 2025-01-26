import { Link } from "react-router-dom";
import useLocation from "../../hooks/useLocation.ts";
import useLinks from "../../hooks/useLink.ts";
import useContact from "../../hooks/useContactUs.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const Location = () => {
  const { location } = useLocation();
  const { links } = useLinks();
  const { contact } = useContact();
  const { isLoading } = useLoading();

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    contact?.address || "",
  )}&output=embed`;

  return (
    <>
      {!isLoading && location && (
        <section className="flex flex-col-reverse md:flex-row w-full min-h-screen gap-20 p-10 justify-center items-center">
          {/* Text Section */}
          <section className="flex flex-col xl:w-1/2 space-y-4">
            <h2 className="hidden md:flex">{location.header}</h2>
            <p>{location.text}</p>
            <p>Here is a list:</p>
            <ul>
              {links.length > 0 ? (
                links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={link.url}
                      className="text-[#B22C2B] hover:text-[#7c1e1d] transition"
                    >
                      {link.alt}
                    </Link>
                  </li>
                ))
              ) : (
                <p>No links available.</p>
              )}
            </ul>
          </section>

          {/* Map Display */}
          <section className="xl:w-1/2 w-full">
            {contact?.address && (
              <div
                className={`relative ${
                  window.innerWidth >= 1280 ? "aspect-square" : "h-[400px]"
                } w-full`}
              >
                <iframe
                  title="Google Map"
                  src={mapUrl}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-[1px] border-black"
                ></iframe>
              </div>
            )}
          </section>
          <h2 className="block md:hidden md:w-0 text-left w-full">
            {location.header}
          </h2>
        </section>
      )}
    </>
  );
};

export default Location;
