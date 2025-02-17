import React from "react";

interface BlogCardProps {
  post: any;
  onClick: () => void;
  isMobile: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick, isMobile }) => {
  const mainImage = post.regularImages && post.regularImages[0];
  const previewText = post.textBlocks && post.textBlocks[0];

  return (
    <div
      onClick={() => {
        if (!isMobile) onClick(); // Only allow card click if not mobile.
      }}
      className={`group bg-white overflow-hidden flex flex-col ${
        !isMobile
          ? "sm:transform sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:hover:shadow-lg sm:cursor-pointer"
          : ""
      }`}
    >
      {/* Image container */}
      <div className="w-full aspect-video overflow-hidden">
        {mainImage && mainImage.asset && mainImage.asset.url ? (
          <img
            src={mainImage.asset.url}
            alt={mainImage.altText || "Main Image"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            No Image
          </div>
        )}
      </div>

      {/* Header and preview text */}
      <div className="p-8 flex-1">
        <h3 className="text-xl font-semibold mb-2">{post.header}</h3>
        {previewText && (
          <p className="text-lg">
            {previewText.length > 200
              ? `${previewText.slice(0, 250)}...`
              : previewText}
          </p>
        )}
      </div>

      {/* "Read More" Button for Mobile */}
      {isMobile && (
        <div className="block p-8 pt-0">
          <button
            className="text-lg text-[#B22C2B] hover:text-[#7c1e1d] transition w-full text-left"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click on button click
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
