import { useState, useEffect } from "react";
import { api } from "@services/api";
import { comments } from "../../dummy-data/comments";

const useComments = (article_id) => {
  const [submitCount, setSubmitCount] = useState(0); // To trigger re-fetching comments after submitting

  const submitComment = async (content) => {
    console.log("submitted");
  };

  return {
    comments,
    submitComment,
  };
};

export default useComments;
