import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import  useLogo from "../../hooks/useLogo.ts";

const Header = () => {
  const { isLoading } = useLoading();
  const { logo } = useLogo();

  return (
    <>
      {!isLoading && logo && (
        <header className="pt-10 sm:pt-20 lg:p-0">
          <section className="flex flex-col justify-center items-center p-16 sm:p-20 gap-8">
            <Link to="/">
              <img
                className="w-full max-w-xl h-auto"
                src={logo.mainLogo?.asset?.url}
                alt="Logo of Studio Kolingen"
              />
            </Link>
            <div className="flex flex-col sm:flex-row items-center sm:gap-5 text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-nowrap">
                Studio Kolingen
              </h1>
              <h2 className="text-4xl md:text-5xl font-light text-nowrap">
                Artist in Residence
              </h2>
            </div>
          </section>
        </header>
      )}
    </>
  );
};

export default Header;
