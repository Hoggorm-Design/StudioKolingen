import {useEffect, useState} from "react";
import {ArtDisplay} from "../interfaces/artDisplay.ts";
import sanityClient from "../client.ts";

const useArtDisplay = () => {
    const [artDisplay, setArtDisplay] = useState<ArtDisplay[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArtDisplay = async () => {
            const query = `*[_type == "artDisplay"]{
        image{
          asset->{
            _ref,
            url
          }
        },
        alt
      }`;
            const data: ArtDisplay[] = await sanityClient.fetch(query);
            setArtDisplay(data);
            setLoading(false);
        };

        fetchArtDisplay();
    }, []);

    return { artDisplay, loading };
};

export default useArtDisplay;