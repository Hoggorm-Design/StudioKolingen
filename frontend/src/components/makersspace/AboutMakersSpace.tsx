import useAboutMakersSpace from "../../hooks/useAboutMakersSpace.ts";
import InvitedArtists from "./InvitedArtists.tsx";
import { useLoading } from "../../context/LoadingContext.tsx";

const AboutMakersSpace = () => {
  const { aboutMakersSpace, invitedArtists } = useAboutMakersSpace();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && aboutMakersSpace && invitedArtists && (
        <>
          <section className="flex justify-center items-center  bg-[#1D192C] pt-[138px] pb-[50px] lg:py-20 px-8 md:px-36 xl:px-64">
            <div className="bg-white flex flex-col p-4 xs:p-8 md:p-16 w-full h-full gap-10">
              <h1>{aboutMakersSpace.aboutHeader}</h1>
              <p>{aboutMakersSpace.aboutText}</p>
            </div>
          </section>

          <section className="flex flex-col xl:flex-row w-full min-h-screen gap-20 p-10 md:py-32 justify-center items-center">
            <article className="flex flex-col xl:w-1/2 space-y-8">
              <h2 className="text-nowrap">{aboutMakersSpace.subHeader}</h2>
              <p>{aboutMakersSpace.subTitleText}</p>
              <InvitedArtists invitedArtists={invitedArtists} />
              <p>{aboutMakersSpace.subTitleText2}</p>
            </article>
            <section className="xl:w-1/2">
              {aboutMakersSpace.image && (
                <img
                  src={aboutMakersSpace.image.asset.url}
                  alt={aboutMakersSpace.image.altText}
                />
              )}
            </section>
          </section>
        </>
      )}
    </>
  );
};
export default AboutMakersSpace;
