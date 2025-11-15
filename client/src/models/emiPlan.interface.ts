import { IProduct } from "./poduct.interface";
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
export interface IEmiPlanPopulated extends Omit<IEmiPlan, "productId"> {
    productId: IProduct;
}
export interface IPagination {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
}
export interface IProductWithEmiPlans {
    product: IProduct;
    emiPlans: IEmiPlan[];
}