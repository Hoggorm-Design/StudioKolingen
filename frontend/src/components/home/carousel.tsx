import useCarousel from "../../hooks/useCarousel.ts";
import React, {useState} from "react";

const Carousel: React.FC = () => {
    const { carousel, loading } = useCarousel();
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!carousel || carousel.images.length === 0) {
        return <div>No carousel images available.</div>;
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carousel.images.length) % carousel.images.length
        );
    };

    const currentImage = carousel.images[currentIndex];

    return (
        <section>
            <div className="carousel">
                <img src={currentImage.image.asset.url} alt={currentImage.alt} />
            </div>
            <div>
                <button onClick={handlePrev}>Left</button>
                <button onClick={handleNext}>Right</button>
            </div>
        </section>
    );
};

export default Carousel;