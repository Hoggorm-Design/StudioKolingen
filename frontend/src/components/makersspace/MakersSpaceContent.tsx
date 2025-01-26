import useMakersSpaceContent from "../../hooks/useMakersSpaceContent.ts";
import MakersSpaceCard from "./CompressedMakersSpaceCard.tsx";
import { useEffect, useState } from "react";
import MyCarousel from "../blog/BlogCarousel.tsx";

const MakersSpaceContent = () => {
  const { makersSpaceContent, loading } = useMakersSpaceContent();
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  useEffect(() => {
    if (makersSpaceContent.length > 0) {
      setSelectedPost(makersSpaceContent[0]);
    }
  }, [makersSpaceContent]);

  const handleCardClick = (post: any) => {
    setSelectedPost(post);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="w-full">
      {/* Selected Post Section */}
      {selectedPost && (
        <article className="flex flex-col space-y-8 bg-[#FFFFFF] p-6">
          {/* Carousel Section */}
          <article className="flex flex-col space-y-8 bg-[#1D192C] p-6">
            <div className="flex flex-row items-start">
              <img
                className=" max-h-[300px] max-w-[300px]"
                src={selectedPost.image1.asset.url}
                alt={selectedPost.image1.asset.altText}
              />
              <img
                className=" max-h-[300px] max-w-[300px]"
                src={selectedPost.image2.asset.url}
                alt={selectedPost.image2.asset.altText}
              />
              <img
                className=" max-h-[300px] max-w-[300px]"
                src={selectedPost.image3.asset.url}
                alt={selectedPost.image3.asset.altText}
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
          <div className="text-black space-y-3">
            <p>{selectedPost.text1}</p>
            <p>{selectedPost.text2}</p>
            <p>{selectedPost.text3}</p>
          </div>
        </article>
      )}

      {/* Makers Space Cards Section */}
      <article className="flex flex-col space-y-8 bg-[#1D192C] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
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
    </section>
  );
};

export default MakersSpaceContent;
