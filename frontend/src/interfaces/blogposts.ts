export interface BlogPost {
  _id: string;
  header: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  image1?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  imageText1?: string;
  image2?: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  imageText2?: string;
  image3?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText3?: string;
  image4?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText4?: string;
  image5?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText5?: string;
  image6?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText6?: string;
  image7?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText7?: string;
  image8?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText8?: string;
  image9?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText9?: string;
  image10?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageText10?: string;
  link?: string;
  publishedAt: string;
}

export type BlogImageKey =
  | "image1"
  | "image2"
  | "image3"
  | "image4"
  | "image5"
  | "image6"
  | "image7"
  | "image8"
  | "image9"
  | "image10";

export type BlogImageTextKey =
  | "imageText1"
  | "imageText2"
  | "imageText3"
  | "imageText4"
  | "imageText5"
  | "imageText6"
  | "imageText7"
  | "imageText8"
  | "imageText9"
  | "imageText10";
