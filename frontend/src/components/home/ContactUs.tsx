import useContact from "../../hooks/useContactUs.ts";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs: React.FC = () => {
  const { contact, loading } = useContact();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!contact) {
    return <div>No contact information available.</div>;
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#1D192C] px-3 py-5 xs:px-8 xs:py-10 md:p-20">
      <div className="bg-white flex flex-col lg:flex-row p-4 xs:p-8 md:p-16 w-full h-full gap-10">
        {/* Left Section */}
        <section className="lg:w-1/2 flex flex-col gap-6">
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
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#B22C2B]" />
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

        {/* Right Section */}
        <section className="lg:w-1/2 flex flex-col gap-4">
          <form className="flex flex-col gap-6 auto">
            {/* Input with Label */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                className="p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-[#B22C2B]"
                name="name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                className="p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-[#B22C2B]"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter the subject"
                autoComplete="off"
                className="p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-[#B22C2B]"
                name="subject"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message"
                autoComplete="off"
                className="p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-[#B22C2B]"
                rows={5}
                name="message"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms" className="text-sm">
                  I accept the{" "}
                  <a href="#" className="underline text-sm font-normal">
                    Terms
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#B22C2B] text-white py-2 px-6 hover:bg-[#7c1e1d] transition border-[1px] border-[#1D192C]"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
