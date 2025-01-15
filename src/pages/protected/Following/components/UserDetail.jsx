import React, { useState } from "react";
import { Avatar } from "@components/index";
import { api } from "@services/api";
import { Button } from "@components/ui";
import { Link } from "react-router-dom";

function UserDetail({ username, user_id, img, about }) {
  const [isFollowing, setIsFollowing] = useState(true);

  const handleFollow = async () => {
    setIsFollowing(true);
  };

  const handleUnFollow = async () => {
    setIsFollowing(false);
  };

  return (
    <div className="flex items-center justify-between mb-4 ">
      <Link to={`/author/${user_id}`} className="flex gap-2">
        <Avatar username="aswin" image_url={img} size="medium-large" />
        <div className="flex flex-col">
          <span className="text-md font-bold text-primary">{username}</span>
          <span
            className="text-sm text-secondary overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1, // Adjust the number of lines to clamp
              WebkitBoxOrient: "vertical",
            }}
          >
            {about}
          </span>
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

export default UserDetail;
