export interface IProduct {
    _id: string;
    name: string;
    slug: string;
    variant: string;
    mrp: number;
    price: number;
    image: string;
    createdAt: string;
    updatedAt: string;
}
export interface IEmiPlan {
    _id: string;
    productId: string;
    monthlyPayment: number;
    tenure: number;
    interestRate: number;
    cashback?: string;
    createdAt: string;
    updatedAt: string;
}
export interface IProductWithEmiPlans {
    product: IProduct;
    emiPlans: IEmiPlan[];
}
export interface IPagination {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
}