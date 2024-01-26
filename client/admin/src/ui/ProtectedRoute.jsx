import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthenticationContext";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) navigate("login");
  }, [isAuth, navigate]);

  return children;
}
