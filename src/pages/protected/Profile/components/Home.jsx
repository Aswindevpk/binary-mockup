import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "./HomeBlog";
import { api } from "@services/api";
import AuthContext from "@context/AuthContext";
import CircleLoader from "@components/layouts/Skeleton/CircleLoader";
import { authors } from "../../../../dummy-data/authors";
import { blogs } from "../../../../dummy-data/blogs";

function Home() {
  const user = authors[0];
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div>
        <CircleLoader />
      </div>
    );
  }

  return (
    <div>
      {blogs.map((blog) => (
        <HomeBlog key={blog.uid} blog={blog} />
      ))}
    </div>
  );
}

export default Home;
