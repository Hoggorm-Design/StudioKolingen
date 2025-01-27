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
          <section className="flex justify-center items-center  bg-[#1D192C] pt-[138px] pb-[64px] lg:py-16 px-5 md:px-36 xl:px-64">
            <div className="bg-white flex flex-col py-14 px-4 xs:px-8 md:px-16  w-full h-full gap-4">
              <h1>{aboutMakersSpace.aboutHeader}</h1>
              <p>{aboutMakersSpace.aboutText}</p>
            </div>
          </section>

          <section className="flex flex-col xl:flex-row w-full gap-16 lg:gap-44 px-5 sm:px-10 py-14 items-start">
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
                  alt={
                    aboutMakersSpace.image.altText ||
                    "Image of Makers space 2024"
                  }
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
