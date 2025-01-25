export interface MakersSpaceContent {
  _id: string;
  _type: "makersSpaceContent";
  text1: string;
  text2: string;
  text3: string;
  image1: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image2: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image3: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  // Repeat this for the rest of the images (image4 to image10)
  image4?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image5?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image6?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image7?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image8?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image9?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  image10?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
}
