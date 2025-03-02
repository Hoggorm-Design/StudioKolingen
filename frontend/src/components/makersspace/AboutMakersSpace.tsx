import { useLoading } from "../../context/LoadingContext.tsx";
import useAboutMakersSpace from "../../hooks/useAboutMakersSpace.ts";

const AboutMakersSpace = () => {
  const { aboutMakersSpace } = useAboutMakersSpace();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && aboutMakersSpace && (
        <>
          <section className="flex justify-center items-center  bg-[#1D192C] pt-[120px] lg:pt-[56px]  px-5 md:px-36 lg:px-52 xl:px-80">
            <div className="bg-white flex flex-col py-14 px-4 xs:px-8 md:px-16  w-full h-full gap-4 max-w-[900px]">
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
