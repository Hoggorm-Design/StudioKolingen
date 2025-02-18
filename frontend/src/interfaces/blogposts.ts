export interface BlogPost {
  _id: string;
  header: string;
  textBlocks: string[];
  regularImages: {
    asset: { _ref: string; url: string };
    altText?: string;
  }[];
  carouselImages: {
    asset: { _ref: string; url: string };
    altText?: string;
  }[];
  publishedAt: string;
}
