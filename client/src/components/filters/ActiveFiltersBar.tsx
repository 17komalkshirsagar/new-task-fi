import { X, ChevronDown } from "lucide-react";
interface ActiveFiltersBarProps {
    filters: {
        downpayment: string;
        emiTenure: string;
        priceRange: string;
        minPrice: string;
        maxPrice: string;
        categories: string[];
        brands: string[];
    };
    onRemoveFilter: (filterType: string, value?: string) => void;
    onClearAll: () => void;
    productCount: number;
    sortBy: string;
    onSortChange: (value: string) => void;
}
const ActiveFiltersBar = ({
    filters,
    onRemoveFilter,
    onClearAll,
    productCount,
    sortBy,
    onSortChange,
}: ActiveFiltersBarProps) => {
    const hasActiveFilters =
        filters.downpayment ||
        filters.emiTenure ||
        filters.priceRange ||
        filters.minPrice ||
        filters.maxPrice ||
        filters.categories.length > 0 ||
        filters.brands.length > 0;
    if (!hasActiveFilters) return null;
    const getPriceRangeLabel = (range: string) => {
        const ranges: Record<string, string> = {
            "0-1000": "Below ₹1,000",
            "1001-1800": "₹1,001 to ₹1,800",
            "1801-2700": "₹1,801 to ₹2,700",
            "2701-999999": "Above ₹2,700",
        };
        return ranges[range] || range;
    };
    return (
        <div className="bg-[#F8FAFB] rounded-lg p-4 mb-6">
            <div className="flex flex-wrap items-center gap-3 justify-between">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                    {}
                    {filters.downpayment && (
                        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#1A1A1A]">
                            <span>₹{filters.downpayment} or less</span>
                            <button
                                onClick={() => onRemoveFilter("downpayment")}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                    {}
                    {filters.emiTenure && (
                        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#1A1A1A]">
                            <span>{filters.emiTenure} months or more</span>
                            <button
                                onClick={() => onRemoveFilter("emiTenure")}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                    {}
                    {filters.priceRange && (
                        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#1A1A1A]">
                            <span>{getPriceRangeLabel(filters.priceRange)}</span>
                            <button
                                onClick={() => onRemoveFilter("priceRange")}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                    {}
                    {(filters.minPrice || filters.maxPrice) && (
                        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#1A1A1A]">
                            <span>
                                ₹{filters.minPrice || "0"} - ₹{filters.maxPrice || "∞"}
                            </span>
                            <button
                                onClick={() => onRemoveFilter("customPrice")}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                    {}
                    {filters.categories.map((category) => (
                        <div
                            key={category}
                            className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#1A1A1A]"
                        >
                            <span>{category}</span>
                            <button
                                onClick={() => onRemoveFilter("category", category)}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                    {}
                    {filters.brands.map((brand) => (
                        <div
                            key={brand}
                            className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 text-sm text-[#1A1A1A]"
                        >
                            <span>{brand}</span>
                            <button
                                onClick={() => onRemoveFilter("brand", brand)}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                    {}
                    <button
                        onClick={onClearAll}
                        className="text-sm text-[#00A8A8] hover:underline font-medium"
                    >
                        Clear all
                    </button>
                </div>
                {}
                <div className="flex items-center gap-3">
                    <span className="text-sm text-[#6B7280]">
                        {productCount} {productCount === 1 ? "product" : "products"}
                    </span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="appearance-none bg-white border border-[#E5E7EB] rounded-md px-4 py-2 pr-10 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#00A8A8] cursor-pointer"
                        >
                            <option value="popularity">Sort by: Popularity</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="newest">Newest First</option>
                            <option value="discount">Discount</option>
                        </select>
                        <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActiveFiltersBar;