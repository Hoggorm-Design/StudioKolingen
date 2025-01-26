import useMakersSpaceContent from "../../hooks/useMakersSpaceContent.ts";
import { useLoading } from "../../context/LoadingContext.tsx";

const MakersSpaceContent = () => {
  const { makersSpaceContent } = useMakersSpaceContent();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && makersSpaceContent && (
        <section className="w-full">
          <article className="flex flex-col space-y-8 bg-[#1D192C] p-6">
            <div className="flex flex-row space-x-4">
              {[
                makersSpaceContent.image1,
                makersSpaceContent.image2,
                makersSpaceContent.image3,
              ].map((image, index) => (
                <div key={index} className="flex-1">
                  <img
                    src={image?.asset?.url}
                    alt={image?.altText || `Makers Space Image ${index + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row space-x-4">
              {[
                makersSpaceContent.image4,
                makersSpaceContent.image5,
                makersSpaceContent.image6,
                makersSpaceContent.image7,
              ].map((image, index) => (
                <div key={index} className="flex-1">
                  <img
                    src={image?.asset?.url}
                    alt={image?.altText || `Makers Space Image ${index + 4}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white flex flex-col gap-y-3 p-5 items-center justify-center">
            <p>{makersSpaceContent.text1}</p>
            <p>{makersSpaceContent.text2}</p>
            <p>{makersSpaceContent.text3}</p>
          </article>

          <article className="flex flex-col space-y-8 bg-[#1D192C] p-6">
            <div className="flex flex-row space-x-4">
              {[
                makersSpaceContent.image8,
                makersSpaceContent.image9,
                makersSpaceContent.image10,
              ].map((image, index) => (
                <div key={index} className="flex-1">
                  <img
                    src={image?.asset?.url}
                    alt={image?.altText || `Makers Space Image ${index + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row space-x-4">
              {[
                makersSpaceContent.image4,
                makersSpaceContent.image5,
                makersSpaceContent.image6,
              ].map((image, index) => (
                <div key={index} className="flex-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image?.asset?.url}
                      alt={image?.altText || `Makers Space Image ${index + 4}`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        Project Title {index + 1}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Description of the amazing project and its impact on the
                        community.
                      </p>
                      <a
                        href="#"
                        className="inline-block bg-[#1D192C] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white">See more posts: </p>
          </article>
        </section>
      )}
    </>
  );
};

export default MakersSpaceContent;
