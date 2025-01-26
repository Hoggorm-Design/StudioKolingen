import useAboutMakersSpace from "../../hooks/useAboutMakersSpace.ts";
import InvitedArtists from "./InvitedArtists.tsx";
import { useLoading } from "../../context/LoadingContext.tsx";

const AboutMakersSpace = () => {
  const { aboutMakersSpace, invitedArtists } = useAboutMakersSpace();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && aboutMakersSpace && (
        <section className="">
          <section
            style={{ backgroundColor: "#1D192C" }}
            className="flex flex-row items-center justify-center h-screen gap-y-10"
          >
            <div className="w-1/2 h-1/2 flex flex-col gap-3 bg-white items-center p-10">
              <h1 className="text-5xl">{aboutMakersSpace.aboutHeader}</h1>
              <p>{aboutMakersSpace.aboutText}</p>
            </div>
          </section>
          <section className="flex flex-row gap-5 p-10">
            <article className="flex flex-col">
              <h2 className="text-3xl font-extrabold">
                {aboutMakersSpace.subHeader}
              </h2>
              <p>{aboutMakersSpace.subTitleText}</p>
              <InvitedArtists invitedArtists={invitedArtists} />
              <p>{aboutMakersSpace.subTitleText2}</p>
            </article>
            <div className="w-full">
              <img
                src={aboutMakersSpace.image.asset.url}
                alt={aboutMakersSpace.image.altText}
                className="w-full h-auto"
              />
            </div>
          </section>
        </section>
      )}
    </>
  );
};
export default AboutMakersSpace;
