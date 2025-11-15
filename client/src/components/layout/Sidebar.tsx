import { useState } from "react";
import { Link } from "react-router-dom";
import {
    X,
    Grid,
    ChevronDown,

    Phone,
    Shield,
    FileText,
    HelpCircle,
    User as UserIcon,
} from "lucide-react";
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    categories: Category[];
    footerLinks: FooterLink[];
    user?: User;
    onCategoryClick: (categoryId: string) => void;
    activeCategoryId?: string;
}
interface Category {
    id: string;
    name: string;
    icon?: string;
    hasSubCategories?: boolean;
    subCategories?: SubCategory[];
}
interface SubCategory {
    id: string;
    name: string;
    count?: number;
}
interface FooterLink {
    id: string;
    name: string;
    icon: string;
    href: string;
}
interface User {
    name: string;
    isLoggedIn: boolean;
    avatar?: string;
}
const Sidebar = ({
    isOpen,
    onClose,
    categories,
    footerLinks,
    user,
    onCategoryClick,
    activeCategoryId,
}: SidebarProps) => {
    const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true);
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
    const toggleCategory = (categoryId: string) => {
        setExpandedCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };
    const getIconComponent = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            phone: <Phone size={20} />,
            shield: <Shield size={20} />,
            filetext: <FileText size={20} />,
            help: <HelpCircle size={20} />,
        };
        return icons[iconName.toLowerCase()] || null;
    };
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[999] lg:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={`fixed left-0 top-0 h-screen w-[320px] bg-white shadow-[2px_0_8px_rgba(0,0,0,0.08)] z-[1000] overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 custom-scrollbar`}
            >
                <div className="relative bg-gradient-to-b from-[#E0F7F7] to-white px-5 py-6 border-b border-[#E5E7EB]">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1A1A1A] rounded-md transition-all duration-200 lg:hidden"
                        aria-label="Close sidebar"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#008080] flex items-center justify-center text-white mr-3 flex-shrink-0">
                            {user?.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <UserIcon size={24} />
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-[#1A1A1A] leading-tight">
                                {user?.isLoggedIn ? `Welcome, ${user.name}` : "Welcome User."}
                            </span>
                            {!user?.isLoggedIn && (
                                <Link
                                    to="/login"
                                    className="text-base font-medium text-[#008080] hover:underline cursor-pointer mt-1"
                                    onClick={onClose}
                                >
                                    Signup / Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <nav className="py-4">
                    <div
                        onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                        className="flex items-center justify-between px-5 py-3 mx-3 cursor-pointer hover:bg-[#F3F4F6] rounded-lg transition-all duration-200"
                    >
                        <div className="flex items-center">
                            <Grid size={20} className="text-[#008080] mr-3" />
                            <span className="text-base font-semibold text-[#1A1A1A]">
                                Categories
                            </span>
                        </div>
                        <div
                            className={`text-[#6B7280] transition-transform duration-300 ${isCategoriesExpanded ? "rotate-180" : ""
                                }`}
                        >
                            <ChevronDown size={20} />
                        </div>
                    </div>
                    { }
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isCategoriesExpanded ? "max-h-[500px] py-2" : "max-h-0"
                            }`}
                    >
                        {categories.map((category) => (
                            <div key={category.id}>
                                { }
                                <div
                                    onClick={() => {
                                        onCategoryClick(category.id);
                                        if (category.hasSubCategories) {
                                            toggleCategory(category.id);
                                        }
                                    }}
                                    className={`flex items-center justify-between px-5 py-3 mx-3 my-0.5 cursor-pointer rounded-md transition-all duration-200 ${activeCategoryId === category.id
                                        ? "bg-[#E0F7F7] text-[#008080] font-medium border-l-3 border-[#008080]"
                                        : "text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#1A1A1A] hover:translate-x-1"
                                        }`}
                                    style={{
                                        paddingLeft: "52px",
                                    }}
                                >
                                    <span className="text-sm">{category.name}</span>
                                    {category.hasSubCategories && (
                                        <ChevronDown
                                            size={16}
                                            className={`text-[#9CA3AF] transition-transform duration-200 ${expandedCategories.includes(category.id)
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    )}
                                </div>
                                {category.hasSubCategories &&
                                    expandedCategories.includes(category.id) && (
                                        <div className="ml-8">
                                            {category.subCategories?.map((subCategory) => (
                                                <div
                                                    key={subCategory.id}
                                                    className="flex items-center justify-between px-5 py-2 mx-3 my-0.5 cursor-pointer rounded-md text-sm text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1A1A1A] transition-all duration-200"
                                                >
                                                    <span>{subCategory.name}</span>
                                                    {subCategory.count && (
                                                        <span className="text-xs text-[#9CA3AF]">
                                                            ({subCategory.count})
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </nav>
                <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.href}
                            onClick={onClose}
                            className="flex items-center px-5 py-3 mx-3 my-0.5 text-sm font-normal text-[#4B5563] cursor-pointer rounded-md hover:bg-[#F3F4F6] hover:text-[#1A1A1A] hover:translate-x-1 transition-all duration-200"
                        >
                            <span className="text-[#008080] mr-3">
                                {getIconComponent(link.icon)}
                            </span>
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </aside>
            { }
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #F3F4F6;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #CBD5E1;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94A3B8;
                }
            `}</style>
        </>
    );
};
export default Sidebar;