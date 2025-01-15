import { formApi } from "@services/api";
import { useState } from "react";
import { toast } from "sonner";

function useEditProfile(setStatus, setUser, user) {
  // Remove the img field from user object
  const { img, ...userWithoutImg } = user;

  const [formData, setFormData] = useState(userWithoutImg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setUser(user);

    setStatus("typing");
  };
  return {
    formData,
    setFormData,
    handleSubmit,
  };
}

export default useEditProfile;
