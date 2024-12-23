import { useState, useEffect } from "react";
import {Artist} from "../interfaces/artists.ts";
import sanityClient from "../client.ts";


const useArtists = () => {
    const [artists, setArtists] = useState<Artist[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArtists = async () => {
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
            setLoading(false);
        };

        fetchArtists();
    }, []);

    return { artists, loading };
};

export default useArtists;
