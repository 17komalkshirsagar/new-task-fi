import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSignInUserMutation } from "../../redux/apis/user.api";
import { setUser } from "../../redux/slices/auth.slice";
import { toast } from "sonner";
type LoginMethod = 'password' | 'email-otp' | 'mobile-otp';
const UserLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signInUser, { isLoading }] = useSignInUserMutation();
    const [loginMethod, setLoginMethod] = useState<LoginMethod>('password');
    const [otpStep, setOtpStep] = useState<'send' | 'verify'>('send');
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const result = await signInUser({ email, password }).unwrap();
            console.log("Login successful:", result);
            toast.success("Login successful!");
            // Save user to Redux state
            dispatch(setUser({
                _id: result.result._id,
                name: result.result.firstName + " " + result.result.lastName,
                email: result.result.email,
                mobile: result.result.phone?.toString(),
                role: result.result.role || "user"
            }));
            navigate("/products");
        } catch (err: any) {
            console.error("Login error:", err);
            const errorMessage = err || "Login failed. Please try again.";
            setError(errorMessage);
            toast.error(errorMessage);
        }
    };
    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            // TODO: API call to send OTP
            await new Promise(resolve => setTimeout(resolve, 1000));
            setOtpStep('verify');
        } catch (err: any) {
            setError("Failed to send OTP. Please try again.");
        }
    };
    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            // TODO: API call to verify OTP and login
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate("/");
        } catch (err: any) {
            setError("Invalid OTP. Please try again.");
        }
    };
    const handleResendOTP = async () => {
        setError("");
        try {
            // TODO: API call to resend OTP
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("OTP resent successfully!");
        } catch (err: any) {
            setError("Failed to resend OTP.");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-4 py-12">
            <div className="w-full max-w-md">
                {}
                <div className="text-center mb-8">
                    <div className="inline-block">
                        <Link to="/" className="text-3xl font-bold text-[#008080] hover:text-[#006666]">
                            1Fi
                        </Link>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 mt-4">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to continue shopping</p>
                </div>
                {}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                    {}
                    <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
                        <button
                            type="button"
                            onClick={() => {
                                setLoginMethod('password');
                                setOtpStep('send');
                                setError("");
                            }}
                            className={`py-2 px-3 rounded-md text-sm font-medium transition-all ${
                                loginMethod === 'password'
                                    ? 'bg-white text-[#008080] shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Password
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setLoginMethod('email-otp');
                                setOtpStep('send');
                                setError("");
                            }}
                            className={`py-2 px-3 rounded-md text-sm font-medium transition-all ${
                                loginMethod === 'email-otp'
                                    ? 'bg-white text-[#008080] shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Email OTP
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setLoginMethod('mobile-otp');
                                setOtpStep('send');
                                setError("");
                            }}
                            className={`py-2 px-3 rounded-md text-sm font-medium transition-all ${
                                loginMethod === 'mobile-otp'
                                    ? 'bg-white text-[#008080] shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Mobile OTP
                        </button>
                    </div>
                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    {}
                    {loginMethod === 'password' && (
                        <form onSubmit={handlePasswordLogin} className="space-y-6">
                            {}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                            {}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <Link to="/forgot-password" className="text-sm text-[#008080] hover:text-[#006666]">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#006666] focus:ring-4 focus:ring-[#B2DFDB] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Signing in...
                                    </span>
                                ) : (
                                    "Sign In"
                                )}
                            </button>
                        </form>
                    )}
                    {}
                    {loginMethod === 'email-otp' && (
                        <>
                            {otpStep === 'send' ? (
                                <form onSubmit={handleSendOTP} className="space-y-6">
                                    <div>
                                        <label htmlFor="email-otp" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email-otp"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#006666] focus:ring-4 focus:ring-[#B2DFDB] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending OTP...
                                            </span>
                                        ) : (
                                            "Send OTP"
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <form onSubmit={handleVerifyOTP} className="space-y-6">
                                    <div>
                                        <label htmlFor="otp-email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Enter OTP
                                        </label>
                                        <input
                                            type="text"
                                            id="otp-email"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                            required
                                            maxLength={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors text-center text-2xl tracking-widest"
                                            placeholder="000000"
                                        />
                                        <p className="mt-2 text-sm text-gray-500 text-center">
                                            OTP sent to {email}
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading || otp.length !== 6}
                                        className="w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#006666] focus:ring-4 focus:ring-[#B2DFDB] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Verifying...
                                            </span>
                                        ) : (
                                            "Verify & Login"
                                        )}
                                    </button>
                                    <div className="flex justify-between text-sm">
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            className="text-[#008080] hover:text-[#006666]"
                                        >
                                            Resend OTP
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setOtpStep('send')}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            Change Email
                                        </button>
                                    </div>
                                </form>
                            )}
                        </>
                    )}
                    {}
                    {loginMethod === 'mobile-otp' && (
                        <>
                            {otpStep === 'send' ? (
                                <form onSubmit={handleSendOTP} className="space-y-6">
                                    <div>
                                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mobile Number
                                        </label>
                                        <div className="flex gap-2">
                                            <select className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none">
                                                <option value="+91">+91</option>
                                                <option value="+1">+1</option>
                                                <option value="+44">+44</option>
                                            </select>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                                                required
                                                maxLength={10}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                                placeholder="9876543210"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading || mobile.length !== 10}
                                        className="w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#006666] focus:ring-4 focus:ring-[#B2DFDB] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending OTP...
                                            </span>
                                        ) : (
                                            "Send OTP"
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <form onSubmit={handleVerifyOTP} className="space-y-6">
                                    <div>
                                        <label htmlFor="otp-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                            Enter OTP
                                        </label>
                                        <input
                                            type="text"
                                            id="otp-mobile"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                            required
                                            maxLength={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors text-center text-2xl tracking-widest"
                                            placeholder="000000"
                                        />
                                        <p className="mt-2 text-sm text-gray-500 text-center">
                                            OTP sent to +91 {mobile}
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading || otp.length !== 6}
                                        className="w-full bg-[#008080] text-white py-3 rounded-lg font-semibold hover:bg-[#006666] focus:ring-4 focus:ring-[#B2DFDB] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Verifying...
                                            </span>
                                        ) : (
                                            "Verify & Login"
                                        )}
                                    </button>
                                    <div className="flex justify-between text-sm">
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            className="text-[#008080] hover:text-[#006666]"
                                        >
                                            Resend OTP
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setOtpStep('send')}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            Change Number
                                        </button>
                                    </div>
                                </form>
                            )}
                        </>
                    )}
                    {}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">New to 1Fi?</span>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="mt-6">
                        <Link
                            to="/register"
                            className="block w-full text-center px-6 py-3 border-2 border-[#008080] text-[#008080] rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
                {}
                <div className="mt-6 text-center">
                    <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm flex items-center justify-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default UserLogin;