import React from "react";

const BlogCard: React.FC<{
  post: any;
  onClick: () => void;
  isMobile: boolean;
}> = ({ post, onClick, isMobile }) => {
  return (
    <div
      onClick={() => {
        if (!isMobile) onClick(); // Bare tillat klikk på kort hvis ikke mobil
      }}
      className={`group bg-white overflow-hidden flex flex-col ${
        !isMobile
          ? "sm:transform sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:hover:shadow-lg sm:cursor-pointer"
          : ""
      }`}
    >
      {/* Kvadratisk bildecontainer */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={post.image1.asset.url}
          alt={post.imageText1 || "Image 1"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header og tekst */}
      <div className="p-8 flex-1">
        <h3 className="text-xl font-semibold mb-2">{post.header}</h3>
        {post.text1 && <p className="text-lg">{post.text1}</p>}
      </div>

      {/* "Read More" Button */}
      {isMobile && (
        <div className="block p-8 pt-0">
          <button
            className="text-lg text-[#B22C2B] hover:text-[#7c1e1d] transition w-full text-left"
            onClick={(e) => {
              e.stopPropagation(); // Forhindrer kortklikk
              onClick();
            }}
          >
            Read more
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
