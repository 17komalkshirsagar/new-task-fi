import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
interface UserProtectedRouteProps {
    children: React.ReactNode;
}
const UserProtectedRoute = ({ children }: UserProtectedRouteProps) => {
    const { user } = useSelector((state: RootState) => state.auth);
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};
export default UserProtectedRoute;