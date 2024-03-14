import React, { FC } from "react";

import { useLocation, Navigate } from "react-router-dom";

import { useAuth } from "../hooks";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoutes: FC<Props> = ({ children }) => {
  const { isAuth, isLoading } = useAuth();
  const location = useLocation();

  if (!isAuth && isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
