import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../page/DashboardPage";
import JwtTest from "../components/JwtTest";

const PublicRoutes = ({ children }) => {
  const [data, setData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const testJwt = async () => {
      try {
        const response = await fetch("http://localhost:8010/auth/jwt/test", {
          method: "POST",
          credentials: "include", // Important: This sends cookies with the request
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.message === "Unauthorized") {
          throw new Error("Unauthorized");
        }
        console.log("JWT Test Response:", data);
        setData(data)
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error testing JWT:", error);
        setIsAuthenticated(false);
      }
    };

    testJwt();
  }, []);

  return !isAuthenticated ? children : <JwtTest />;
};

export default PublicRoutes;
