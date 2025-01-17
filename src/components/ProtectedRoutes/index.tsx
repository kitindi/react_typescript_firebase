import { useUserAuth } from "@/context/UserAuthContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useUserAuth();
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoutes;
