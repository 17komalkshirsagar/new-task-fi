import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { CreditCard, Smartphone, Globe, Zap, Lock, BarChart } from "lucide-react";
import { toast } from "sonner";
const PaymentSolution = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        industryType: "",
        transactionVolume: "",
        requirements: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Payment solution request submitted:", formData);
        // TODO: Implement API call to submit payment solution request
        toast.success("Thank you for your interest! Our team will contact you within 24 hours.");
        setFormData({
            companyName: "",
            contactPerson: "",
            email: "",
            phone: "",
            website: "",
            industryType: "",
            transactionVolume: "",
            requirements: ""
        });
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">EMI Payment Solutions</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Empower your business with our comprehensive EMI payment infrastructure and API solutions
                        </p>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#008080] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CreditCard className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Payment Gateway</h3>
                                <p className="text-sm text-gray-600">
                                    Secure and reliable payment gateway with EMI capabilities built-in
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#008080] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Smartphone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Mobile SDK</h3>
                                <p className="text-sm text-gray-600">
                                    Easy-to-integrate SDKs for iOS and Android applications
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#008080] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Web Integration</h3>
                                <p className="text-sm text-gray-600">
                                    Seamless web integration with comprehensive API documentation
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#008080] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Instant Approvals</h3>
                                <p className="text-sm text-gray-600">
                                    Real-time credit assessment and instant EMI approvals
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#008080] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
                                <p className="text-sm text-gray-600">
                                    PCI-DSS compliant with bank-grade security measures
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#008080] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                                <p className="text-sm text-gray-600">
                                    Comprehensive dashboard with transaction analytics and insights
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">RESTful APIs</h3>
                                        <p className="text-sm text-gray-600">
                                            Well-documented REST APIs for easy integration
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Webhook Support</h3>
                                        <p className="text-sm text-gray-600">
                                            Real-time notifications for all transaction events
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Multi-currency Support</h3>
                                        <p className="text-sm text-gray-600">
                                            Accept payments in multiple currencies
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Sandbox Environment</h3>
                                        <p className="text-sm text-gray-600">
                                            Test your integration in a safe environment
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">24/7 Technical Support</h3>
                                        <p className="text-sm text-gray-600">
                                            Dedicated technical support team available round the clock
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Custom Branding</h3>
                                        <p className="text-sm text-gray-600">
                                            White-label solution with your brand identity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Contact Person <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
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
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                        placeholder="https://example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Industry Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="industryType"
                                        value={formData.industryType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    >
                                        <option value="">Select industry</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="retail">Retail</option>
                                        <option value="fintech">Fintech</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="education">Education</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Monthly Transaction Volume <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="transactionVolume"
                                        value={formData.transactionVolume}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                    >
                                        <option value="">Select volume</option>
                                        <option value="0-1cr">Below ₹1 Crore</option>
                                        <option value="1cr-5cr">₹1 - ₹5 Crores</option>
                                        <option value="5cr-10cr">₹5 - ₹10 Crores</option>
                                        <option value="10cr+">Above ₹10 Crores</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Specific Requirements
                                    </label>
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                                >
                                    Request Demo
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
export default PaymentSolution;