import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useSubmitContactFormMutation } from "../redux/apis/contact.api";
import { toast } from "sonner";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitContactForm, { isLoading, }] = useSubmitContactFormMutation();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await submitContactForm(formData).unwrap();
            toast.success(result.message || "Message sent successfully!");

            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (err: any) {
            console.error("Failed to submit contact form:", err);
            toast.error(err?.data?.message || "Failed to send message. Please try again.");
        }
    };
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            { }
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        { }
                        <div>
                            <h2 className="text-4xl font-bold mb-8">
                                <span className="bg-gradient-to-r from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                                    Contact Information
                                </span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            Office No. 401, 4th Floor,<br />
                                            Parinee Crescenzo, G Block BKC,<br />
                                            Bandra East, Mumbai - 400051,<br />
                                            Maharashtra, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-lg flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Phone</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-[#008080]" />
                                                <p className="text-gray-600">+91 1800-123-4567</p>
                                            </div>
                                            <p className="text-sm text-gray-500 ml-6">Hours: Mon-Sat, 9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Email</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-[#008080]" />
                                                <p className="text-gray-600">info@snapmint.com</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-[#008080]" />
                                                <p className="text-gray-600">support@snapmint.com</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-[#008080]" />
                                                <p className="text-gray-600">sales@snapmint.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#008080] rounded-lg flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Business Hours</h3>
                                        <p className="text-gray-600">
                                            Monday - Saturday: 9:00 AM - 6:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { }
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                                    Send us a Message
                                </span>
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                            placeholder="+91 98765-43210"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="emi">EMI Plans</option>
                                        <option value="product">Product Information</option>
                                        <option value="support">Customer Support</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-colors resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default Contact;