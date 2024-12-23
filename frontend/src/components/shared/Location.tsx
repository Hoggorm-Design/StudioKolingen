import {Link} from 'react-router-dom';
import React from "react";
import useLocation from "../../hooks/useLocation.ts";
import useLinks from "../../hooks/useLink.ts";

const Location: React.FC = () => {
    const { location, loading } = useLocation();
    const { links } = useLinks();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!location) {
        return <div>No location data available.</div>;
    }

    return (
        <section>
            <h2>{location.header}</h2>
            <p>{location.text}</p>
            <img src="" alt="Location image"/>
            <div>
                {links.length > 0 ? (
                    links.map((link, index) => (
                        <Link key={index} to={link.url}>
                            {link.alt}
                        </Link>
                    ))
                ) : (
                    <p>No links available.</p>
                )}
            </div>
        </section>
    );
};

export default Location;