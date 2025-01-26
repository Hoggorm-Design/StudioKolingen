import React from "react";

const BlogCard: React.FC<{ post: any; onClick: () => void }> = ({
  post,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group block bg-white overflow-hidden transform transition duration-300 hover:scale-105"
    >
      {/* Kvadratisk bildecontainer */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={post.image1.asset.url}
          alt={post.imageText1 || "Image 1"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header og tekst */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-[#B22C2B]">
          {post.header}
        </h3>
        {post.text1 && <p>{post.text1}</p>}
      </div>
    </div>
  );
};
export default BlogCard;
