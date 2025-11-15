import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useGetAllProductsQuery } from "../redux/apis/product.api";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FilterSidebar from "../components/filters/FilterSidebar";
import ActiveFiltersBar from "../components/filters/ActiveFiltersBar";
import ProductCard from "../components/ProductCard";
const ProductList = () => {
    const [filters, setFilters] = useState({
        downpayment: "",
        emiTenure: "",
        priceRange: "",
        minPrice: "",
        maxPrice: "",
        categories: [] as string[],
        brands: [] as string[],
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("popularity");
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const buildQueryParams = () => {
        const params: any = {};
        if (searchQuery) {
            params.search = searchQuery;
        }
        if (filters.downpayment) {
            params.maxDownpayment = parseInt(filters.downpayment);
        }
        if (filters.emiTenure) {
            params.minTenure = parseInt(filters.emiTenure);
        }
        if (filters.priceRange) {
            const [min, max] = filters.priceRange.split("-");
            params.minPrice = parseInt(min);
            params.maxPrice = parseInt(max);
        } else {
            if (filters.minPrice) {
                params.minPrice = parseInt(filters.minPrice);
            }
            if (filters.maxPrice) {
                params.maxPrice = parseInt(filters.maxPrice);
            }
        }
        if (filters.categories.length > 0) {
            params.category = filters.categories.join(",");
        }
        if (filters.brands.length > 0) {
            params.brand = filters.brands.join(",");
        }
        return params;
    };
    const { data, isLoading, error } = useGetAllProductsQuery(buildQueryParams());
    let products = data?.result || [];
    if (sortBy === "price-low") {
        products = [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        products = [...products].sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
        products = [...products].sort((a, b) => {
            const discountA = ((a.mrp - a.price) / a.mrp) * 100;
            const discountB = ((b.mrp - b.price) / b.mrp) * 100;
            return discountB - discountA;
        });
    } else if (sortBy === "newest") {
        products = [...products].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
    };
    const handleClearAll = () => {
        setFilters({
            downpayment: "",
            emiTenure: "",
            priceRange: "",
            minPrice: "",
            maxPrice: "",
            categories: [],
            brands: [],
        });
        setSearchQuery("");
    };
    const handleRemoveFilter = (filterType: string, value?: string) => {
        if (filterType === "downpayment") {
            setFilters({ ...filters, downpayment: "" });
        } else if (filterType === "emiTenure") {
            setFilters({ ...filters, emiTenure: "" });
        } else if (filterType === "priceRange") {
            setFilters({ ...filters, priceRange: "" });
        } else if (filterType === "customPrice") {
            setFilters({ ...filters, minPrice: "", maxPrice: "" });
        } else if (filterType === "category" && value) {
            setFilters({
                ...filters,
                categories: filters.categories.filter((c) => c !== value),
            });
        } else if (filterType === "brand" && value) {
            setFilters({ ...filters, brands: filters.brands.filter((b) => b !== value) });
        }
    };
    useEffect(() => {
        if (showMobileFilters) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [showMobileFilters]);
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFB]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#00A8A8] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#6B7280] text-lg">Loading products...</p>
                </div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFB] p-4">
                <div className="text-center max-w-md">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                        Unable to Load Products
                    </h2>
                    <p className="text-[#6B7280] mb-6">
                        We're having trouble connecting to our servers. Please try again later.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#00A8A8] text-white px-6 py-3 rounded-lg hover:bg-[#008888] transition-colors font-medium"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFB]">
            <Header />
            {}
            <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-6 py-6">
                {}
                <div className="lg:hidden mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for TV, Mobiles, Headphones & more"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-11 pl-4 pr-10 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00A8A8]" size={20} />
                    </div>
                </div>
                {}
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setShowMobileFilters(true)}
                        className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-sm font-medium text-[#1A1A1A] hover:border-[#00A8A8] transition-colors"
                    >
                        <SlidersHorizontal size={18} />
                        Filters
                    </button>
                </div>
                {}
                <div className="flex gap-6">
                    {}
                    <div className="hidden lg:block">
                        <FilterSidebar
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onClearAll={handleClearAll}
                        />
                    </div>
                    {}
                    <div className="flex-1">
                        {}
                        <ActiveFiltersBar
                            filters={filters}
                            onRemoveFilter={handleRemoveFilter}
                            onClearAll={handleClearAll}
                            productCount={products.length}
                            sortBy={sortBy}
                            onSortChange={setSortBy}
                        />
                        {}
                        {products.length === 0 ? (
                            <div className="text-center py-16 bg-white rounded-xl border border-[#E5E7EB]">
                                <div className="text-6xl mb-4">📦</div>
                                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                                    No Products Found
                                </h2>
                                <p className="text-[#6B7280] mb-6">
                                    Try adjusting your filters or search query
                                </p>
                                <button
                                    onClick={handleClearAll}
                                    className="bg-[#00A8A8] text-white px-6 py-3 rounded-lg hover:bg-[#008888] transition-colors font-medium"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {}
            {showMobileFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setShowMobileFilters(false)}
                    />
                    {}
                    <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-[#E5E7EB] p-4 flex justify-between items-center z-10">
                            <h2 className="text-lg font-bold text-[#1A1A1A]">Filters</h2>
                            <button
                                onClick={() => setShowMobileFilters(false)}
                                className="text-[#6B7280] hover:text-[#1A1A1A]"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-4">
                            <FilterSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onClearAll={handleClearAll}
                            />
                        </div>
                        <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] p-4">
                            <button
                                onClick={() => setShowMobileFilters(false)}
                                className="w-full bg-[#00A8A8] text-white py-3 rounded-lg hover:bg-[#008888] transition-colors font-medium"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};
export default ProductList;