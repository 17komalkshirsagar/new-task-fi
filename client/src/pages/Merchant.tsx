import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Store, TrendingUp, Users, Shield, CheckCircle } from "lucide-react";
import { toast } from "sonner";
const Merchant = () => {
    const [formData, setFormData] = useState({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        businessType: "",
        monthlyRevenue: "",
        message: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Merchant application submitted:", formData);
        // TODO: Implement API call to submit merchant application
        toast.success("Thank you for your interest! We'll contact you soon.");
        setFormData({
            businessName: "",
            ownerName: "",
            email: "",
            phone: "",
            businessType: "",
            monthlyRevenue: "",
            message: ""
        });
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join as an EMI Store Merchant</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Partner with Snapmint and boost your sales by offering flexible EMI options to your customers
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
                                <h3 className="font-semibold text-gray-900 mb-2">Increase Sales</h3>
                                <p className="text-sm text-gray-600">
                                    Boost your revenue by 30-40% with EMI payment options
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Expand Customer Base</h3>
                                <p className="text-sm text-gray-600">
                                    Reach millions of Snapmint users across India
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Zero Risk</h3>
                                <p className="text-sm text-gray-600">
                                    Get paid upfront while we handle EMI collections
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Store className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Easy Integration</h3>
                                <p className="text-sm text-gray-600">
                                    Quick and seamless integration with your store
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Submit Application</h3>
                                        <p className="text-sm text-gray-600">
                                            Fill out the merchant application form with your business details
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Verification</h3>
                                        <p className="text-sm text-gray-600">
                                            Our team will verify your business and contact you within 48 hours
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Integration</h3>
                                        <p className="text-sm text-gray-600">
                                            We'll help you integrate Snapmint EMI into your payment system
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Start Selling</h3>
                                        <p className="text-sm text-gray-600">
                                            Start offering EMI to your customers and watch your sales grow
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-3">What You Need:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-[#008080]" />
                                        Valid business registration documents
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-[#008080]" />
                                        GST registration (if applicable)
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-[#008080]" />
                                        Bank account details
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-[#008080]" />
                                        Owner's identity proof
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Business Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Owner Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Business Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    >
                                        <option value="">Select business type</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="fashion">Fashion & Apparel</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="appliances">Home Appliances</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Monthly Revenue <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="monthlyRevenue"
                                        value={formData.monthlyRevenue}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    >
                                        <option value="">Select monthly revenue</option>
                                        <option value="0-1L">Below ₹1 Lakh</option>
                                        <option value="1L-5L">₹1 - ₹5 Lakhs</option>
                                        <option value="5L-10L">₹5 - ₹10 Lakhs</option>
                                        <option value="10L+">Above ₹10 Lakhs</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Additional Information
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                        placeholder="Tell us more about your business..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Merchant;