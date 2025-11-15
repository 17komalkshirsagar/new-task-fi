import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
interface HeaderProps {
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    colorScheme?: "professional" | "dark" | "vibrant";
}
const Header = ({ searchQuery = "", onSearchChange, colorScheme = "professional" }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector((state: RootState) => state.auth);
    const colorSchemes = {
        professional: {
            bg: "bg-white",
            text: "text-[#1A1A1A]",
            logoText: "text-[#1A1A1A]",
            logoAccent: "text-[#008080]",
            searchBg: "bg-[#F5F5F5]",
            searchText: "text-[#1A1A1A]",
            searchIcon: "text-[#6B7280]",
            primaryBtn: "bg-[#008080] text-white hover:bg-[#006666]",
            secondaryBtn: "bg-[#E0F2F1] text-[#008080] hover:bg-[#B2DFDB]",
            borderColor: "border-[#E5E7EB]",
            menuBg: "bg-white",
            menuBorder: "border-[#E5E7EB]",
            mobileMenuBtn: "text-[#1A1A1A]",
        },
        dark: {
            bg: "bg-[#1F2937]",
            text: "text-[#F9FAFB]",
            logoText: "text-[#F9FAFB]",
            logoAccent: "text-[#008080]",
            searchBg: "bg-[#374151]",
            searchText: "text-[#F9FAFB]",
            searchIcon: "text-[#9CA3AF]",
            primaryBtn: "bg-[#008080] text-white hover:bg-[#006666]",
            secondaryBtn: "bg-[#374151] text-[#F9FAFB] hover:bg-[#4B5563]",
            borderColor: "border-[#4B5563]",
            menuBg: "bg-[#1F2937]",
            menuBorder: "border-[#4B5563]",
            mobileMenuBtn: "text-[#F9FAFB]",
        },
        vibrant: {
            bg: "bg-white",
            text: "text-[#111827]",
            logoText: "text-[#111827]",
            logoAccent: "text-[#008080]",
            searchBg: "bg-[#F5F5F5]",
            searchText: "text-[#111827]",
            searchIcon: "text-[#6B7280]",
            primaryBtn: "bg-[#008080] text-white hover:bg-[#006666]",
            secondaryBtn: "bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]",
            borderColor: "border-[#E5E7EB]",
            menuBg: "bg-white",
            menuBorder: "border-[#E5E7EB]",
            mobileMenuBtn: "text-[#111827]",
        },
    };
    const colors = colorSchemes[colorScheme];
    return (
        <header className={`sticky top-0 z-[1000] ${colors.bg} shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-b ${colors.borderColor}`}>
            <div className="max-w-[1440px] mx-auto px-6 h-[75px] flex items-center justify-between gap-8">
                <Link to="/" className="flex-shrink-0" style={{ width: "140px" }}>
                    <div className={`text-2xl font-bold ${colors.logoText} tracking-tight`}>
                        <span className="font-semibold">snap</span>
                        <span className={colors.logoAccent}>mint</span>
                    </div>
                </Link>
                <div className="hidden lg:flex flex-1 justify-center max-w-[450px]">
                    <div className="relative w-full">
                        <Search
                            className={`absolute left-4 top-1/2 -translate-y-1/2 ${colors.searchIcon}`}
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search for TV, Mobiles, Headphones & more"
                            value={searchQuery}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                            className={`w-full h-[45px] pl-12 pr-4 ${colors.searchBg} ${colors.searchText} rounded-lg text-sm border-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#008080] transition-all placeholder:text-[#9CA3AF]`}
                        />
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                    <Link
                        to=""
                        className={`h-[40px] px-6 flex items-center justify-center ${colors.secondaryBtn} rounded-md text-sm font-medium transition-all duration-200`}
                    >
                        For Business
                    </Link>
                    <Link
                        to=""
                        className={`h-[40px] px-6 flex items-center justify-center ${colors.secondaryBtn} rounded-md text-sm font-medium transition-all duration-200`}
                    >
                        Pay EMI
                    </Link>
                    {user ? (
                        <Link
                            to="/profile"
                            className={`h-[40px] w-[40px] flex items-center justify-center ${colors.primaryBtn} rounded-full text-sm font-semibold transition-all duration-200 shadow-sm`}
                            title="My Profile"
                        >
                            <FiUser className="text-lg" />
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className={`h-[40px] w-[40px] flex items-center justify-center ${colors.primaryBtn} rounded-full text-sm font-semibold transition-all duration-200 shadow-sm`}
                        >
                            <FiUser className="text-lg" />
                        </Link>
                    )}
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 ${colors.mobileMenuBtn} hover:opacity-70 transition-opacity`}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className={`md:hidden ${colors.menuBg} border-t ${colors.menuBorder} shadow-lg`}>
                    <div className="p-4">
                        <div className="relative">
                            <Search
                                className={`absolute left-4 top-1/2 -translate-y-1/2 ${colors.searchIcon}`}
                                size={18}
                            />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange?.(e.target.value)}
                                className={`w-full h-[45px] pl-12 pr-4 ${colors.searchBg} ${colors.searchText} rounded-lg text-sm border-none focus:outline-none focus:ring-2 focus:ring-[#008080] transition-all`}
                            />
                        </div>
                    </div>
                    <div className="px-4 pb-4 space-y-2">
                        <Link
                            to="/business"
                            className={`block py-3 px-6 ${colors.secondaryBtn} text-sm font-medium rounded-md text-center transition-all duration-200`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            For Business
                        </Link>
                        <Link
                            to="/pay-emi"
                            className={`block py-3 px-6 ${colors.secondaryBtn} text-sm font-medium rounded-md text-center transition-all duration-200`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pay EMI
                        </Link>
                        {user ? (
                            <Link
                                to="/profile"
                                className={`block py-3 px-6 ${colors.primaryBtn} text-sm font-semibold rounded-md text-center transition-all duration-200 shadow-sm`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                My Profile
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/register"
                                    className={`block py-3 px-6 ${colors.secondaryBtn} text-sm font-medium rounded-md text-center transition-all duration-200`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign-up
                                </Link>
                                <Link
                                    to="/login"
                                    className={`block py-3 px-6 ${colors.primaryBtn} text-sm font-semibold rounded-md text-center transition-all duration-200 shadow-sm`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Log In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};
export default Header;