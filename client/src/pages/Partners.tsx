import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Handshake, TrendingUp, Award, Users } from "lucide-react";
const Partners = () => {
    const partners = [
        { name: "Amazon", category: "E-commerce" },
        { name: "Flipkart", category: "E-commerce" },
        { name: "Croma", category: "Electronics" },
        { name: "Vijay Sales", category: "Electronics" },
        { name: "Reliance Digital", category: "Electronics" },
        { name: "Samsung", category: "Electronics" },
        { name: "Apple", category: "Electronics" },
        { name: "OnePlus", category: "Electronics" },
        { name: "Urban Ladder", category: "Furniture" },
        { name: "Pepperfry", category: "Furniture" },
        { name: "Lenskart", category: "Fashion" },
        { name: "Myntra", category: "Fashion" }
    ];
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We collaborate with leading brands and merchants to bring you the best shopping experience with flexible EMI options
                        </p>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Partner with Snapmint?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Increased Sales</h3>
                                <p className="text-sm text-gray-600">
                                    30-40% boost in average order value with EMI options
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Wider Reach</h3>
                                <p className="text-sm text-gray-600">
                                    Access to millions of Snapmint users across India
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Brand Association</h3>
                                <p className="text-sm text-gray-600">
                                    Enhance credibility through partnership with a trusted fintech
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Handshake className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                                <p className="text-sm text-gray-600">
                                    Quick and easy integration with full technical support
                                </p>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Partner Network</h2>
                        {}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#008080]">
                                E-commerce Partners
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {partners
                                    .filter(p => p.category === "E-commerce")
                                    .map((partner, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md hover:border-[#008080] border border-transparent transition-all"
                                        >
                                            <span className="font-semibold text-gray-900">{partner.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#008080]">
                                Electronics Partners
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {partners
                                    .filter(p => p.category === "Electronics")
                                    .map((partner, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md hover:border-[#008080] border border-transparent transition-all"
                                        >
                                            <span className="font-semibold text-gray-900">{partner.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#008080]">
                                Furniture Partners
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {partners
                                    .filter(p => p.category === "Furniture")
                                    .map((partner, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md hover:border-[#008080] border border-transparent transition-all"
                                        >
                                            <span className="font-semibold text-gray-900">{partner.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#008080]">
                                Fashion Partners
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {partners
                                    .filter(p => p.category === "Fashion")
                                    .map((partner, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md hover:border-[#008080] border border-transparent transition-all"
                                        >
                                            <span className="font-semibold text-gray-900">{partner.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-2xl shadow-lg p-8 text-white text-center">
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-teal-100">Partner Merchants</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-2xl shadow-lg p-8 text-white text-center">
                            <div className="text-4xl font-bold mb-2">10M+</div>
                            <div className="text-teal-100">Happy Customers</div>
                        </div>
                        <div className="bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-2xl shadow-lg p-8 text-white text-center">
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-teal-100">Cities Covered</div>
                        </div>
                    </div>
                    {}
                    <div className="bg-gradient-to-r from-[#008080] to-[#00A8A8] rounded-2xl shadow-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
                        <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                            Join our growing network of partners and unlock new growth opportunities for your business
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/merchant"
                                className="inline-block bg-white text-[#008080] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Become a Merchant
                            </a>
                            <a
                                href="/payment-solution"
                                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition-all"
                            >
                                Request Payment Solution
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Partners;