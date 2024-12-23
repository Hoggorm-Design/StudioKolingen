import {useEffect, useState} from "react";
import {ApartmentInfo} from "../interfaces/apartmentInfo.ts";
import sanityClient from "../client.ts";

const useApartmentInfo = () => {
    const [apartmentInfo, setApartmentInfo] = useState<ApartmentInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchApartmentInfo = async () => {
            const query = `*[_type == "apartmentinfo"][0]{header, text}`;
            const data: ApartmentInfo = await sanityClient.fetch(query);
            setApartmentInfo(data);
            setLoading(false);
        };

        fetchApartmentInfo();
    }, []);

    return { apartmentInfo, loading };
};

export default useApartmentInfo;