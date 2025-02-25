import useAbout from "../../hooks/useAbout.ts";
import React from "react";
import { useLoading } from "../../context/LoadingContext.tsx";

const About: React.FC = () => {
  const { about } = useAbout();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && about && (
        <section className="flex flex-col lg:flex-row w-screen gap-16 lg:gap-44 px-5 sm:px-10 py-14 items-start sm:flex-col">
          <section className="flex flex-col lg:w-1/2 space-y-4">
            <h2 className="text-nowrap">{about.header}</h2>
            <p>{about.text1}</p>
            <p>{about.text2}</p>
            <p>{about.text3}</p>
          </section>
          <section className="lg:w-1/2">
            {about.image && <img src={about.image.asset.url} alt={about.alt} />}
          </section>
        </section>
      )}
    </>
  );
};

export default About;
