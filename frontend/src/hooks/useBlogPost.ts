import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { BlogPost } from "../interfaces/blogposts.ts";

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        const query = `
         *[_type == "blogPost"] | order(publishedAt desc){
           _id,
           header,
           textBlocks[],
           images[]{
            asset->{_ref, url}, 
            altText
            },
            textBlocks2[],
           publishedAt
         }
       `;
        const data: BlogPost[] = await sanityClient.fetch(query);
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, [setIsLoading]);

  return { blogPosts };
};

export default useBlogPosts;
