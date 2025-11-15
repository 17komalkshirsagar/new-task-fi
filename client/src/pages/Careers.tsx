import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";
const Careers = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers at Snapmint</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our mission to revolutionize digital payments and make financial services accessible to everyone
                        </p>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join Snapmint?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                                    <p className="text-sm text-gray-600">
                                        Be part of a fast-growing fintech company with endless opportunities to learn and advance your career
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#00CCC] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Amazing Team</h3>
                                    <p className="text-sm text-gray-600">
                                        Work with talented professionals who are passionate about innovation and creating impact
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00CCC] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Briefcase className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                                    <p className="text-sm text-gray-600">
                                        Enjoy competitive salaries, health insurance, and a comprehensive benefits package
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#00A8A8] to-[#008080] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                                    <p className="text-sm text-gray-600">
                                        We believe in maintaining a healthy work-life balance with flexible work arrangements
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
                        <div className="space-y-4">
                            {}
                            <div className="border-l-4 border-[#008080] bg-gray-50 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900">Senior Full Stack Developer</h3>
                                    <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">Full-time</span>
                                </div>
                                <p className="text-gray-600 mb-3">Mumbai, Maharashtra</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    We're looking for an experienced Full Stack Developer to join our engineering team. You'll be working on building scalable fintech solutions.
                                </p>
                                <button className="bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                                    Apply Now
                                </button>
                            </div>
                            {}
                            <div className="border-l-4 border-[#008080] bg-gray-50 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900">Product Manager</h3>
                                    <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">Full-time</span>
                                </div>
                                <p className="text-gray-600 mb-3">Mumbai, Maharashtra</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    Join our product team to help shape the future of digital payments and EMI solutions in India.
                                </p>
                                <button className="bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                                    Apply Now
                                </button>
                            </div>
                            {}
                            <div className="border-l-4 border-[#008080] bg-gray-50 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900">UX/UI Designer</h3>
                                    <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">Full-time</span>
                                </div>
                                <p className="text-gray-600 mb-3">Mumbai, Maharashtra</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    Create beautiful and intuitive user experiences for our fintech platform used by millions.
                                </p>
                                <button className="bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {}
                    <div className="bg-gradient-to-r from-[#008080] to-[#00A8A8] rounded-2xl shadow-lg p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
                        <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <a
                            href="mailto:careers@snapmint.com"
                            className="inline-block bg-white text-[#008080] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                            Send Your Resume
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Careers;