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
    <section className="flex justify-center items-center min-h-screen bg-[#1D192C] py-5 xs:py-10 md:py-20 px-3 xs:px-8 md:px-36 xl:px-64">
      <div className="bg-white flex flex-col p-4 xs:p-8 md:p-16 w-full h-full gap-10">
        <h2>{prices.header}</h2>
        <p>{prices.text}</p>
        <div>
          <strong>Prices:</strong>
          <p>1 night: {prices.onenight}</p>
          <p>1 week: {prices.oneweek}</p>
          <p>2 weeks: {prices.twoweeks}</p>
          <p>4 weeks: {prices.fourweeks}</p>
          <p>+ 1 extra person: {prices.extraPerson}</p>
        </div>
        <p>{prices.text2}</p>
      </div>
    </section>
  );
};

export default Prices;
