import React, { useState } from "react";
import { api } from "@services/api";
import { Link } from "react-router-dom";
import { Avatar } from "@components";
import { Button } from "@components/ui";

function FollowUser({ author }) {
  const [isFollowing, setIsFollowing] = useState(author.is_following);

  const handleFollow = async () => {
        setIsFollowing(true);
  };

  const handleUnFollow = async () => {
        setIsFollowing(false);
  };

  return (
    <div className="flex justify-between mb-2">
      <Link
        className="flex gap-2 place-items-center"
        to={`author/test`}
      >
        <Avatar
          username={author.username}
          image_url={author.img}
          size={"medium"}
        />
        <div>
          <p className="text-md font-extrabold m-0">{author.username}</p>
          <div className="text-xs text-secondary m-0">
            {author.about ? author.about.split(" ").slice(0, 2).join(" ") : " "}
          </div>
        </div>
      </Link>
      <div className="flex items-center">
        {isFollowing ? (
          <Button
            size="sm"
            color="black"
            variant="outlined"
            onClick={handleUnFollow}
          >
            Following
          </Button>
        ) : (
          <Button
            size="sm"
            color="black"
            variant="filled"
            onClick={handleFollow}
          >
            Follow
          </Button>
        )}
      </div>
    </div>
  );
}

export default FollowUser;
