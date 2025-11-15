import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductBySlugQuery } from "../redux/apis/product.api";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../components/ui/dialog";
import { ArrowLeft, Truck, ChevronDown, } from "lucide-react";
import { Card } from "../components/ui/card";
const ProductDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data, isLoading, error } = useGetProductBySlugQuery(slug || "");
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedDownpayment, setSelectedDownpayment] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [selectedColor, setSelectedColor] = useState<string>("Cosmic Orange");
    const [selectedVariant, setSelectedVariant] = useState<string>("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                setSelectedImage((prev) => (prev === 0 ? 5 : prev - 1));
            } else if (e.key === "ArrowRight") {
                setSelectedImage((prev) => (prev === 5 ? 0 : prev + 1));
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-6" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <Card className="overflow-hidden border-2">
                                <div className="h-96 bg-gray-200 animate-pulse" />
                                <div className="p-6 bg-gray-50 border-t space-y-3">
                                    <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4" />
                                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Card className="border-2">
                                <div className="p-6 space-y-4">
                                    <div className="h-10 bg-gray-200 rounded animate-pulse w-1/2" />
                                    <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                                    <div className="space-y-3 mt-6">
                                        {Array.from({ length: 4 }).map((_, i) => (
                                            <div key={i} className="h-24 bg-gray-200 rounded animate-pulse" />
                                        ))}
                                    </div>
                                    <div className="h-12 bg-gray-200 rounded animate-pulse mt-6" />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (error || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="text-center">
                    <div className="text-xl text-red-600 mb-4">Product not found</div>
                    <Link to="/">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
    const { product, emiPlans } = data;
    const handleProceed = () => {
        if (selectedPlan) {
            setShowModal(true);
        }
    };
    const selectedPlanDetails = emiPlans.find((plan) => plan._id === selectedPlan);
    const calculateDiscount = () => {
        if (product.mrp > product.price) {
            return Math.round(((product.mrp - product.price) / product.mrp) * 100);
        }
        return 0;
    };
    console.log(calculateDiscount);

    const productImages = [
        {
            url: product.image,
            label: "Front View",
            alt: `${product.name} - Front view`
        },
        {
            url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            label: "Back View",
            alt: `${product.name} - Back view with cameras`
        },
        {
            url: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80",
            label: "Side View",
            alt: `${product.name} - Side profile`
        },
        {
            url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80",
            label: "Color Options",
            alt: `${product.name} - Available colors`
        },
        {
            url: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80",
            label: "Features",
            alt: `${product.name} - Key features`
        },
        {
            url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
            label: "Size Comparison",
            alt: `${product.name} - Size comparison`
        },
    ];
    return (
        <div className="min-h-screen bg-white py-6 sm:py-8">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 font-medium transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 sm:gap-8 lg:gap-8">
                    { }
                    <div className="order-2 lg:order-1">
                        <div className="flex gap-2">
                            { }
                            <div className="flex flex-col gap-2">
                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        aria-label={img.label}
                                        className={`group relative w-20 h-20 border-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out
                                            ${selectedImage === index
                                                ? "border-[#0A5C5C] ring-2 ring-[#0A5C5C] ring-opacity-30 shadow-md"
                                                : "border-gray-200 hover:border-[#0A5C5C] hover:shadow-sm"
                                            }
                                            hover:scale-105 active:scale-95 flex-shrink-0`}
                                        title={img.label}
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.alt}
                                            className={`w-full h-full object-contain p-1 bg-white transition-transform duration-200
                                                ${selectedImage === index ? "" : "group-hover:scale-110"}`}
                                        />
                                        { }
                                        {selectedImage === index && (
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0A5C5C]"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                            { }
                            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden">
                                { }
                                <div className="relative min-h-[400px] flex items-center justify-center">
                                    {productImages.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img.url}
                                            alt={img.alt}
                                            className={`w-full h-auto max-h-[500px] object-contain transition-all duration-300 ease-in-out absolute inset-0
                                                ${selectedImage === index
                                                    ? "opacity-100 scale-100"
                                                    : "opacity-0 scale-95 pointer-events-none"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        { }
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-2">Color</label>
                                <div className="relative">
                                    <select
                                        value={selectedColor}
                                        onChange={(e) => setSelectedColor(e.target.value)}
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md appearance-none bg-white focus:border-[#0A5C5C] focus:ring-1 focus:ring-[#0A5C5C] transition-all cursor-pointer text-sm"
                                    >
                                        <option>Cosmic Orange</option>
                                        <option>Space Black</option>
                                        <option>Silver</option>
                                        <option>Deep Purple</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-2">Variant</label>
                                <div className="relative">
                                    <select
                                        value={selectedVariant || product.variant}
                                        onChange={(e) => setSelectedVariant(e.target.value)}
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md appearance-none bg-white focus:border-[#0A5C5C] focus:ring-1 focus:ring-[#0A5C5C] transition-all cursor-pointer text-sm"
                                    >
                                        <option>Storage: 256 GB, RAM:...</option>
                                        <option>Storage: 128 GB, RAM:...</option>
                                        <option>Storage: 512 GB, RAM:...</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    { }
                    <div className="order-1 lg:order-2">
                        <div className="bg-[#E8F5F5] rounded-2xl p-8 space-y-6">
                            { }
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h1>
                                <p className="text-[#6B7280] text-sm mb-6">
                                    (Storage: 256 GB, Color: {selectedColor})
                                </p>
                                <div className="text-4xl font-bold text-gray-900 mb-6">
                                    ₹{product.price.toLocaleString("en-IN")}
                                </div>
                            </div>
                            { }
                            <div className="bg-white rounded-lg p-5 space-y-4">
                                <h3 className="font-semibold text-gray-900 text-base">Choose a Downpayment</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setSelectedDownpayment(Math.round(product.price * 0.15))}
                                        className={`h-12 px-4 rounded-md font-semibold transition-all duration-200 ${selectedDownpayment === Math.round(product.price * 0.15)
                                            ? "bg-[#0A5C5C] text-white shadow-md"
                                            : "bg-white border-2 border-gray-800 text-gray-900 hover:border-[#0A5C5C]"
                                            }`}
                                    >
                                        ₹{Math.round(product.price * 0.15).toLocaleString("en-IN")}
                                    </button>
                                    <button
                                        onClick={() => setSelectedDownpayment(Math.round(product.price * 0.30))}
                                        className={`h-12 px-4 rounded-md font-semibold transition-all duration-200 ${selectedDownpayment === Math.round(product.price * 0.30)
                                            ? "bg-[#0A5C5C] text-white shadow-md"
                                            : "bg-white border-2 border-gray-800 text-gray-900 hover:border-[#0A5C5C]"
                                            }`}
                                    >
                                        ₹{Math.round(product.price * 0.30).toLocaleString("en-IN")}
                                    </button>
                                </div>
                            </div>
                            { }
                            <div className="bg-white rounded-lg p-5 space-y-4">
                                <h3 className="font-semibold text-gray-900 text-base">Choose EMI Tenure</h3>
                                {emiPlans.length === 0 ? (
                                    <div className="text-center py-4">
                                        <p className="text-gray-600">No EMI plans available</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {emiPlans.map((plan) => {
                                            const totalAmount = plan.monthlyPayment * plan.tenure;
                                            const interestPerMonth = totalAmount > product.price
                                                ? ((totalAmount - product.price) / product.price * 100 / plan.tenure).toFixed(2)
                                                : "0";
                                            return (
                                                <label
                                                    key={plan._id}
                                                    className={`flex items-center justify-between p-4 rounded-md border cursor-pointer transition-all hover:border-[#0A5C5C] ${selectedPlan === plan._id
                                                        ? "border-[#0A5C5C] bg-white"
                                                        : "border-gray-200"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="radio"
                                                            name="emi-plan"
                                                            checked={selectedPlan === plan._id}
                                                            onChange={() => setSelectedPlan(plan._id)}
                                                            className="w-5 h-5 text-[#0A5C5C] border-gray-300 focus:ring-[#0A5C5C] cursor-pointer"
                                                        />
                                                        <div>
                                                            <div className="font-semibold text-gray-900 text-base">
                                                                ₹{plan.monthlyPayment.toLocaleString("en-IN")} x {plan.tenure} months
                                                            </div>
                                                            {plan.interestRate > 0 && (
                                                                <div className="text-xs text-[#6B7280] mt-0.5">
                                                                    ({interestPerMonth}% per mon*)
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {plan.interestRate === 0 && (
                                                        <span className="bg-[#7ED321] text-white text-xs font-bold px-3 py-1 rounded">
                                                            *0% EMI
                                                        </span>
                                                    )}
                                                </label>
                                            );
                                        })}
                                    </div>
                                )}
                                {emiPlans.length > 0 && (
                                    <p className="text-xs text-[#6B7280] italic">
                                        EMIs starting 3<sup>rd</sup>Dec
                                    </p>
                                )}
                            </div>
                            { }
                            <button
                                onClick={handleProceed}
                                disabled={!selectedPlan}
                                className="w-full bg-[#0A5C5C] h-12 rounded-lg font-semibold text-base hover:bg-[#084848] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                            >
                                <span className="text-[#B4D93A]">
                                    {selectedPlan && emiPlans.find(p => p._id === selectedPlan)
                                        ? `Buy on ${emiPlans.find(p => p._id === selectedPlan)?.tenure} months EMI`
                                        : "Select EMI Plan to Continue"}
                                </span>
                            </button>
                            <p className="text-xs text-[#6B7280] text-center -mt-2">
                                *Total extra payment per month/order value
                            </p>
                            { }
                            <div className="text-sm text-[#6B7280]">
                                Sold by :<span className="text-gray-700">Balaji Infocom</span>
                            </div>
                            { }
                            <div className="bg-white rounded-lg p-5">
                                <div className="flex items-start gap-3">
                                    <Truck className="w-5 h-5 text-[#0A5C5C] mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                                            <span className="font-semibold text-gray-900">Shipping Details:</span>
                                            <span className="bg-[#7ED321] text-white text-xs font-semibold px-2 py-1 rounded">
                                                Free Shipping
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#6B7280]">
                                            Dispatch in less than 48 hours and delivery in 3-7 working days after dispatch
                                        </p>
                                    </div>
                                </div>
                            </div>
                            { }
                            <div className="bg-white rounded-lg p-5">
                                <h3 className="font-semibold text-gray-900 mb-3 text-base">Product Details</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-gray-400">•</span>
                                        <span>Storage: 256 GB</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gray-400">•</span>
                                        <span>Color: {selectedColor}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { }
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">EMI Plan Selected</DialogTitle>
                        <DialogDescription>
                            Review your selected EMI plan details below
                        </DialogDescription>
                    </DialogHeader>
                    {selectedPlanDetails && (
                        <div className="space-y-4 py-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium text-gray-700">Product:</span>
                                    <span className="text-gray-900 font-semibold">{product.name}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium text-gray-700">Variant:</span>
                                    <span className="text-gray-900">{product.variant}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium text-gray-700">Monthly Payment:</span>
                                    <span className="text-xl font-bold text-blue-600">
                                        ₹{selectedPlanDetails.monthlyPayment.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium text-gray-700">Tenure:</span>
                                    <span className="text-gray-900 font-semibold">
                                        {selectedPlanDetails.tenure} months
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium text-gray-700">Interest Rate:</span>
                                    <Badge variant={selectedPlanDetails.interestRate === 0 ? "default" : "secondary"}>
                                        {selectedPlanDetails.interestRate}%
                                    </Badge>
                                </div>
                                {selectedPlanDetails.cashback && (
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-medium text-gray-700">Cashback:</span>
                                        <Badge variant="outline" className="text-green-700 border-green-500">
                                            {selectedPlanDetails.cashback}
                                        </Badge>
                                    </div>
                                )}
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <p className="text-sm text-gray-700 text-center">
                                    Total Amount: <span className="font-bold text-lg text-blue-700">
                                        ₹{(selectedPlanDetails.monthlyPayment * selectedPlanDetails.tenure).toLocaleString()}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                    <DialogFooter className="gap-2">
                        <Button variant="outline" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                toast.success("EMI plan confirmed! Proceeding to checkout...");
                                setShowModal(false);
                            }}
                        >
                            Confirm & Proceed
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default ProductDetail;