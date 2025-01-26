import useAbout from "../../hooks/useAbout.ts";
import React from "react";
import { useLoading } from "../../context/LoadingContext.tsx";

const About: React.FC = () => {
  const { about } = useAbout();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && about && (
        <section className="flex flex-col xl:flex-row w-full min-h-screen gap-20 p-10 justify-center items-center">
          <section className="flex flex-col xl:w-1/2 space-y-4">
            <h2 className="text-nowrap">{about.header}</h2>
            <p>{about.text1}</p>
            <p>{about.text2}</p>
            <p>{about.text3}</p>
          </section>
          <section className="xl:w-1/2">
            {about.image && <img src={about.image.asset.url} alt={about.alt} />}
          </section>
        </section>
      )}
    </>
  );
};

export default About;
