import React, { useEffect, useState } from "react";
import Story from "./Story";
import { api } from "@services/api";
import { blogs } from "../../../../dummy-data/blogs";

const Published = () => {
  const [loading, setLoading] = useState(false);
  let [articles, setArticles] = useState(blogs.slice(0,4));


  if (loading) {
    return <div>loading..</div>;
  }
  return (
    <>
      {articles.map((article) => (
        <Story key={article.uid} article={article} setLoading={setLoading} />
      ))}
    </>
  );
};

export default Published;
