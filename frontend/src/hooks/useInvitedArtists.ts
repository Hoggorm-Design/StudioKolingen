import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { InvitedArtist } from "../interfaces/invitedArtist.ts";

const useInvitedArtists = () => {
  const [invitedArtists, setInvitedArtists] = useState<InvitedArtist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInvitedArtists = async () => {
      const query = `*[_type == "invitedArtists"]{
       artistName,
       artistLink
      }`;
      const data: InvitedArtist[] = await sanityClient.fetch(query);
      setInvitedArtists(data);
      setLoading(false);
    };

    fetchInvitedArtists();
  }, []);

  return { invitedArtists, loading };
};

export default useInvitedArtists;
