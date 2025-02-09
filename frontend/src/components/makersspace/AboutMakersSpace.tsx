import useAboutMakersSpace from "../../hooks/useAboutMakersSpace.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const AboutMakersSpace = () => {
  const { aboutMakersSpace } = useAboutMakersSpace();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && aboutMakersSpace && (
        <>
          <section className="flex justify-center items-center  bg-[#1D192C] pt-[138px] pb-[64px] lg:py-16 px-5 md:px-36 xl:px-64">
            <div className="bg-white flex flex-col py-14 px-4 xs:px-8 md:px-16  w-full h-full gap-4">
              <h1>{aboutMakersSpace.aboutHeader}</h1>
              <p>{aboutMakersSpace.aboutText}</p>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default AboutMakersSpace;
