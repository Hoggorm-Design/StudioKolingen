export interface MakersSpaceContentProps {
  _id: string;
  header: string;
  _type: "makersSpaceYears";
  firstTextfield: string[];
  textBlocks: string[];
  textBlocks2: string[];
  links: { name: string; url: string }[];
  mainImage: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  } | null;
  images: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  }[];
  images2: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  }[];
  publishedAt: string;
}
