import useCarousel from "../../hooks/useCarousel.ts";
import React, {useState} from "react";

const Carousel: React.FC = () => {
    const { carousels, loading } = useCarousel();
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (carousels.length === 0) {
        return <div>No carousel images available.</div>;
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carousels.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carousels.length) % carousels.length
        );
    };

    const currentCarousel = carousels[currentIndex];

    return (
        <section>
            <div className="carousel">
                <img src={currentCarousel.image.asset.url} alt={currentCarousel.alt} />
            </div>
            <div>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    );
};

export default Carousel;