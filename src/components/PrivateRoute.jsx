// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // Obtener el token del localStorage
  return token ? <Outlet /> : <Navigate to="/" />; // Redirigir si no hay token
};

export default PrivateRoute;