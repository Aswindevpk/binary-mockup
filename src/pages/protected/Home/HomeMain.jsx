import React, { useState } from "react";
import { FeaturedArticle, ArticleFilterMenu } from "@components";
import { ArticleSkeleton } from "@components/layouts";
import { topics } from "../../../dummy-data/topics";
import { blogs } from "../../../dummy-data/blogs";

const HomeMain = () => {
  const [activeFilter, setActiveFilter] = useState(topics[0]);
  const articles = blogs.filter(blog =>blog.topic === activeFilter.name)

  let [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <>
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </>
    );
  }

  return (
    <>
      <div className="sticky top-0 bg-white z-10 pt-4">
        <ArticleFilterMenu
          filters={topics}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <div>
        {articles.map((blog) => (
          <FeaturedArticle key={blog.uid} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default HomeMain;
