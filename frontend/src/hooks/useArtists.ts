import { useState, useEffect } from "react";
import { Artist } from "../interfaces/artists.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";

const useArtists = () => {
  const [artists, setArtists] = useState<Artist[] | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchArtists = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "artists"]{
                   image{
                       asset->{
                           _id,
                           url
                       },
                   },
                   header,
                   alt,
                   text,
                   link
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
