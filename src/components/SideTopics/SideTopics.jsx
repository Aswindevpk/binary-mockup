import React, { useState, useEffect } from "react";
import { SideSkeleton } from "@components/layouts";
import { Link } from "react-router-dom";
import { topics } from "../../dummy-data/topics";

const SideTopics = () => {
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
      <h3 className="mb-4 font-extrabold">Recommended Topics</h3>
      <div className="flex flex-wrap gap-2.5 mb-3">
        {topics.map((topic) => (
          <a key={topic.uid} className="rounded-full bg-neutral text-primary font-semibold px-4 py-2" href="/tag">
            <span>{topic.name}</span>
          </a>
        ))}
      </div>
      <Link className="text-sm text-success hover:text-primary" to="/explore-topics">
        See more topics
      </Link>
    </div>
  );
};

export default SideTopics;
