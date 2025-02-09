import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { Artist } from "../interfaces/artists.ts";

const useArtists = () => {
  const [artists, setArtists] = useState<Artist[] | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchArtists = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "artists"] | order(publishedAt desc){
          image{
            asset->{
              _id,
              url
            },
          },
          header,
          alt,
          text,
          link{
            name,
            url
          },
          publishedAt
        }`;

        const data: Artist[] = await sanityClient.fetch(query);
        setArtists(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, [setIsLoading]);

  return { artists };
};

export default useArtists;
