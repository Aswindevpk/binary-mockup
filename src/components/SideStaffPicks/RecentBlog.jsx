import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@components";

const RecentBlog = ({ blog }) => {
  console.log(blog)
  return (
    <>
      <Link
        className="flex gap-2 align-middle"
        to={`/author/test`}
      >
        <Avatar
          username={blog.author?.username}
          image_url={blog.author?.img}
          size={"small"}
        />
        <span className="text-sm">{blog.author.username}</span>
      </Link>
      <Link to={`/blog/test`} className="">
        <h3 className="font-extrabold">{blog.title}</h3>
      </Link>
    </>
  );
};

export default RecentBlog;
