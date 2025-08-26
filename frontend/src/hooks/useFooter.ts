import { useEffect, useState } from "react";
import { Footer } from "../interfaces/footer.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";

const useFooter = () => {
  const [footer, setFooter] = useState<Footer | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchFooter = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "footer"][0]{
                  images[]{
                    asset ->{
                      _ref,
                      url
                    },
                    altText
                  },
                  logoImage {
                    asset -> {
                    _ref,
                    url
                    },
                    altText
                  },
                  header,
                  address,
                  contact1,
                  phonenumber1,
                  contact2,
                  phonenumber2
               }`;
        const data = await sanityClient.fetch(query);
        setFooter(data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFooter();
  }, [setIsLoading]);

  return { footer };
};

export default useFooter;
