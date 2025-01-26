import useMainImage from "../../hooks/useMainImage.ts";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";

const Header = () => {
  const { mainImage } = useMainImage();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && mainImage && (
        <header className="pt-20 lg:p-0">
          <section className="flex flex-col justify-center items-center p-16 sm:p-20 gap-8">
            <Link to="/">
              <img
                className="w-full max-w-xl h-auto"
                src={mainImage.image.asset.url}
                alt={mainImage.alt}
              />
            </Link>
            <div className="flex flex-col sm:flex-row items-center sm:gap-5 text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-nowrap">
                {mainImage.header}
              </h1>
              <h2 className="text-4xl md:text-5xl font-light text-nowrap">
                {mainImage.text}
              </h2>
            </div>
          </section>
        </header>
      )}
    </>
  );
};

export default Header;
