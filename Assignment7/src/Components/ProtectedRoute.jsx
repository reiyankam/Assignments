import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const location = useLocation();

  const localToken = localStorage.getItem("taskManagerToken");
  const sessionToken = sessionStorage.getItem("taskManagerToken");

  const token = localToken || sessionToken;

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;