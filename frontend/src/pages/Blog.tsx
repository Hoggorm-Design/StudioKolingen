import React from "react";
import Footer from "../components/shared/Footer.tsx";
import BlogPosts from "../components/blog/BlogPosts.tsx";

const Blog: React.FC = () => {
  return (
    <>
      <BlogPosts></BlogPosts>
      <Footer />
    </>
  );
};

export default Blog;
