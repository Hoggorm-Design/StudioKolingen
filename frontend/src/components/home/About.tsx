import useAbout from "../../hooks/useAbout.ts";
import React from "react";

const About: React.FC = () => {
    const { about, loading } = useAbout();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!about) {
        return <div>No content available for About Us.</div>;
    }

    return (
        <section>
            <h2>{about.header}</h2>
            <p>{about.text1}</p>
            <p>{about.text2}</p>
            <p>{about.text3}</p>
            {about.image && <img src={about.image.asset.url} alt={about.alt} />}
        </section>
    );
};

export default About;