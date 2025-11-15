import { Search, } from "lucide-react";
import { useState } from "react";
interface FilterSidebarProps {
    filters: {
        downpayment: string;
        emiTenure: string;
        priceRange: string;
        minPrice: string;
        maxPrice: string;
        categories: string[];
        brands: string[];
    };
    onFilterChange: (filters: any) => void;
    onClearAll: () => void;
}
const FilterSidebar = ({ filters, onFilterChange, onClearAll }: FilterSidebarProps) => {
    const [showBrandSearch, setShowBrandSearch] = useState(false);
    const handleDownpaymentChange = (value: string) => {
        onFilterChange({ ...filters, downpayment: value });
    };
    const handleEMITenureChange = (value: string) => {
        onFilterChange({ ...filters, emiTenure: value });
    };
    const handlePriceRangeChange = (value: string) => {
        onFilterChange({ ...filters, priceRange: value, minPrice: "", maxPrice: "" });
    };
    const handleCustomPriceChange = (min: string, max: string) => {
        onFilterChange({ ...filters, minPrice: min, maxPrice: max, priceRange: "" });
    };
    const handleCategoryToggle = (category: string) => {
        const newCategories = filters.categories.includes(category)
            ? filters.categories.filter((c) => c !== category)
            : [...filters.categories, category];
        onFilterChange({ ...filters, categories: newCategories });
    };
    const handleBrandToggle = (brand: string) => {
        const newBrands = filters.brands.includes(brand)
            ? filters.brands.filter((b) => b !== brand)
            : [...filters.brands, brand];
        onFilterChange({ ...filters, brands: newBrands });
    };
    return (
        <div className="w-full lg:w-[300px] bg-white border border-[#E5E7EB] rounded-xl p-6 sticky top-6">
            { }
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-[#1A1A1A]">Filters</h2>
                <button
                    onClick={onClearAll}
                    className="text-sm text-[#00A8A8] hover:underline font-medium"
                >
                    Clear all
                </button>
            </div>
            { }
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h3 className="text-base font-bold text-[#1A1A1A] mb-4">
                    Downpayment (Pay Now)
                </h3>
                <div className="space-y-3">
                    {["499", "999", "1999"].map((value) => (
                        <label key={value} className="flex items-center cursor-pointer group">
                            <input
                                type="radio"
                                name="downpayment"
                                value={value}
                                checked={filters.downpayment === value}
                                onChange={() => handleDownpaymentChange(value)}
                                className="w-5 h-5 text-[#00A8A8] focus:ring-[#00A8A8] focus:ring-2 cursor-pointer"
                            />
                            <span className="ml-2 text-sm text-[#1A1A1A] group-hover:text-[#00A8A8]">
                                ₹{value} Or Less
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            { }
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h3 className="text-base font-bold text-[#1A1A1A] mb-4">EMI Tenure</h3>
                <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                        <input
                            type="radio"
                            name="emiTenure"
                            value="2"
                            checked={filters.emiTenure === "2"}
                            onChange={() => handleEMITenureChange("2")}
                            className="w-5 h-5 text-[#00A8A8] focus:ring-[#00A8A8] focus:ring-2 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-[#1A1A1A] group-hover:text-[#00A8A8]">
                            2 Months Or More
                        </span>
                    </label>
                </div>
            </div>
            { }
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h3 className="text-base font-bold text-[#1A1A1A] mb-4">Price</h3>
                <div className="space-y-3 mb-4">
                    {[
                        { label: "Below ₹50,000", value: "0-50000" },
                        { label: "₹50,000 To ₹1,00,000", value: "50000-100000" },
                        { label: "₹1,00,000 To ₹1,50,000", value: "100000-150000" },
                        { label: "₹1,50,000 To ₹2,00,000", value: "150000-200000" },
                        { label: "Above ₹2,00,000", value: "200000-9999999" },
                    ].map((range) => (
                        <label key={range.value} className="flex items-center cursor-pointer group">
                            <input
                                type="radio"
                                name="priceRange"
                                value={range.value}
                                checked={filters.priceRange === range.value}
                                onChange={() => handlePriceRangeChange(range.value)}
                                className="w-5 h-5 text-[#00A8A8] focus:ring-[#00A8A8] focus:ring-2 cursor-pointer"
                            />
                            <span className="ml-2 text-sm text-[#1A1A1A] group-hover:text-[#00A8A8]">
                                {range.label}
                            </span>
                        </label>
                    ))}
                </div>
                { }
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <label className="block text-xs text-[#6B7280] mb-1">Min</label>
                        <input
                            type="number"
                            value={filters.minPrice}
                            onChange={(e) => handleCustomPriceChange(e.target.value, filters.maxPrice)}
                            placeholder="0"
                            className="w-full h-10 px-3 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs text-[#6B7280] mb-1">Max</label>
                        <input
                            type="number"
                            value={filters.maxPrice}
                            onChange={(e) => handleCustomPriceChange(filters.minPrice, e.target.value)}
                            placeholder="10000"
                            className="w-full h-10 px-3 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                        />
                    </div>
                    <button
                        onClick={() => {
                            if (filters.minPrice || filters.maxPrice) {
                                handleCustomPriceChange(filters.minPrice, filters.maxPrice);
                            }
                        }}
                        className="mt-5 w-10 h-10 bg-[#00A8A8] rounded-full flex items-center justify-center hover:bg-[#008888] transition-colors"
                    >
                        <span className="text-white text-lg">→</span>
                    </button>
                </div>
            </div>
            { }
            <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                <h3 className="text-base font-bold text-[#1A1A1A] mb-4">Categories</h3>
                <div className="space-y-3">
                    {["Cables & Chargers", "Headphones", "Speakers", "Smartwatches"].map(
                        (category) => (
                            <label key={category} className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.categories.includes(category)}
                                    onChange={() => handleCategoryToggle(category)}
                                    className="w-5 h-5 text-[#00A8A8] focus:ring-[#00A8A8] focus:ring-2 cursor-pointer rounded"
                                />
                                <span className="ml-2 text-sm text-[#1A1A1A] group-hover:text-[#00A8A8]">
                                    {category}
                                </span>
                            </label>
                        )
                    )}
                </div>
            </div>
            { }
            <div className="mb-0">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-bold text-[#1A1A1A]">Brand</h3>
                    <button
                        onClick={() => setShowBrandSearch(!showBrandSearch)}
                        className="text-[#00A8A8] hover:text-[#008888]"
                    >
                        <Search size={18} />
                    </button>
                </div>
                {showBrandSearch && (
                    <input
                        type="text"
                        placeholder="Search brands..."
                        className="w-full mb-3 px-3 py-2 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                    />
                )}
                <div className="space-y-3">
                    {[
                        "Portronics",
                        "Xiaomi",
                        "BoAt",
                        "Zebronics",
                        "Samsung",
                        "Croma - A Tata Product",
                    ].map((brand) => (
                        <label key={brand} className="flex items-center cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={filters.brands.includes(brand)}
                                onChange={() => handleBrandToggle(brand)}
                                className="w-5 h-5 text-[#00A8A8] focus:ring-[#00A8A8] focus:ring-2 cursor-pointer rounded"
                            />
                            <span className="ml-2 text-sm text-[#1A1A1A] group-hover:text-[#00A8A8]">
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default FilterSidebar;