import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { Artist } from "../interfaces/artists.ts";

const useArtistInfo = () => {
  const [artistInfo, setArtistInfo] = useState<Artist | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchArtistInfo = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "artistPageInfo"][0]{
          header, 
          text
          }`;
        const data = await sanityClient.fetch<Artist>(query);
        setArtistInfo(data);
      } catch (error) {
        console.error("Error fetching artist info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtistInfo();
  }, [setIsLoading]);

  return { artistInfo };
};

export default useArtistInfo;
