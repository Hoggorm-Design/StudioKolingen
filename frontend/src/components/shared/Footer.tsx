import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navbarLogo from "../../assets/logo.svg";
import { useLoading } from "../../context/LoadingContext.tsx";
import useFooter from "../../hooks/useFooter.ts";

const Footer = () => {
  const { footer } = useFooter();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && footer && (
        <footer className="px-5 sm:px-10 py-16">
          <div className="max-w-screen  border border-black py-14 px-4 xs:px-8 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
            {/* Left Section */}
            <div className="flex flex-col gap-y-6 [&_p]:text-[18px] [&_a]:text-[18px] w-[450px] [&_p]:sm:text-start [&_p]:text-center">
              <img src={navbarLogo} alt="Studio kolingen logo" ></img>
              <div>
                <p className="font-normal">{footer.header}</p>
                <p className="footerText">{footer.address}</p>
              </div>
              <div className="">
                <p className="font-normal">Contact:</p>
                <p className="footerText">
                  {footer.contact1}{" "}
                  <a
                    href={`tel:${footer.phonenumber1}`}
                    className="hover:text-[#B22C2B] transition underline footerText"
                  >
                    {footer.phonenumber1}
                  </a>
                </p>
                <p className="footerText">
                  {footer.contact2}{" "}
                  <a
                    href={`tel:${footer.phonenumber2}`}
                    className="hover:text-[#B22C2B] transition underline footerText"
                  >
                    {footer.phonenumber2}
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-4 sm:justify-start justify-center">
                <a
                  href="https://www.facebook.com/p/Studio-Kolingen-100064515109973/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#7c1e1d] transition"
                  aria-label="Visit our Facebook page"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" color="#B51816" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/studiokolingen_air/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#7c1e1d] transition"
                  aria-label="Visit our Instagram page"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x"  color="#B51816"/>
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-row sm:justify-end justify-center w-full">
              <div className="flex flex-row w-[300px] h-auto overflow-hidden ">
                <img
                  src={footer.image.asset.url}
                  alt={footer.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="w-full mt-5 [&>p]:sm:text-start [&>p]:text-center">
            <p className="footerText">Org.nr: 802544-2289</p>
            <p className="footerText">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
