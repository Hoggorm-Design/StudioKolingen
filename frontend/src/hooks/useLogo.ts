import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { Logo } from "../interfaces/Logo.ts"

const useLogo = () => {
  const [logo, setLogo] = useState<Logo | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchLogo = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "logoImages"][0]{
                   footerLogo{
                        asset-> {
                            url,
                            _ref
                        }
                   },
                   mainLogo{
                        asset-> {
                            url,
                            _ref
                        }
                   },
               }`;
        const data = await sanityClient.fetch(query);
        setLogo(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogo();
  }, [setIsLoading]);

  return { logo };
};

export default useLogo;