import { useEffect, useState } from "react";
import { Contact } from "../interfaces/contactUs.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";

const useContact = () => {
  const [contact, setContact] = useState<Contact | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchContact = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "contact"][0]{ 
                   header,
                   mail,
                   phonenumber,
                   address
               }`;
        const data = await sanityClient.fetch(query);
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, [setIsLoading]);

  return { contact };
};

export default useContact;
