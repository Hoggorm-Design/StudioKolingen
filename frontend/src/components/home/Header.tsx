import useMainImage from "../../hooks/useMainImage.ts";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { mainImage, loading } = useMainImage();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!mainImage) {
    return <div>No main image available.</div>;
  }

  return (
    <header className="pt-20 lg:p-0">
      <section className="flex flex-col justify-center items-center p-16 sm:p-20 gap-8">
        <Link to="/">
          <img src={mainImage.image.asset.url} alt={mainImage.alt} />
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
  );
};

export default Header;
