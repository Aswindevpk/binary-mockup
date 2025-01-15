import React, { useEffect, useState } from "react";
import Story from "./Story";
import { api } from "@services/api";
import { blogs } from "../../../../dummy-data/blogs";

const Draft = () => {
  let [loading, setLoading] = useState(false);
  let [articles, setArticles] = useState(blogs.slice(0,3));

  if (loading) {
    return <div>loading..</div>;
  }
  return (
    <>
      <section className="flex flex-col gap-6">
        {articles.map((article) => (
          <Story key={article.uid} article={article} setLoading={setLoading} />
        ))}
      </section>
    </>
  );
};

export default Draft;
