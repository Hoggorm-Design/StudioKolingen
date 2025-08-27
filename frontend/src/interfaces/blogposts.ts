export interface BlogPost {
  _id: string;
  header: string;
  textBlocks: string[];
  images: {
    asset: { _ref: string; url: string };
    altText?: string;
  }[];
  textBlocks2: string[];

  publishedAt: string;

  frontpage: boolean;

  mainImage: {
    asset: {
      _ref: string;
      url: string;
    }
    altText: string;
  }
}
