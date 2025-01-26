import useApartmentInfo from "../../hooks/useApartmentInfo.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const ApartmentHeader = () => {
  const { apartmentInfo } = useApartmentInfo();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && apartmentInfo && (
        <header className="flex flex-col xl:flex-row w-full min-h-[50vh] gap-20 pt-32 px-10 lg:p-10 justify-center items-center">
          <section className="flex flex-col xl:w-1/2 space-y-4">
            <h2>{apartmentInfo.header}</h2>
            <p>{apartmentInfo.text}</p>
          </section>
          <section className="xl:w-1/2"></section>
        </header>
      )}
    </>
  );
};

export default ApartmentHeader;
