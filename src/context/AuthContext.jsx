import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { api } from "@services/api";
import { authors } from "../dummy-data/authors";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [isAuthenticated, setIsAuthenticated] = useState(true);
  let [authTokens, setAuthTokens] = useState(null);
  const navigate = useNavigate();

  function setTokens(token) {
    setAuthTokens(token);
    setUser(jwtDecode(token.access));
    setIsAuthenticated(true);
    localStorage.setItem(
      "authTokens",
      JSON.stringify({ access: token.access, refresh: token.refresh })
    );
  }

  let logoutUser = async () => {
    navigate("/login");
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    isAuthenticated: isAuthenticated,
    setIsAuthenticated: setIsAuthenticated,
    logoutUser: logoutUser,
    setTokens: setTokens,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
