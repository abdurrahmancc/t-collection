import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const IsAdmin = () => {
  const [user, loading] = useState();
  const location = useLocation();
  const admin = true;

  if (loading) {
    // return <Loading />;
  }

  if (!admin) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default IsAdmin;
