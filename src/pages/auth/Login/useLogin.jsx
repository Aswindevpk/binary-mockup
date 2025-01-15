import { useState, useContext } from "react";
import { toast } from "sonner";
import AuthContext from "@context/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogin(setStatus) {
  const navigate = useNavigate();
  let { setIsAuthenticated } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isEmailVerified, setEmailVerified] = useState(true);

  //errors
  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    setErrors({
      username: null,
    });

    toast.success("Login Successful");
    setIsAuthenticated(true)
    navigate("/");

    // try {
    //   const response = await api.post("/accounts/login/", formData);

    //   if (response.status === 200) {
    //     //set authenticaiton tokens

    //     //go to home
    //     navigate('/')
    //   }
    // } catch (err) {
    //   if (err.response.status === 401) {
    //     setEmailVerified(false);
    //     setStatus("typing");
    //   }
    //   else if (err.response.status === 400) {
    //     let error_messages = err.response.data;
    //     if (error_messages) {
    //       setStatus("typing");
    //       setEmailVerified(true);
    //       setErrors((prevErrors) => ({ ...prevErrors, ...error_messages }));
    //     }
    //   }
    // }
  };
  return {
    formData,
    setFormData,
    errors,
    isEmailVerified,
    handleSubmit,
  };
}

export default useLogin;
