import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSignOutMutation } from "../../redux/apis/auth.api";
import { useGetAllProductsQuery } from "../../redux/apis/product.api";
import { useGetAllContactsQuery, useUpdateContactStatusMutation, useDeleteContactMutation } from "../../redux/apis/contact.api";
import { useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } from "../../redux/apis/product.api";
import { useState } from "react";
import { toast } from "sonner";
const Dashboard = () => {
    const navigate = useNavigate();
    const { admin } = useSelector((state: RootState) => state.auth);
    const [signOut] = useSignOutMutation();
    const { data: productsData } = useGetAllProductsQuery({});
    const { data: contactsData, isLoading: contactsLoading } = useGetAllContactsQuery({ limit: 10 });
    const [updateContactStatus] = useUpdateContactStatusMutation();
    const [deleteContact] = useDeleteContactMutation();
    const [createProduct] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProductMutation] = useDeleteProductMutation();
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [productForm, setProductForm] = useState({
        name: "",
        slug: "",
        variant: "",
        mrp: "",
        price: "",
        image: "",
    });
    const products = productsData?.result || [];
    const contacts = contactsData?.result || [];
    const totalProducts = products.length;
    const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);
    const avgPrice = totalProducts > 0 ? Math.round(totalRevenue / totalProducts) : 0;
    console.log(avgPrice);

    const handleStatusUpdate = async (id: string, status: string) => {
        try {
            await updateContactStatus({ id, status }).unwrap();
            toast.success("Contact status updated successfully!");
        } catch (error: any) {
            console.error("Failed to update status:", error);
            toast.error(error?.data?.message || "Failed to update contact status");
        }
    };
    const handleDeleteContact = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            try {
                await deleteContact(id).unwrap();
                toast.success("Contact deleted successfully!");
            } catch (error: any) {
                console.error("Failed to delete contact:", error);
                toast.error(error?.data?.message || "Failed to delete contact");
            }
        }
    };
    const filteredContacts = selectedStatus === "all"
        ? contacts
        : contacts.filter(c => c.status === selectedStatus);
    const handleProductFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductForm({ ...productForm, [e.target.name]: e.target.value });
    };
    const handleAddProduct = () => {
        setShowAddProduct(true);
        setEditingProduct(null);
        setProductForm({
            name: "",
            slug: "",
            variant: "",
            mrp: "",
            price: "",
            image: "",
        });
    };
    const handleEditProduct = (product: any) => {
        setEditingProduct(product);
        setShowAddProduct(true);
        setProductForm({
            name: product.name,
            slug: product.slug,
            variant: product.variant,
            mrp: product.mrp.toString(),
            price: product.price.toString(),
            image: product.image,
        });
    };
    const handleDeleteProduct = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await deleteProductMutation(id).unwrap();
                toast.success("Product deleted successfully!");
            } catch (error: any) {
                console.error("Failed to delete product:", error);
                toast.error(error?.data?.message || "Failed to delete product");
            }
        }
    };
    const handleSubmitProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const productData = {
                name: productForm.name,
                slug: productForm.slug,
                variant: productForm.variant,
                mrp: parseFloat(productForm.mrp),
                price: parseFloat(productForm.price),
                image: productForm.image,
            };
            if (editingProduct) {
                /// await updateProduct({ id: editingProduct._id, ...productData }).unwrap();
                await updateProduct({
                    id: editingProduct._id,
                    body: productData
                }).unwrap();


                toast.success("Product updated successfully!");
            } else {
                await createProduct(productData).unwrap();
                toast.success("Product added successfully!");
            }
            setShowAddProduct(false);
            setProductForm({
                name: "",
                slug: "",
                variant: "",
                mrp: "",
                price: "",
                image: "",
            });
        } catch (error: any) {
            console.error("Failed to save product:", error);
            toast.error(error?.data?.message || "Failed to save product");
        }
    };
    const handleLogout = async () => {
        try {
            await signOut().unwrap();
            toast.success("Logged out successfully!");
            navigate("/admin/login");
        } catch (error: any) {
            console.error("Logout failed:", error);
            toast.error(error?.data?.message || "Logout failed");
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50 to-cyan-50">
            { }
            <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                                    Admin Dashboard
                                </h1>
                                <p className="text-sm text-gray-600 mt-0.5">
                                    Welcome back, {admin?.firstName} {admin?.lastName}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                to="/"
                                className="px-4 py-2 bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white rounded-lg hover:shadow-lg transition-all font-medium flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                View Site
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            { }
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                { }
                <div className="relative bg-gradient-to-br from-[#008080] via-[#00A8A8] to-[#20B2AA] rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Hello, {admin?.firstName}! 👋
                        </h2>
                        <p className="text-teal-100 text-lg">
                            Here's what's happening with your store today
                        </p>
                    </div>
                </div>
                { }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    { }
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#008080] to-[#00A8A8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-bold bg-gradient-to-br from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                                        {totalProducts}
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">Total Products</p>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-green-600 font-medium">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                +12% from last month
                            </div>
                        </div>
                    </div>
                    { }
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#008080] to-[#00A8A8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-bold bg-gradient-to-br from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                                        127
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-green-600 font-medium">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                +23% from last month
                            </div>
                        </div>
                    </div>
                    { }
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                        1,245
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">Total Customers</p>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-green-600 font-medium">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                +18% from last month
                            </div>
                        </div>
                    </div>
                    { }
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="relative p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-bold bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        ₹{(totalRevenue / 1000).toFixed(0)}K
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-green-600 font-medium">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                +31% from last month
                            </div>
                        </div>
                    </div>
                </div>
                { }
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    { }
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-800">Sales Analytics</h3>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#008080] outline-none">
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last 90 days</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            {[
                                { day: "Monday", value: 85, color: "from-[#008080] to-[#00A8A8]" },
                                { day: "Tuesday", value: 70, color: "from-[#008080] to-[#00A8A8]" },
                                { day: "Wednesday", value: 92, color: "from-green-500 to-emerald-500" },
                                { day: "Thursday", value: 65, color: "from-orange-500 to-amber-500" },
                                { day: "Friday", value: 88, color: "from-red-500 to-pink-500" },
                                { day: "Saturday", value: 95, color: "from-[#008080] to-[#00A8A8]" },
                                { day: "Sunday", value: 78, color: "from-teal-500 to-cyan-500" },
                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-600">{item.day}</span>
                                        <span className="text-sm font-bold text-gray-800">{item.value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    { }
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Top Selling Products</h3>
                        <div className="space-y-4">
                            {products.slice(0, 5).map((product, index) => (
                                <div key={product._id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-lg flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                                        <p className="text-xs text-gray-500">{product.variant}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-800">
                                            ₹{product.price.toLocaleString()}
                                        </p>
                                        <p className="text-xs text-green-600 font-medium">
                                            {Math.floor(Math.random() * 50 + 10)} sales
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                { }
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            to="/"
                            className="group flex items-center gap-4 p-5 border-2 border-gray-200 rounded-xl hover:border-[#008080] hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">View Products</p>
                                <p className="text-sm text-gray-600">Browse catalog</p>
                            </div>
                        </Link>
                        <button className="group flex items-center gap-4 p-5 border-2 border-gray-200 rounded-xl hover:border-green-400 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Add Product</p>
                                <p className="text-sm text-gray-600">Create new</p>
                            </div>
                        </button>
                        <button className="group flex items-center gap-4 p-5 border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">View Reports</p>
                                <p className="text-sm text-gray-600">Sales analytics</p>
                            </div>
                        </button>
                    </div>
                </div>
                { }
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                            Contact History
                        </h3>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#008080] outline-none"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="resolved">Resolved</option>
                        </select>
                    </div>
                    {contactsLoading ? (
                        <div className="text-center py-8">
                            <div className="w-12 h-12 border-4 border-[#008080] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading contacts...</p>
                        </div>
                    ) : filteredContacts.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-600 text-lg">No contacts found</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-[#008080]">
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Subject</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Message</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredContacts.map((contact) => (
                                        <tr key={contact._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4 text-sm text-gray-900 font-medium">{contact.name}</td>
                                            <td className="px-4 py-4 text-sm text-gray-600">{contact.email}</td>
                                            <td className="px-4 py-4 text-sm text-gray-600">{contact.phone || "N/A"}</td>
                                            <td className="px-4 py-4 text-sm text-gray-600 capitalize">{contact.subject}</td>
                                            <td className="px-4 py-4 text-sm text-gray-600 max-w-xs truncate" title={contact.message}>
                                                {contact.message}
                                            </td>
                                            <td className="px-4 py-4">
                                                <select
                                                    value={contact.status}
                                                    onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#008080] ${contact.status === "pending"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : contact.status === "reviewed"
                                                            ? "bg-blue-100 text-blue-800"
                                                            : "bg-green-100 text-green-800"
                                                        }`}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="reviewed">Reviewed</option>
                                                    <option value="resolved">Resolved</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-600">
                                                {new Date(contact.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-4 py-4">
                                                <button
                                                    onClick={() => handleDeleteContact(contact._id)}
                                                    className="text-red-600 hover:text-red-800 font-medium text-sm hover:bg-red-50 px-3 py-1 rounded transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {!contactsLoading && filteredContacts.length > 0 && (
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                Showing {filteredContacts.length} of {contacts.length} contacts
                            </p>
                            <div className="text-sm text-gray-500">
                                Total Contacts: {contactsData?.pagination.totalItems || 0}
                            </div>
                        </div>
                    )}
                </div>
                { }
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#008080] to-[#00A8A8] bg-clip-text text-transparent">
                            Product Management
                        </h3>
                        <button
                            onClick={handleAddProduct}
                            className="px-6 py-2 bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white rounded-lg hover:shadow-lg transition-all font-medium flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Product
                        </button>
                    </div>
                    { }
                    {showAddProduct && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="sticky top-0 bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white p-6 flex items-center justify-between rounded-t-2xl">
                                    <h3 className="text-2xl font-bold">
                                        {editingProduct ? "Edit Product" : "Add New Product"}
                                    </h3>
                                    <button
                                        onClick={() => setShowAddProduct(false)}
                                        className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <form onSubmit={handleSubmitProduct} className="p-6 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={productForm.name}
                                            onChange={handleProductFormChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] outline-none"
                                            placeholder="iPhone 15 Pro Max"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                                        <input
                                            type="text"
                                            name="slug"
                                            value={productForm.slug}
                                            onChange={handleProductFormChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] outline-none"
                                            placeholder="iphone-15-pro-max"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Variant *</label>
                                        <input
                                            type="text"
                                            name="variant"
                                            value={productForm.variant}
                                            onChange={handleProductFormChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] outline-none"
                                            placeholder="256GB, Titanium Blue"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">MRP *</label>
                                            <input
                                                type="number"
                                                name="mrp"
                                                value={productForm.mrp}
                                                onChange={handleProductFormChange}
                                                required
                                                min="0"
                                                step="0.01"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] outline-none"
                                                placeholder="159999"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price *</label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={productForm.price}
                                                onChange={handleProductFormChange}
                                                required
                                                min="0"
                                                step="0.01"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] outline-none"
                                                placeholder="149999"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Image URL *</label>
                                        <input
                                            type="url"
                                            name="image"
                                            value={productForm.image}
                                            onChange={handleProductFormChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] outline-none"
                                            placeholder="https://example.com/image.jpg"
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                                        >
                                            {editingProduct ? "Update Product" : "Add Product"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowAddProduct(false)}
                                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    { }
                    {products.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <p className="text-gray-600 text-lg">No products found</p>
                            <button
                                onClick={handleAddProduct}
                                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white rounded-lg hover:shadow-lg transition-all font-medium"
                            >
                                Add Your First Product
                            </button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-[#008080]">
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Variant</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">MRP</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Discount</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product: any) => (
                                        <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                                />
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                                            <td className="px-4 py-4 text-sm text-gray-600">{product.variant}</td>
                                            <td className="px-4 py-4 text-sm text-gray-600">₹{product.mrp.toLocaleString()}</td>
                                            <td className="px-4 py-4 text-sm font-semibold text-[#008080]">₹{product.price.toLocaleString()}</td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                                    {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEditProduct(product)}
                                                        className="text-[#008080] hover:text-[#006666] font-medium text-sm hover:bg-teal-50 px-3 py-1 rounded transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(product._id)}
                                                        className="text-red-600 hover:text-red-800 font-medium text-sm hover:bg-red-50 px-3 py-1 rounded transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            Total Products: {totalProducts}
                        </p>
                        <p className="text-sm text-gray-500">
                            Total Value: ₹{totalRevenue.toLocaleString()}
                        </p>
                    </div>
                </div>
                { }
                <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-lg p-6 border-2 border-teal-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Account Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Full Name</p>
                                <p className="font-bold text-gray-900">
                                    {admin?.firstName} {admin?.lastName}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#00A8A8] rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Email Address</p>
                                <p className="font-bold text-gray-900">{admin?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Role</p>
                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#008080] to-[#00A8A8] text-white rounded-full text-sm font-bold capitalize">
                                    {admin?.role}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Dashboard;