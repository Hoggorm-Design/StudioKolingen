import { useEffect, useState } from "react";
import { Navbar } from "../interfaces/navbar.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext.tsx";

const useNavbar = () => {
  const [navbar, setNavbar] = useState<Navbar | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchNavbar = async () => {
      setIsLoading(true);
      try {
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
      } catch (error) {
        console.error("Error fetching navbar data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavbar();
  }, []);

  return { navbar };
};

export default useNavbar;
