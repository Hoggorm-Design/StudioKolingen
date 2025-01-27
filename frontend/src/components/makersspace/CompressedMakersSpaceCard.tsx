import React from "react";

const MakersSpaceCard: React.FC<{ post: any; onClick: () => void }> = ({
  post,
  onClick,
}) => {
  return (
    <div
      className="group block bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Header */}
      <h2 className="text-xl font-semibold p-4">{post.header}</h2>

      {/* Image */}
      {post.image1 && post.image1.asset && (
        <div>
          <img
            className="w-full h-48 object-cover"
            src={post.image1.asset.url}
            alt={post.imageText1 || "Image 1"}
          />
        </div>
      )}

      {/* First text */}
      {post.text1 && <p className="p-4">{post.text1}</p>}
    </div>
  );
};
export default MakersSpaceCard;
