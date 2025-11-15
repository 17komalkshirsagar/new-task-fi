import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
interface FooterProps {
    colorScheme?: "dark" | "light" | "gradient";
}
const Footer = ({ colorScheme = "dark" }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    console.log("currentYear::", currentYear)


    const colorSchemes = {
        dark: {
            bg: "bg-white",
            text: "text-[#4B5563]",
            heading: "text-[#111827]",
            linkHover: "hover:text-[#008080]",
            border: "border-[#E5E7EB]",
            socialIcon: "text-[#008080]",
            socialHoverBg: "hover:bg-[#008080]/10",
        },
        light: {
            bg: "bg-white",
            text: "text-[#4B5563]",
            heading: "text-[#111827]",
            linkHover: "hover:text-[#008080]",
            border: "border-[#E5E7EB]",
            socialIcon: "text-[#008080]",
            socialHoverBg: "hover:bg-[#008080]/10",
        },
        gradient: {
            bg: "bg-white",
            text: "text-[#4B5563]",
            heading: "text-[#111827]",
            linkHover: "hover:text-[#008080]",
            border: "border-[#E5E7EB]",
            socialIcon: "text-[#008080]",
            socialHoverBg: "hover:bg-[#008080]/10",
        },
    };
    const colors = colorSchemes[colorScheme];
    return (
        <footer className={`${colors.bg} shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] min-h-[400px]`}>
            { }
            <div className="max-w-[1440px] mx-auto px-10 py-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    { }
                    <div className="space-y-5">
                        { }
                        <Link to="/" className="inline-block">
                            <span className="text-[32px] font-bold tracking-tight">
                                <span className={`font-semibold ${colors.heading}`}>snap</span>
                                <span className="text-[#008080]">mint</span>
                            </span>
                        </Link>
                        { }
                        <h3 className={`text-base font-semibold ${colors.heading}`}>
                            Snapmint Credit Advisory Private Limited
                        </h3>
                        { }
                        <address className={`text-sm leading-relaxed not-italic ${colors.text}`}>
                            Office No. 401, 4th Floor,<br />
                            Parinee Crescenzo, G Block BKC,<br />
                            Bandra East, Mumbai - 400051,<br />
                            Maharashtra, India
                        </address>
                        { }
                        <div className="space-y-2">
                            <p className={`text-sm font-medium ${colors.text}`}>
                                <span className={colors.heading}>Contact:</span> +91 1800-123-4567
                            </p>
                            <p className={`text-sm ${colors.text}`}>
                                <span className={colors.heading}>Hours:</span> Mon-Sat, 9:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                    { }
                    <div>
                        <h3 className={`text-lg font-semibold mb-5 ${colors.heading}`}>Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/about"
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Join as a EMI Store Merchant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Request EMI Payment Solution
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className={`text-lg font-semibold mb-5 ${colors.heading}`}>Support Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className={`text-sm ${colors.text} ${colors.linkHover} transition-colors duration-300 inline-block`}
                                >
                                    Corporate Information
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={`text-lg font-semibold mb-5 ${colors.heading}`}>
                            Download Snapmint Today
                        </h3>
                        <div className="space-y-3">
                            { }
                            <a
                                href="https://play.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-[150px] h-[50px] bg-black rounded-lg hover:opacity-80 transition-opacity duration-300"
                            >
                                <div className="flex items-center justify-center h-full px-3">
                                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="white">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className="text-left">
                                        <p className="text-[8px] text-white/80 leading-tight">GET IT ON</p>
                                        <p className="text-xs font-semibold text-white leading-tight">
                                            Google Play
                                        </p>
                                    </div>
                                </div>
                            </a>
                            { }
                            <a
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-[150px] h-[50px] bg-black rounded-lg hover:opacity-80 transition-opacity duration-300"
                            >
                                <div className="flex items-center justify-center h-full px-3">
                                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="white">
                                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                    </svg>
                                    <div className="text-left">
                                        <p className="text-[8px] text-white/80 leading-tight">
                                            Download on the
                                        </p>
                                        <p className="text-xs font-semibold text-white leading-tight">
                                            App Store
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`border-t ${colors.border}`}>
                <div className="max-w-[1440px] mx-auto px-10 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                        { }
                        <div className="flex items-center gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-8 h-8 rounded-full ${colors.socialIcon} ${colors.socialHoverBg} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-8 h-8 rounded-full ${colors.socialIcon} ${colors.socialHoverBg} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-8 h-8 rounded-full ${colors.socialIcon} ${colors.socialHoverBg} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-8 h-8 rounded-full ${colors.socialIcon} ${colors.socialHoverBg} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                        { }
                        <div className="flex items-center gap-2">
                            <span className={`text-[13px] ${colors.text}`}>Proudly made in</span>
                            <svg className="w-5 h-5" viewBox="0 0 36 27" fill="none">
                                <rect width="36" height="27" fill="white" />
                                <rect width="36" height="9" fill="#FF9933" />
                                <rect y="18" width="36" height="9" fill="#138808" />
                                <circle cx="18" cy="13.5" r="3.6" fill="#000080" />
                                <circle cx="18" cy="13.5" r="3" fill="white" />
                                <circle cx="18" cy="13.5" r="0.5" fill="#000080" />
                            </svg>
                            <span className={`text-[13px] font-semibold ${colors.heading}`}>India</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;