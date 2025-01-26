import { useEffect, useState } from "react";
import { BlogPost } from "../interfaces/blogposts.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        const query = `
         *[_type == "blogPost"]{
           id,
           header,
           text1, text2, text3, text4, text5, text6,
           image1 { asset->{ref, url}, imageText1 },
           image2 { asset->{_ref, url}, imageText2 },
           image3 { asset->{_ref, url}, imageText3 },
           image4 { asset->{_ref, url}, imageText4 },
           image5 { asset->{_ref, url}, imageText5 },
           image6 { asset->{_ref, url}, imageText6 },
           image7 { asset->{_ref, url}, imageText7 },
           image8 { asset->{_ref, url}, imageText8 },
           image9 { asset->{_ref, url}, imageText9 },
           image10 { asset->{_ref, url}, imageText10 },
           link
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
