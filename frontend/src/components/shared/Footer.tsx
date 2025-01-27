import useFooter from "../../hooks/useFooter.ts";
import useNavbar from "../../hooks/useNavbar.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLoading } from "../../context/LoadingContext.tsx";

const Footer = () => {
  const { footer } = useFooter();
  const { navbar } = useNavbar();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && footer && (
        <footer className="p-10">
          <div className="max-w-screen  border border-black px-2 py-10 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
            {/* Left Section */}
            <div className="flex flex-col gap-y-10">
              <img src={navbar?.image.asset.url} alt={navbar?.alt}></img>
              <div>
                <p className="font-normal">{footer.header}</p>
                <p className="footerText">{footer.address}</p>
              </div>
              <div>
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
              <div className="space-x-4">
                <a
                  href="https://www.facebook.com/p/Studio-Kolingen-100064515109973/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#7c1e1d] transition"
                  aria-label="Visit our Facebook page"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/studiokolingen_air/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#7c1e1d] transition"
                  aria-label="Visit our Instagram page"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <img
                src={footer.image.asset.url}
                alt={footer.alt}
                className="h-fit w-auto"
              />
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="w-full mt-5">
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
