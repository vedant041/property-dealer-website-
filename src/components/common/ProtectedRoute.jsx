import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  // if not logged in → go to homepage
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // if logged in → show protected page
  return children;
}