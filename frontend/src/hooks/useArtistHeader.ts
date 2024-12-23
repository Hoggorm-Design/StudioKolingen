import { useState, useEffect } from "react";
import {ArtistInfo} from "../interfaces/artistinfo.ts";
import sanityClient from "../client.ts";


const useArtistInfo = () => {
    const [artistInfo, setArtistInfo] = useState<ArtistInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArtistInfo = async () => {
            const query = `*[_type == "artistInfo"][0]{header, text}`;
            const data = await sanityClient.fetch<ArtistInfo>(query);
            setArtistInfo(data);
            setLoading(false);
        };

        fetchArtistInfo();
    }, []);

    return { artistInfo, loading };
};

export default useArtistInfo;
