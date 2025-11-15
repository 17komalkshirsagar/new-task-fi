import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    // Carousel slides data
    const carouselSlides = [
        {
            id: 1,
            title: "Your Next",
            subtitle: "Smartphone",
            price: "₹299",
            priceLabel: "+EMI",
            discount: "Up to 40% OFF",
            images: [
                "  https://unsplash.com/photos/a-close-up-of-a-persons-wrist-with-a-watch-on-it-xz9dC1UUIfk",
                "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
            ],
            bgGradient: "from-[#0f172a] via-[#1e293b] to-[#334155]",
        },
        {
            id: 2,
            title: "Smart",
            subtitle: "Watches",
            price: "₹199",
            priceLabel: "+EMI",
            discount: "Up to 50% OFF",
            images: [
                "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80",
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
            ],
            bgGradient: "from-[#1e3a8a] via-[#1e40af] to-[#3b82f6]",
        },
        {
            id: 3,
            title: "Wireless",
            subtitle: "Earbuds",
            price: "₹149",
            priceLabel: "+EMI",
            discount: "Up to 60% OFF",
            images: [
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
                "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80",
                "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80",
            ],
            bgGradient: "from-[#134e4a] via-[#0f766e] to-[#14b8a6]",
        },
        {
            id: 4,
            title: "Premium",
            subtitle: "Laptops",
            price: "₹999",
            priceLabel: "+EMI",
            discount: "Up to 30% OFF",
            images: [
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
                "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80",
            ],
            bgGradient: "from-[#134e4a] via-[#0f766e] to-[#14b8a6]",
        },
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000); 
        return () => clearInterval(timer);
    }, [carouselSlides.length]);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };
    const bestSellers = [
        {
            id: 1,
            name: "Redmi A4 5G",
            emi: 819,
            price: 8599,
            mrp: 11999,
            discount: 28,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
        },
        {
            id: 2,
            name: "Croma 81 cm TV",
            emi: 744,
            price: 8290,
            mrp: 13990,
            discount: 41,
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
        },
        {
            id: 3,
            name: "OPPO K13x 5G",
            emi: 1083,
            price: 12999,
            mrp: 16999,
            discount: 24,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
        },
        {
            id: 4,
            name: "boAt Airdopes Alpha",
            emi: 302,
            price: 899,
            mrp: 3400,
            discount: 74,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
        },
    ];
    const deals = [
        {
            id: 1,
            name: "boAt Airdopes Alpha",
            payNow: 19,
            emi: 302,
            price: 899,
            mrp: 3400,
            discount: 74,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
        },
        {
            id: 2,
            name: "Noise Colorfit Icon Buzz",
            payNow: 19,
            emi: 405,
            price: 1199,
            mrp: 4999,
            discount: 76,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
        },
        {
            id: 3,
            name: "boAt Airdopes 181",
            payNow: 19,
            emi: 333,
            price: 999,
            mrp: 4990,
            discount: 80,
            image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
        },
        {
            id: 4,
            name: "boAt Airdopes 181",
            payNow: 919,
            emi: 533,
            price: 899,
            mrp: 4990,
            discount: 80,
            image: "https://images.unsplash.com/photo-1698612059734-280fed56f417?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    const fashionBrands = [
        {
            id: 1,
            name: "Titan Watch",
            emi: 2132,
            price: 6395,
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=80",
        },
        {
            id: 2,
            name: "Beyoung T-shirt",
            emi: 233,
            price: 699,
            mrp: 1699,
            discount: 59,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        },
        {
            id: 3,
            name: "Libas Ethnic Set",
            emi: 783,
            price: 2349,
            mrp: 4499,
            discount: 48,
            image: "https://images.unsplash.com/photo-1734408483935-aa8a686f084b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNoJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
        },
        {
            id: 4,
            name: "Superkicks Shoes",
            emi: 3832,
            price: 11495,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
        },
    ];
    const shoesBrands = [
        { name: "Asian Shoes", emi: 285, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80" },
        { name: "LIBERTY", emi: 680, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&q=80", color: "#dc2626" },
        { name: "Sparx Shoes", emi: 343, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&q=80" },
        { name: "Bersache Shoes", emi: 484, image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=300&q=80" },
        { name: "Neeman's Shoes", emi: 817, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&q=80" },
        { name: "Bacca Bucci Shoes", emi: 577, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&q=80" },
    ];
    return (
        <div className="min-h-screen bg-white">
            <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            {}
            <section className="relative h-[450px] overflow-hidden">
                {}
                <div className="relative h-full">
                    {carouselSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                                ? "opacity-100 translate-x-0"
                                : index < currentSlide
                                    ? "opacity-0 -translate-x-full"
                                    : "opacity-0 translate-x-full"
                                }`}
                        >
                            <div className={`h-full bg-gradient-to-br ${slide.bgGradient} flex items-center`}>
                                <div className="max-w-[1440px] mx-auto px-[60px] w-full">
                                    <div className="flex items-center relative z-10">
                                        {}
                                        <div className="w-1/2">
                                            <h1 className="text-[56px] leading-[1.1] font-bold text-white mb-4">
                                                {slide.title}<br />
                                                {slide.subtitle}
                                            </h1>
                                            <p className="text-[48px] font-bold text-white mb-2">
                                                <span className="font-normal">at just</span>
                                            </p>
                                            <div className="mb-2">
                                                <span className="text-[80px] font-extrabold text-white">{slide.price}</span>
                                                <span className="text-[32px] font-medium text-white ml-2">{slide.priceLabel}</span>
                                            </div>
                                            <p className="text-xl text-[#60d4d4] mb-8">{slide.discount}</p>
                                            <Link
                                                to="/products"
                                                className="inline-block w-[200px] h-[52px] leading-[52px] text-center bg-[#008080] text-white text-lg font-semibold rounded-[26px] shadow-[0_4px_12px_rgba(0,128,128,0.3)] hover:scale-105 hover:brightness-110 transition-all duration-200"
                                            >
                                                Shop on 0% EMI
                                            </Link>
                                        </div>
                                        {}
                                        <div className="absolute right-[60px] flex items-center gap-6">
                                            {slide.images.map((image, imgIdx) => (
                                                <img
                                                    key={imgIdx}
                                                    src={image}
                                                    alt={`${slide.subtitle} ${imgIdx + 1}`}
                                                    className={`h-[180px] w-auto object-contain transition-transform duration-500 ${imgIdx === 0
                                                        ? "rotate-[-5deg] z-30"
                                                        : imgIdx === 1
                                                            ? "z-20"
                                                            : "rotate-[5deg] z-10"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} />
                </button>
                {}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentSlide
                                ? "w-10 h-3 bg-white"
                                : "w-3 h-3 bg-white/50 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
            {}
            <section className="py-12 border-b border-[#e2e8f0]">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-[28px] font-bold text-[#2d3748] tracking-tight mb-2">Best Sellers</h2>
                                <p className="text-sm text-[#718096]">Pay with 3/6/9/12 month EMIs</p>
                            </div>
                            <Link to="/products" className="text-[#008080] font-semibold hover:underline">
                                View All →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {bestSellers.map((product) => (
                                <Link
                                    key={product.id}
                                    to="/products"
                                    className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                    style={{ width: "300px" }}
                                >
                                    {}
                                    <div className="relative h-[150px] bg-[#f7fafc] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {}
                                        <div className="absolute top-3 left-3 bg-[#9ACD32] text-[#1a1a2e] text-xs font-bold px-2.5 py-1.5 rounded flex items-center gap-1 z-10">
                                            <Zap size={12} />
                                            0% EMI
                                        </div>
                                    </div>
                                    {}
                                    <div className="p-4">
                                        {}
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-2xl font-bold text-[#2d3748]">
                                                ₹{product.emi}
                                            </span>
                                            <span className="text-base font-medium text-[#718096]">/month</span>
                                        </div>
                                        {}
                                        <h3 className="text-sm font-medium text-[#4a5568] leading-[1.4] mb-3 min-h-[40px] line-clamp-2">
                                            {product.name}
                                        </h3>
                                        {}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-sm font-medium text-[#a0aec0] line-through">
                                                ₹{product.mrp.toLocaleString("en-IN")}
                                            </span>
                                            <span className="text-sm text-[#718096]">
                                                ₹{product.price.toLocaleString("en-IN")}
                                            </span>
                                            <span className="text-sm font-semibold text-[#10b981]">
                                                ({product.discount}% Off)
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-12 border-b border-[#e2e8f0]">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[28px] font-bold text-[#2d3748] tracking-tight">Deals: Pay ₹19 Now</h2>
                        <Link to="/products" className="text-[#008080] font-semibold hover:underline">
                            View All →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {deals.map((deal) => (
                            <div
                                key={deal.id}
                                className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                style={{ width: "300px" }}
                            >
                                {}
                                <div className="relative h-[150px] bg-[#f7fafc] overflow-hidden">
                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {}
                                    <div className="absolute top-3 right-3 bg-[#ef4444] text-white text-xs font-bold px-2 py-1 rounded z-10">
                                        Deal of the Day
                                    </div>
                                </div>
                                {}
                                <div className="p-4">
                                    {}
                                    <div className="bg-[#9ACD32]/20 rounded-lg p-3 mb-3">
                                        <p className="text-xs text-[#718096] mb-1">Pay Now</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-[#008080]">₹{deal.payNow}</span>
                                            <span className="text-sm text-[#718096]">+ ₹{deal.emi}/mo</span>
                                        </div>
                                    </div>
                                    {}
                                    <h3 className="text-sm font-medium text-[#4a5568] leading-[1.4] mb-2 min-h-[40px] line-clamp-2">
                                        {deal.name}
                                    </h3>
                                    {}
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-sm font-medium text-[#a0aec0] line-through">
                                            ₹{deal.mrp.toLocaleString("en-IN")}
                                        </span>
                                        <span className="text-sm text-[#718096]">
                                            ₹{deal.price.toLocaleString("en-IN")}
                                        </span>
                                        <span className="text-sm font-semibold text-[#10b981]">
                                            ({deal.discount}% Off)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {}
            <section className="py-12 border-b border-[#e2e8f0]">
                <div className="max-w-[1440px] mx-auto px-6">
                    <h2 className="text-[28px] font-bold text-[#2d3748] tracking-tight mb-6">Pay with 0% EMI</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {fashionBrands.map((brand) => (
                            <Link
                                key={brand.id}
                                to="/products"
                                className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                style={{ width: "280px" }}
                            >
                                {}
                                <div className="relative h-[240px] bg-[#f7fafc] overflow-hidden">
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                                    />
                                </div>
                                {}
                                <div className="p-4">
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-2xl font-bold text-[#2d3748]">
                                            ₹{brand.emi}
                                        </span>
                                        <span className="text-base font-medium text-[#718096]">/month</span>
                                    </div>
                                    <h3 className="text-sm font-medium text-[#4a5568] leading-[1.4] mb-2">
                                        {brand.name}
                                    </h3>
                                    {brand.discount && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-[#a0aec0] line-through">
                                                ₹{brand.mrp?.toLocaleString("en-IN")}
                                            </span>
                                            <span className="text-sm text-[#718096]">
                                                ₹{brand.price.toLocaleString("en-IN")}
                                            </span>
                                            <span className="text-sm font-semibold text-[#10b981]">
                                                ({brand.discount}% Off)
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {}
            {}
            {}
            <section className="py-12 border-b border-[#e2e8f0]">
                <div className="max-w-[1440px] mx-auto px-6">
                    <h2 className="text-[28px] font-bold text-[#2d3748] tracking-tight mb-6">Trending Fashion Brands</h2>
                    <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#008080] scrollbar-track-[#e2e8f0]">
                        <div className="flex gap-5">
                            {shoesBrands.map((brand, idx) => (
                                <Link
                                    key={idx}
                                    to="/products"
                                    className="flex-shrink-0 w-[200px] h-[280px] bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col items-center justify-between hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="w-full h-[180px] object-contain mb-4"
                                    />
                                    <div className="w-full text-center">
                                        <h3
                                            className="text-2xl font-bold tracking-wider mb-1"
                                            style={{ color: brand.color || "#2d3748" }}
                                        >
                                            {brand.name}
                                        </h3>
                                        <p className="text-xs text-[#718096] mb-1">Starting</p>
                                        <p className="text-lg font-bold text-[#2d3748]">
                                            ₹{brand.emi}/mon
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>  {}
            <section className="py-12 border-b border-[#e2e8f0]">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-[28px] font-bold text-[#2d3748] tracking-tight mb-2">Best Sellers</h2>
                                <p className="text-sm text-[#718096]">Pay with 3/6/9/12 month EMIs</p>
                            </div>
                            <Link to="/products" className="text-[#008080] font-semibold hover:underline">
                                View All →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {bestSellers.map((product) => (
                                <Link
                                    key={product.id}
                                    to="/products"
                                    className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                    style={{ width: "300px" }}
                                >
                                    {}
                                    <div className="relative h-[150px] bg-[#f7fafc] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {}
                                        <div className="absolute top-3 left-3 bg-[#9ACD32] text-[#1a1a2e] text-xs font-bold px-2.5 py-1.5 rounded flex items-center gap-1 z-10">
                                            <Zap size={12} />
                                            0% EMI
                                        </div>
                                    </div>
                                    {}
                                    <div className="p-4">
                                        {}
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-2xl font-bold text-[#2d3748]">
                                                ₹{product.emi}
                                            </span>
                                            <span className="text-base font-medium text-[#718096]">/month</span>
                                        </div>
                                        {}
                                        <h3 className="text-sm font-medium text-[#4a5568] leading-[1.4] mb-3 min-h-[40px] line-clamp-2">
                                            {product.name}
                                        </h3>
                                        {}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-sm font-medium text-[#a0aec0] line-through">
                                                ₹{product.mrp.toLocaleString("en-IN")}
                                            </span>
                                            <span className="text-sm text-[#718096]">
                                                ₹{product.price.toLocaleString("en-IN")}
                                            </span>
                                            <span className="text-sm font-semibold text-[#10b981]">
                                                ({product.discount}% Off)
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <style>{`
                .scrollbar-thin::-webkit-scrollbar {
                    height: 6px;
                }
                .scrollbar-thumb-[#008080]::-webkit-scrollbar-thumb {
                    background: #008080;
                    border-radius: 3px;
                }
                .scrollbar-track-[#e2e8f0]::-webkit-scrollbar-track {
                    background: #e2e8f0;
                    border-radius: 3px;
                }
            `}</style>
        </div>
    );
};
export default Home;