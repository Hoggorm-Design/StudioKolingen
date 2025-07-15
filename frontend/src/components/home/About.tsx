import useAbout from "../../hooks/useAbout.ts";
import React from "react";
import { useLoading } from "../../context/LoadingContext.tsx";

const About: React.FC = () => {
  const { about } = useAbout();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && about && (
        <section className="flex flex-col lg:flex-row md:justify-center justify-center items-center w-screen gap-16 lg:gap-30 px-5 sm:px-10 py-14 min-h-[700px]">
              <section className="flex flex-col lg:w-1/1 space-y-4 mr-[25px] ml-[25px]">
                <h2 className="text-nowrap">{about.header}</h2>
                <p className="text-[18px] ">{about.text1}</p>
                <p className="text-[18px]">{about.text2}</p>
                <p className="text-[18px]">{about.text3}</p>
              </section>
              <section className="flex overflow-hidden flex-shrink-0 max-h-[500px] max-w-[500px] mr-[25px] ml-[25px] w-full lg:w-1/2">
                {about.image && (
                  <img
                    src={about.image.asset.url}
                    alt={about.alt}
                    className="object-cover "
                  />
                )}
            </section>
        </section>
      )}
    </>
  );
};

export default About;
