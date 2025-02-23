export interface BlogPost {
  _id: string;
  header: string;
  textBlocks: string[];
  images: {
    asset: { _ref: string; url: string };
    altText?: string;
  }[];
  publishedAt: string;
}
