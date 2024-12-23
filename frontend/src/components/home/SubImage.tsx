import React from "react";
import useSubImage from "../../hooks/useSubImage.ts";

const SubImage: React.FC = () => {
    const { subImage, loading } = useSubImage();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!subImage) {
        return <div>No sub image available.</div>;
    }

    return (
        <section>
            <img src={subImage.image.asset.url} alt={subImage.alt} />
        </section>
    );
};

export default SubImage;