import React from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';

function ProtectedRoute({ children }) {
  const { isAuth, isLoading } = React.useContext(AuthContext);

  if (isLoading) return (
    <div className="h-screen w-full flex justify-center items-center">
      <CircularProgress />
    </div>
  );

  if (!isAuth) return <Navigate to="/auth" />;

  return children;
}

export default ProtectedRoute;
