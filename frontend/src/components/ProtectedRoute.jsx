import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../services/api";

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getUser("/user");
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
