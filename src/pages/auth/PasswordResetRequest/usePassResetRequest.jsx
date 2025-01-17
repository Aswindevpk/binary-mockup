import { api } from "@services/api";
import { useState } from "react";
import { toast } from "sonner";

function usePassResetRequest(setStatus) {
  // form data
  let [formData, setFormData] = useState({
    email: "",
  });

  //errors
  const [errors, setErrors] = useState({
    email: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    setErrors({
      email: null,
    });
    toast.success("Check your Email!");

    // try {
    //   const response = await api.post("/accounts/password-reset/", formData);
    //   if (response.status === 200) {
    //     toast.success("Check your Email!");
    //   }
    // } catch (err) {
    //   if (err.response.status === 400) {
    //     let error_messages = err.response.data;
    //     if (error_messages) {
    //       setStatus("typing");
    //       setErrors((prevErrors) => ({ ...prevErrors, ...error_messages }));
    //     }
    //   }
    // }
  };

  return {
    formData,
    setFormData,
    errors,
    handleSubmit,
  };
}

export default usePassResetRequest;
