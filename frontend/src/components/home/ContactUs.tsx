import useContact from "../../hooks/useContactUs.ts";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useLoading } from "../../context/LoadingContext.tsx";

const ContactUs: React.FC = () => {
  const { contact } = useContact();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && contact && (
        <section className="flex justify-center items-center lg:min-h-screen bg-[#1D192C] py-10 md:py-20 px-8 md:px-36 xl:px-64">
          <div className="bg-white flex flex-col px-4 py-28 md:p-16 w-full h-full gap-10">
            {/* Left Section */}
            <section className="lg:w-1/2 flex flex-col gap-12 md:gap-6">
              <h2>{contact.header}</h2>

              {/* Email */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#B22C2B]" />
                <a
                  href={`mailto:${contact.mail}`}
                  className="hover:text-[#B22C2B] transition text-wrap"
                >
                  {contact.mail}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-[#B22C2B]" />
                <a
                  href={`tel:${contact.phonenumber}`}
                  className="hover:text-[#B22C2B] transition"
                >
                  {contact.phonenumber}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-[#B22C2B]"
                />
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    contact.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B22C2B] transition"
                >
                  {contact.address}
                </a>
              </div>

              {/* Icons Section */}
              <div className="hidden lg:flex items-center gap-12 mt-4">
                <a
                  href="https://www.facebook.com/p/Studio-Kolingen-100064515109973/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B22C2B] hover:text-[#7c1e1d] transition"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a
                  href="https://www.instagram.com/studiokolingen_air/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B22C2B] hover:text-[#7c1e1d] transition"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactUs;
