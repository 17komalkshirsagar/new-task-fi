import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
}
const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { admin } = useSelector((state: RootState) => state.auth);
    if (!admin) {
        return <Navigate to="/admin/login" replace />;
    }
    if (allowedRoles && allowedRoles.length > 0) {
        if (!allowedRoles.includes(admin.role)) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                    <div className="text-center max-w-md">
                        <div className="text-6xl mb-4">🚫</div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
                        <p className="text-gray-600 mb-6">
                            You don't have permission to access this page.
                        </p>
                        <button
                            onClick={() => window.history.back()}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            );
        }
    }
    return <>{children}</>;
};
export default ProtectedRoute;