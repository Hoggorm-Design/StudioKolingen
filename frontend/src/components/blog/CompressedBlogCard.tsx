import React from "react";

const BlogCard: React.FC<{ post: any; onClick: () => void }> = ({
  post,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="group block bg-white overflow-hidden">
      {/* Kvadratisk bildecontainer */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={post.image1.asset.url}
          alt={post.imageText1 || "Image 1"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header og tekst */}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2 ">{post.header}</h3>
        {post.text1 && <p className="text-lg">{post.text1}</p>}
      </div>
    </div>
  );
};
export default BlogCard;
