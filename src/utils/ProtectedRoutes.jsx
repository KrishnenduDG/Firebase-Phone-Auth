import { useAuth } from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authenticatedUser) return navigate("/login");
    setLoading(false);
  }, []);
  return loading ? <>Loading the Route....</> : <>{children}</>;
};

export default ProtectedRoutes;
