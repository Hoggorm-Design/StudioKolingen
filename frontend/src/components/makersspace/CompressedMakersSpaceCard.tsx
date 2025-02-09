import React from "react";

const MakersSpaceCard: React.FC<{
  post: any;
  onClick: () => void;
  isMobile: boolean;
}> = ({ post, onClick, isMobile }) => {
  return (
    <div
      onClick={() => {
        if (!isMobile) onClick(); // Only allow click if not on mobile
      }}
      className={`group bg-white overflow-hidden flex flex-col ${
        !isMobile
          ? "sm:transform sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:hover:shadow-lg sm:cursor-pointer"
          : ""
      }`}
    >
      {/* Square image container */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={post.regularImages?.[0]?.asset?.url}
          alt={post.regularImages?.[0]?.altText || "Image 1"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="p-8 flex-1">
        <h3 className="text-xl font-semibold mb-2">{post.header}</h3>
      </div>

      {/* "Read More" Button */}
      {isMobile && (
        <div className="block p-8 pt-0">
          <button
            className="text-lg text-[#B22C2B] hover:text-[#7c1e1d] transition w-full text-left"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
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

export default MakersSpaceCard;
