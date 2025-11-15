import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProtectedRoute from "./components/UserProtectedRoute";
import { Toaster } from "sonner";
import FAQ from "./pages/FAQ";
const Home = lazy(() => import("./pages/Home"));
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const UserLogin = lazy(() => import("./pages/auth/UserLogin"));
const UserRegister = lazy(() => import("./pages/auth/UserRegister"));
const Profile = lazy(() => import("./pages/user/Profile"));
const Login = lazy(() => import("./pages/admin/Login"));
const ForgotPassword = lazy(() => import("./pages/admin/ForgotPassword"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">Loading...</p>
    </div>
  </div>
);
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Toaster position="top-right" richColors />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <UserProtectedRoute>
                  <ProductList />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/products/:slug"
              element={
                <UserProtectedRoute>
                  <ProductDetail />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <UserProtectedRoute>
                  <About />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <UserProtectedRoute>
                  <Contact />
                </UserProtectedRoute>
              }
            />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/profile"
              element={
                <UserProtectedRoute>
                  <Profile />
                </UserProtectedRoute>
              }
            />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                  <div className="text-center max-w-md">
                    <div className="text-6xl mb-4">404</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-6">
                      The page you're looking for doesn't exist.
                    </p>
                    <a
                      href="/"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
export default App;