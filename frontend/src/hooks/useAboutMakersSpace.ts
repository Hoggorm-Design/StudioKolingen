import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { AboutMakersSpace } from "../interfaces/aboutMakersSpace.ts";
import { InvitedArtist } from "../interfaces/invitedArtist.ts";
import { useLoading } from "../context/LoadingContext";

const useAboutMakersSpace = () => {
  const [aboutMakersSpace, setAboutMakersSpace] =
    useState<AboutMakersSpace | null>(null);
  const [invitedArtists, setInvitedArtists] = useState<InvitedArtist[]>([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch both queries in parallel
        const [aboutData, artistsData] = await Promise.all([
          sanityClient.fetch(`*[_type == "aboutMakersSpace"][0]{
            aboutHeader,
            aboutText,
            subHeader,
            subTitleText,
            subTitleText2,
            image{
              asset->{
                _ref,
                url
              },
              alt
            }
          }`),
          sanityClient.fetch(`*[_type == "invitedArtists"]{
            artistName,
            artistLink
          }`),
        ]);

        setAboutMakersSpace(aboutData);
        setInvitedArtists(artistsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  return { aboutMakersSpace, invitedArtists };
};

export default useAboutMakersSpace;
