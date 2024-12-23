import React from "react";
import useApartmentInfo from "../../hooks/useApartmentInfo.ts";


const ApartmentHeader: React.FC = () => {
    const { apartmentInfo, loading } = useApartmentInfo();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!apartmentInfo) {
        return <div>No information available.</div>;
    }

    return (
        <header>
            <section>
                <h1>{apartmentInfo.header}</h1>
                <p>{apartmentInfo.text}</p>
            </section>
        </header>
    );
};

export default ApartmentHeader;
