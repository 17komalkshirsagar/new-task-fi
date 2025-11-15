import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { Menu } from "lucide-react";
const SidebarExample = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>("");
    // Example categories data
    const categories = [
        {
            id: "mobiles",
            name: "Mobiles",
            hasSubCategories: true,
            subCategories: [
                { id: "smartphones", name: "Smartphones", count: 245 },
                { id: "feature-phones", name: "Feature Phones", count: 67 },
                { id: "accessories", name: "Accessories", count: 189 },
            ],
        },
        {
            id: "electronics",
            name: "Electronics",
            hasSubCategories: true,
            subCategories: [
                { id: "laptops", name: "Laptops", count: 156 },
                { id: "tablets", name: "Tablets", count: 89 },
                { id: "cameras", name: "Cameras", count: 112 },
            ],
        },
        {
            id: "appliances",
            name: "Appliances",
            hasSubCategories: true,
            subCategories: [
                { id: "washing-machines", name: "Washing Machines", count: 78 },
                { id: "refrigerators", name: "Refrigerators", count: 92 },
                { id: "air-conditioners", name: "Air Conditioners", count: 65 },
            ],
        },
        {
            id: "kitchen-home",
            name: "Kitchen & Home",
            hasSubCategories: true,
            subCategories: [
                { id: "cookware", name: "Cookware", count: 234 },
                { id: "furniture", name: "Furniture", count: 167 },
                { id: "home-decor", name: "Home Decor", count: 289 },
            ],
        },
        {
            id: "health",
            name: "Health",
            hasSubCategories: true,
            subCategories: [
                { id: "fitness", name: "Fitness Equipment", count: 123 },
                { id: "supplements", name: "Supplements", count: 198 },
                { id: "personal-care", name: "Personal Care", count: 267 },
            ],
        },
        {
            id: "fashion",
            name: "Fashion",
            hasSubCategories: true,
            subCategories: [
                { id: "mens-fashion", name: "Men's Fashion", count: 456 },
                { id: "womens-fashion", name: "Women's Fashion", count: 589 },
                { id: "kids-fashion", name: "Kids Fashion", count: 312 },
            ],
        },
        {
            id: "baby-kids",
            name: "Baby & kids",
            hasSubCategories: true,
            subCategories: [
                { id: "toys", name: "Toys", count: 234 },
                { id: "baby-care", name: "Baby Care", count: 156 },
                { id: "kids-furniture", name: "Kids Furniture", count: 89 },
            ],
        },
        {
            id: "sports",
            name: "Sports",
            hasSubCategories: true,
            subCategories: [
                { id: "outdoor-sports", name: "Outdoor Sports", count: 187 },
                { id: "indoor-sports", name: "Indoor Sports", count: 145 },
                { id: "sports-wear", name: "Sports Wear", count: 267 },
            ],
        },
    ];
    const footerLinks = [
        { id: "contact", name: "Contact Us", icon: "phone", href: "/contact" },
        { id: "privacy", name: "Privacy Policy", icon: "shield", href: "/privacy" },
        { id: "terms", name: "Terms and Conditions", icon: "filetext", href: "/terms" },
        { id: "faqs", name: "FAQs", icon: "help", href: "/faqs" },
    ];
    const user = {
        name: "John Doe",
        isLoggedIn: false, 
        avatar: "", // Add avatar URL if available
    };
    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        console.log("Category clicked:", categoryId);
        // Add your category navigation logic here
    };
    return (
        <div className="min-h-screen bg-gray-50">
            {}
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors lg:hidden"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                        {}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="hidden lg:block p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                        {}
                        <div className="flex-1 flex justify-center lg:justify-start ml-0 lg:ml-4">
                            <span className="text-2xl font-bold text-gray-900">
                                <span className="font-semibold">snap</span>
                                <span className="text-[#008080]">mint</span>
                            </span>
                        </div>
                        {}
                        <div className="w-10"></div>
                    </div>
                </div>
            </header>
            {}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                categories={categories}
                footerLinks={footerLinks}
                user={user}
                onCategoryClick={handleCategoryClick}
                activeCategoryId={activeCategory}
            />
            {}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Sidebar Component Example
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Click the menu icon in the header to open the sidebar navigation.
                    </p>
                    {activeCategory && (
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                            <p className="text-teal-800">
                                <strong>Active Category:</strong> {activeCategory}
                            </p>
                        </div>
                    )}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Features:</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Fixed 320px width sidebar</li>
                            <li>Full height with custom scrollbar</li>
                            <li>User welcome section with avatar</li>
                            <li>Expandable categories with sub-categories</li>
                            <li>Active category highlighting</li>
                            <li>Footer links (Contact, Privacy, Terms, FAQs)</li>
                            <li>Mobile responsive with slide-in animation</li>
                            <li>Backdrop overlay on mobile</li>
                            <li>Smooth transitions and hover effects</li>
                            <li>Teal (#008080) color scheme</li>
                        </ul>
                    </div>
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Usage Instructions:
                        </h3>
                        <pre className="text-sm text-gray-700 overflow-x-auto">
{`import Sidebar from "./components/layout/Sidebar";
<Sidebar
  isOpen={isSidebarOpen}
  onClose={() => setIsSidebarOpen(false)}
  categories={categories}
  footerLinks={footerLinks}
  user={user}
  onCategoryClick={handleCategoryClick}
  activeCategoryId={activeCategory}
/>`}
                        </pre>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SidebarExample;