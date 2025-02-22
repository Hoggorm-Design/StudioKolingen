export interface FacilityImage {
  asset: {
    _ref: string;
    url: string;
  };
  altText: string;
}

export interface Facilities {
  header: string;
  textBlocks: string[];
  mainImage: FacilityImage;
  images: FacilityImage[];
}
