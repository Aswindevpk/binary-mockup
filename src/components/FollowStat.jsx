import React, {useState } from "react";
import { Link } from "react-router-dom";

function FollowStat() {
  const [follow, setFollow] = useState({
    followers_count:20,
    following_count:23
  });

  return (
    follow && (
      <div className="text-sm flex gap-2">
        <Link className="text-success font-semibold" to="/followers/">{follow.followers_count} Followers</Link>
        <div className="flex items-center">•</div>
        <Link className="text-success font-semibold" to="/following/">{follow.following_count} Following</Link>
      </div>
    )
  );
}

export default FollowStat;
