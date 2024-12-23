import {useEffect, useState} from "react";
import sanityClient from "../client.ts";
import {Localy} from "../interfaces/location.ts";

const useLocation = () => {
    const [location, setLocation] = useState<Localy | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchLocation = async () => {
            const query = `*[_type == "location"][0]{
        header,
        text
      }`;

            const data = await sanityClient.fetch(query);
            setLocation(data);
            setLoading(false);
        };

        fetchLocation();
    }, []);

    return { location, loading };
};

export default useLocation;