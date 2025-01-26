import useMakersSpaceContent from "../../hooks/useMakersSpaceContent.ts";
import MakersSpaceCard from "./CompressedMakersSpaceCard.tsx";
import { useEffect, useState } from "react";
import MyCarousel from "../blog/BlogCarousel.tsx";
import { useLoading } from "../../context/LoadingContext.tsx";

const MakersSpaceContent = () => {
  const { makersSpaceContent } = useMakersSpaceContent();
  const { isLoading } = useLoading();
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  useEffect(() => {
    if (makersSpaceContent) {
      if (makersSpaceContent.length > 0) {
        setSelectedPost(makersSpaceContent[0]);
      }
    }
  }, [makersSpaceContent]);

  const handleCardClick = (post: any) => {
    setSelectedPost(post);
  };

  return (
    <>
      {!isLoading && makersSpaceContent && (
        <section className="w-full">
          {/* Selected Post Section */}
          {selectedPost && (
            <article className="flex flex-col space-y-8 bg-[#FFFFFF]">
              {/* Carousel Section */}
              <article className="flex flex-col space-y-8 bg-[#1D192C] p-6">
                <div className="flex flex-row justify-center items-center space-x-4 gap-10 m-50">
                  <img
                    className="w-[400px] h-[400px] object-cover "
                    src={selectedPost.image1?.asset?.url}
                    alt={selectedPost.image1?.asset?.altText}
                  />
                  <img
                    className="w-[400px] h-[400px] object-cover "
                    src={selectedPost.image2?.asset?.url}
                    alt={selectedPost.image2?.asset?.altText}
                  />
                  <img
                    className="w-[400px] h-[400px] object-cover "
                    src={selectedPost.image3?.asset?.url}
                    alt={selectedPost.image3?.asset?.altText}
                  />
                </div>

                <MyCarousel
                  images={[
                    selectedPost.image1,
                    selectedPost.image2,
                    selectedPost.image3,
                    selectedPost.image4,
                    selectedPost.image5,
                    selectedPost.image6,
                    selectedPost.image7,
                    selectedPost.image8,
                    selectedPost.image9,
                    selectedPost.image10,
                  ].filter((image) => image && image.asset)}
                />
              </article>
              <div className="text-black space-y-3 p-6">
                <p>{selectedPost.text1}</p>
                <p>{selectedPost.text2}</p>
                <p>{selectedPost.text3}</p>
              </div>
            </article>
          )}

          {/* Makers Space Cards Section */}
          {selectedPost && (
            <article className="flex flex-col space-y-8 bg-[#1D192C] p-6 gap-20 mt-">
              <div className="flex flex-row justify-center items-center space-x-4 gap-10 mt-20">
                <img
                  className="w-[400px] h-[400px] object-cover "
                  src={selectedPost.image4?.asset?.url}
                  alt={selectedPost.image4?.asset?.altText}
                />
                <img
                  className="w-[400px] h-[400px] object-cover "
                  src={selectedPost.image5?.asset?.url}
                  alt={selectedPost.image5?.asset?.altText}
                />
                <img
                  className="w-[400px] h-[400px] object-cover "
                  src={selectedPost.image6?.asset?.url}
                  alt={selectedPost.image6?.asset?.altText}
                />
              </div>
              <h3 className="text-white ">More posts</h3>
              <div className="flex flex-row justify-center items-center space-x-4 gap-10 m-50">
                {makersSpaceContent.map((post) => (
                  <MakersSpaceCard
                    key={post._id}
                    post={post}
                    onClick={() => handleCardClick(post)}
                  />
                ))}
              </div>
              <p className="text-white">See more posts: </p>
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default MakersSpaceContent;
