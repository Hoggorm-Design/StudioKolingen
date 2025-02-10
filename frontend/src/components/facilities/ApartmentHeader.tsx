import { useLoading } from "../../context/LoadingContext.tsx";
import useApartmentInfo from "../../hooks/useApartmentInfo.ts";

const ApartmentHeader = () => {
  const { apartmentInfo } = useApartmentInfo();
  const { isLoading } = useLoading();

  return (
    <div className="pt-[64px] lg:p-0">
      {!isLoading && apartmentInfo && (
        <header className="flex flex-col xl:flex-row w-full min-h-0 xl:min-h-[50vh] gap-16 px-5 sm:px-10 py-14 justify-center items-center">
          <section className="flex flex-col xl:w-1/2 space-y-4">
            <h2>{apartmentInfo.header}</h2>
            <p>{apartmentInfo.text}</p>
          </section>
          <section className="hidden xl:block xl:w-1/2"></section>
        </header>
      )}
    </div>
  );
};

export default ApartmentHeader;
