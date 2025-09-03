export interface Localy {
    header: string;
    text: string;
    mapURL: string,

    links: LinkData[]
}


export interface LinkData {
  url: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  imageAlt: string;
}
