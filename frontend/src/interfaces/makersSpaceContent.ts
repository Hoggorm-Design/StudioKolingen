export interface MakersSpaceContentProps {
  _id: string;
  header: string;
  _type: "makersSpaceContent";
  textBlocks: string[];
  links: { name: string; url: string }[];
  carouselImages: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  }[];
  regularImages: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  }[];
  publishedAt: string;
}
