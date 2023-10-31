import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CircleLoader from "react-spinners/CircleLoader";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useAuth();
  if (loading) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        <CircleLoader color="#FF3811" />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoutes;
