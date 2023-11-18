import { useAuth } from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const OnlyNonAuthRoutes = ({ children }) => {
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authenticatedUser) return navigate("/profile");
    setLoading(false);
  }, []);
  return loading ? <>Loading the Route....</> : <>{children}</>;
};

export default OnlyNonAuthRoutes;
