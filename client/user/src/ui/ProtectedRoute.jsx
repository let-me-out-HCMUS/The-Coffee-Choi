import React from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router";
import Spinner from "../features/common/Spinner";

function ProtectedRoute({ children }) {
  const { isAuth, isLoading } = React.useContext(AuthContext);

  if (isLoading) return (
    <Spinner />
  );

  if (!isAuth) return <Navigate to="/auth" />;

  return children;
}

export default ProtectedRoute;
