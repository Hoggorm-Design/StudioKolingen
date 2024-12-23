import {useEffect, useState} from "react";
import {About} from "../interfaces/about.ts";
import sanityClient from "../client.ts";

const useAbout = () => {
    const [about, setAbout] = useState<About | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAbout = async () => {
            const query = `*[_type == "about"][0]{
        header,
        text1,
        text2,
        text3,
        image{
          asset->{
            _ref,
            url
          }
        },
        alt
      }`;
            const data: About = await sanityClient.fetch(query);
            setAbout(data);
            setLoading(false);
        };

        fetchAbout();
    }, []);

    return { about, loading };
};

export default useAbout;