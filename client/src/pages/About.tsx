import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
const About = () => {
    const steps = [
        {
            number: 1,
            title: "Founded with Vision",
            color: "from-emerald-500 to-teal-500",
            text: "Started in 2020 with a simple vision: make premium products accessible to everyone through smart financing.",
        },
        {
            number: 2,
            title: "Rapid Growth",
            color: "from-teal-500 to-cyan-500",
            text: "Quickly grew to serve over 50,000 happy customers across the country with our innovative EMI solutions.",
        },
        {
            number: 3,
            title: "Industry Leader",
            color: "from-cyan-500 to-emerald-500",
            text: "Today, we're recognized as a leader in flexible payment solutions, constantly innovating to serve you better.",
        },
    ];
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-24 text-white">
                {}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full -mr-40 -mt-40 animate-[pulse_6s_ease-in-out_infinite]" />
                    <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-white/10 blur-3xl rounded-full -ml-40 -mb-40 animate-[pulse_7s_ease-in-out_infinite]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_60%)]" />
                </div>
                {}
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-200">
                            About EMI Store
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
                        Empowering your purchases with{" "}
                        <span className="font-semibold text-white">
                            flexible, stress-free payment solutions
                        </span>{" "}
                        — bringing premium products within everyone’s reach.
                    </p>
                    {}
                    <div className="mt-10 flex justify-center">
                        <div className="h-1 w-24 bg-gradient-to-r from-emerald-300 to-cyan-400 rounded-full shadow-lg" />
                    </div>
                </div>
                {}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-20 h-20 bg-white/20 rounded-full top-1/3 left-1/4 animate-[float_8s_ease-in-out_infinite]" />
                    <div className="absolute w-28 h-28 bg-white/10 rounded-full bottom-1/3 right-1/4 animate-[float_12s_ease-in-out_infinite]" />
                </div>
            </section>
            {}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    Our Mission
                                </span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                At EMI Store, we believe that everyone deserves access to quality
                                products without financial constraints. Our mission is to make premium
                                products accessible to everyone through flexible, interest-free
                                payment plans.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                We're committed to providing a seamless shopping experience with
                                transparent pricing, instant approvals, and exceptional customer
                                service. Our goal is to empower customers to make purchases that
                                improve their lives without the stress of upfront costs.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                With cutting-edge technology and a customer-first approach, we're
                                transforming the retail landscape and making financial flexibility a
                                reality for millions.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 p-1 shadow-xl">
                                <div className="w-full h-full rounded-3xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1706097081321-c45d7f7d4652?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Our Mission Illustration"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-center mt-4 text-gray-600 font-medium">
                                Your financial freedom is our priority 🚀
                            </p>
                        </div>
                    </div>
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="text-center mb-16"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        Our Journey
                                    </span>
                                </h2>
                            </motion.div>
                            <ol className="space-y-8">
                                {steps.map(({ number, title, color, text }, i) => (
                                    <motion.li
                                        key={number}
                                        className="flex gap-6 items-start group"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: i * 0.2,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <div
                                            className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            {number}
                                        </div>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                                {title}
                                            </h3>
                                            <p className="text-gray-600 text-lg">{text}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default About;