export interface CarouselImage {
    image: {
        asset: {
            _ref: string;
            url: string;
        };
    };
    alt: string;
}

export interface Carousel {
    images: CarouselImage[];
}
