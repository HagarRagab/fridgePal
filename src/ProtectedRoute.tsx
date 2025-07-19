import { Navigate } from "react-router";
import Spinner from "./components/shared/Spinner";
import { useAuthContext } from "./context/AuthContext";
import type { ReactNode } from "react";

function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated, isLoading } = useAuthContext();

    if (isLoading) return <Spinner sx={{ marginTop: "14rem" }} />;
    if (!isAuthenticated) return <Navigate to="/log-in" replace />;

    return children;
}

export default ProtectedRoute;
