import {LinkData} from "../interfaces/linkData.ts";
import {useEffect, useState} from "react";
import sanityClient from "../client.ts";

const useLinks = () => {
    const [links, setLinks] = useState<LinkData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchLinksData = async () => {
            const query = `*[_type == "link"]{
        url,
        alt
      }`;

            try {
                const linksData = await sanityClient.fetch(query);
                setLinks(linksData);
            } catch (error) {
                console.error("Error fetching links data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLinksData();
    }, []);

    return { links, loading };
};

export default useLinks;