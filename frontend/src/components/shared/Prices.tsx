import usePrices from "../../hooks/usePrices.ts";
import React from "react";

const Prices: React.FC = () => {
    const { prices, loading } = usePrices();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!prices) {
        return <div>No prices data available.</div>;
    }

    return (
        <section>
            <h2>{prices.header}</h2>
            <p>{prices.onenight}</p>
            <p>{prices.oneweek}</p>
            <p>{prices.twoweeks}</p>
            <p>{prices.fourweeks}</p>
            <p>{prices.extraPerson}</p>
            <p>{prices.text}</p>
        </section>
    );
};

export default Prices;