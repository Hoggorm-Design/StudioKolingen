import useArtistInfo from "../../hooks/useArtistHeader.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const ArtistHeader = () => {
  const { artistInfo } = useArtistInfo();
  const { isLoading } = useLoading();

  if (isLoading || !artistInfo) {
    return null;
  }

  return (
    <div className="pt-[88px] lg:p-0">
      <header className="flex flex-col xl:flex-row w-full min-h-0 xl:min-h-[50vh] gap-16 px-5 sm:px-10 py-14 justify-center items-center">
        <section className="flex flex-col xl:w-1/2 space-y-4">
          <h2>{artistInfo.header}</h2>
          <p>{artistInfo.text}</p>
        </section>
        <section className="hidden xl:block xl:w-1/2"></section>
      </header>
    </div>
  );
};

export default ArtistHeader;
