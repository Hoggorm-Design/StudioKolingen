import { useEffect, useState } from "react";
import { Navbar } from "../interfaces/navbar.ts";
import sanityClient from "../client.ts";

const useNavbar = () => {
  const [navbar, setNavbar] = useState<Navbar | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNavbar = async () => {
      const query = `*[_type == "navbar"][0]{
        image {
          asset->{
            _ref,
            url
          }
        },
        alt,
        header,
        address,
        contact1,
        phonenumber1,
        contact2,
        phonenumber2
      }`;

      const data = await sanityClient.fetch(query);
      setNavbar(data);
      setLoading(false);
    };

    fetchNavbar();
  }, []);

  return { navbar, loading };
};

export default useNavbar;
