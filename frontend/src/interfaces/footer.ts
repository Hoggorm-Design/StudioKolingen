export interface FooterImage {
    asset: {
        _ref: string;
        url: string;
        };
    altText: string;
}


export interface Footer {
  logoImage: {
    asset: {
      _ref: string;
      url: string;
    };
    altText: string;
  };
  images: FooterImage[];
  header: string;
  address: string;
  contact1: string;
  phonenumber1: string;
  contact2: string;
  phonenumber2: string;
}