import { useState, useEffect } from "react";
import { api } from "@services/api";
import { toast } from "sonner";
import { blogs } from "../../../dummy-data/blogs";

// Custom hook to handle fetching and clearing of reading history
export const useReadingHistory = () => {
  const [articles, setArticles] = useState(blogs);
  const [loading, setLoading] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false); // Clears the reading history of the logged-in user

  const clearHistory = async () => {
    //clears the articles
    setArticles([]);
    toast.success("Reading history cleared");
    setShouldRefetch(true); // Trigger refetch after clearing
  }; // Fetches the read articles by the logged-in user

  return {
    articles,
    loading,
    clearHistory,
  };
};
