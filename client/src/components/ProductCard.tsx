import { Link } from "react-router-dom";
import { IProduct } from "../models/poduct.interface";
interface ProductCardProps {
    product: IProduct;
}
const ProductCard = ({ product }: ProductCardProps) => {
    const discount =
        product.mrp > product.price
            ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
            : 0;
    const hasDiscount = discount > 0;
    const emiAmount = Math.round(product.price / 3);
    const downpayment = Math.round(product.price / 3);
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover:shadow-lg transition-all duration-300 mb-4">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[180px] flex-shrink-0">
                    <Link to={`/products/${product.slug}`}>
                        <div className="bg-[#F8FAFB] rounded-lg p-4 aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://via.placeholder.com/400?text=Product+Image";
                                }}
                            />
                        </div>
                    </Link>
                </div>
                { }
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <Link to={`/products/${product.slug}`}>
                            <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 line-clamp-2 hover:text-[#00A8A8] transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                        <p className="text-[13px] text-[#6B7280] mb-3">
                            <span className="font-medium">Color:</span> {product.variant.split(" ")[0] || "Black"} | <span className="font-medium">Product Type:</span> {product.variant.split(" ").slice(1).join(" ") || "Electronics"}
                        </p>
                    </div>
                    { }
                    <div className="mt-3">
                        <span className="inline-block bg-[#7ED321] text-[#1A1A1A] text-xs font-semibold px-3 py-1.5 rounded-full">
                            0% EMI on 2 months
                        </span>
                    </div>
                </div>
                { }
                <div className="flex flex-col items-end justify-between md:w-[200px] border-l-0 md:border-l md:pl-6 border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0 border-[#E5E7EB]">
                    <div className="text-right w-full">
                        { }
                        <p className="text-xs text-[#6B7280] mb-1">EMI From:</p>
                        <div className="mb-2">
                            <span className="text-2xl font-bold text-[#1A1A1A]">
                                ₹{emiAmount.toLocaleString("en-IN")}
                            </span>
                            <span className="text-base text-[#6B7280]">/month</span>
                        </div>
                        { }
                        <p className="text-[13px] text-[#6B7280] mb-2">
                            Downpayment: ₹{downpayment.toLocaleString("en-IN")}
                        </p>
                        { }
                        <div className="mt-2">
                            <p className="text-[13px] text-[#6B7280] mb-1">Price:</p>
                            <div className="flex items-center justify-end gap-2 flex-wrap">
                                <span className="text-base font-bold text-[#1A1A1A]">
                                    ₹{product.price.toLocaleString("en-IN")}
                                </span>
                                {hasDiscount && (
                                    <>
                                        <span className="text-sm text-[#6B7280] line-through">
                                            ₹{product.mrp.toLocaleString("en-IN")}
                                        </span>
                                        <span className="text-sm font-medium text-[#EF4444]">
                                            {discount}% Off
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    { }
                    <Link
                        to={`/products/${product.slug}`}
                        className="mt-4 w-full bg-[#00A8A8] text-white py-2.5 px-4 rounded-lg hover:bg-[#008888] transition-colors font-medium text-center text-sm"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;