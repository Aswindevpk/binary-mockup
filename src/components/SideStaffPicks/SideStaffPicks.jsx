import React, { useState, useEffect } from "react";
import { api } from "@services/api";
import RecentBlog from "./RecentBlog";
import { SideSkeleton } from "@components/layouts";
import { Link } from "react-router-dom";
import { blogs } from "../../dummy-data/blogs";



const SideStaffPicks = () => {
  const recentblog = blogs.slice(3,6)
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <>
        <SideSkeleton />
      </>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="mb-4 font-extrabold">Recent picks</h2>
      <div className="flex flex-col gap-2">
        {recentblog.map((blog) => (
          <RecentBlog key={blog.uid} blog={blog} />
        ))}
      </div>
      <Link to="/author" className="text-sm text-success">
        See the full list
      </Link>
    </div>
  );
};

export default SideStaffPicks;
