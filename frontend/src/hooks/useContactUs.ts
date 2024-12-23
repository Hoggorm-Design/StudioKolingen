import {useEffect, useState} from "react";
import {Contact} from "../interfaces/contactUs.ts";
import sanityClient from "../client.ts";

const useContact = () => {
    const [contact, setContact] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchContact = async () => {
            const query = `*[_type == "contact"][0]{ 
        header,
        mail,
        phonenumber,
        address
      }`;

            const data = await sanityClient.fetch(query);
            setContact(data);
            setLoading(false);
        };

        fetchContact();
    }, []);

    return { contact, loading };
};

export default useContact;