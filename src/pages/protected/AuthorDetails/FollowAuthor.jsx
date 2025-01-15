import React, { useState, useEffect } from "react";
import { api } from "@services/api";
import { Button } from "@components/ui";

function FollowAuthor({ user_id }) {
  const [isFollowing, setIsFollowing] = useState(true);

  const handleFollow = async () => {
    setIsFollowing(true);
  };

  const handleUnFollow = async () => {
    setIsFollowing(false);
  };

  return (
    <>
      {isFollowing ? (
        <Button
          size="md"
          color="green"
          variant="outlined"
          onClick={handleUnFollow}
        >
          Following
        </Button>
      ) : (
        <Button size="md" color="green" variant="filled" onClick={handleFollow}>
          Follow
        </Button>
      )}
    </>
  );
}

export default FollowAuthor;
