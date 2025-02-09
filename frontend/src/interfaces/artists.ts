export interface Artist {
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  header: string;
  alt: string;
  text: string;
  link?: {
    name: string;
    url: string;
  };
  publishedAt: string;
}
