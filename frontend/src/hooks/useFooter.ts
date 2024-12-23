import {useEffect, useState} from "react";
import {Footer} from "../interfaces/footer.ts";
import sanityClient from "../client.ts";

const useFooter = () => {
    const [footer, setFooter] = useState<Footer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchFooter = async () => {
            const query = `*[_type == "footer"][0]{
        image {
          asset->{
            _ref,
            url
          }
        },
        alt,
        header,
        address,
        contact1,
        phonenumber1,
        contact2,
        phonenumber2
      }`;

            const data = await sanityClient.fetch(query);
            setFooter(data);
            setLoading(false);
        };

        fetchFooter();
    }, []);

    return { footer, loading };
};

export default useFooter;