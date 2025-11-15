import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { logoutUser } from "../../redux/slices/auth.slice";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { User, Mail, Phone, LogOut } from "lucide-react";
import { toast } from "sonner";
const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const handleLogout = () => {
        dispatch(logoutUser());
        toast.success("Logged out successfully!");
        navigate("/login");
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                        <p className="text-gray-600 mt-2">Manage your account information</p>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        {}
                        <div className="bg-gradient-to-r from-[#008080] to-[#00A8A8] px-8 py-12">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <User className="w-12 h-12 text-[#008080]" />
                                </div>
                                <div className="text-white">
                                    <h2 className="text-2xl font-bold">{user?.name}</h2>
                                    <p className="text-teal-100 mt-1">Customer Account</p>
                                </div>
                            </div>
                        </div>
                        {}
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Account Information</h3>
                            <div className="space-y-6">
                                {}
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">Full Name</p>
                                        <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
                                    </div>
                                </div>
                                {}
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">Email Address</p>
                                        <p className="text-lg font-semibold text-gray-900">{user?.email}</p>
                                    </div>
                                </div>
                                {}
                                {user?.mobile && (
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600">Mobile Number</p>
                                            <p className="text-lg font-semibold text-gray-900">{user?.mobile}</p>
                                        </div>
                                    </div>
                                )}
                                {}
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#008080] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">User ID</p>
                                        <p className="text-sm font-mono text-gray-900">{user?._id}</p>
                                    </div>
                                </div>
                            </div>
                            {}
                            <div className="mt-8 flex gap-4">
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">My Orders</h3>
                            <p className="text-sm text-gray-600">View and track your orders</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Payment History</h3>
                            <p className="text-sm text-gray-600">View your EMI payments</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Addresses</h3>
                            <p className="text-sm text-gray-600">Manage delivery addresses</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Profile;