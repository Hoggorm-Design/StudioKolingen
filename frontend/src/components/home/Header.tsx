import useMainImage from "../../hooks/useMainImage.ts";
import React from "react";

const Header: React.FC = () => {
    const { mainImage, loading } = useMainImage();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!mainImage) {
        return <div>No main image available.</div>;
    }

    return (
        <header>
            <section>
                <img src={mainImage.image.asset.url} alt={mainImage.alt} />
                <h1>{mainImage.header}</h1>
                <h2>{mainImage.text}</h2>
            </section>
        </header>
    );
};

export default Header;