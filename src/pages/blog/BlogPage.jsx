import BlogCard from "../../components/lib/BlogCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="pt-14 min-h-screen">
        <div className="container  mx-auto ">
          <h1 className="container text-3xl  flex justify-center pb-16 max-sm:pt-14 max-sm:pb-14">
            Blogs
          </h1>
          <div className="flex flex-col max-sm:mx-3">
            <div
              className={
                "grid w-full xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mb-10 "
              }
            >
              <BlogCard
                title={
                  "Web Design Done Well: Delightful Data Visualization Examples"
                }
                span={"UI/UX DESIGN"}
              />
              <BlogCard
                title={
                  "Web Design Done Well: Delightful Data Visualization Examples"
                }
                span={"UI/UX DESIGN"}
              />
              <BlogCard
                title={
                  "Web Design Done Well: Delightful Data Visualization Examples"
                }
                span={"UI/UX DESIGN"}
              />
            </div>
            <div
              className={
                "grid w-full xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7"
              }
            >
              <BlogCard
                title={
                  "Web Design Done Well: Delightful Data Visualization Examples"
                }
                span={"UI/UX DESIGN"}
              />
              <BlogCard
                title={
                  "Web Design Done Well: Delightful Data Visualization Examples"
                }
                span={"UI/UX DESIGN"}
              />
              <BlogCard
                title={
                  "Web Design Done Well: Delightful Data Visualization Examples"
                }
                span={"UI/UX DESIGN"}
              />
            </div>
          </div>
        </div>
    </div>
  );
};
export default BlogPage;
