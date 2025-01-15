import React, { useState, useEffect } from "react";
import FollowUser from "../followUser";
import { SideSkeleton } from "@components/layouts";
import { Link } from "react-router-dom";
import { authors } from "../../dummy-data/authors";

const SideFollow = () => {
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
      <h3 className="mb-4 font-extrabold">Who to Follow</h3>
      <div className="flex flex-col gap-1">
        {authors.map((author) => (
          <FollowUser key={author.id} author={author} />
        ))}
      </div>
      <Link className="text-sm text-success" href="">
        See more suggestions
      </Link>
    </div>
  );
};

export default SideFollow;
