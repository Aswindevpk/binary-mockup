import { useState, useEffect } from "react";
import { api } from "@services/api";
import { toast } from "sonner";
import {authors} from '../../../dummy-data/authors'

const useFetchUser = () => {
  const [user, setUser] = useState(authors[0]);
  const [loading, setLoading] = useState(false);

  return { user, loading };
};

export default useFetchUser;
