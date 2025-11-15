import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "./customBaseQuery.api";
import { IProduct, IProductWithEmiPlans, IPagination } from "../../models/poduct.interface";
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/product`;
const customBaseQuery = createCustomBaseQuery(baseUrl);
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: customBaseQuery,
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getAllProducts: builder.query<
            { message: string; result: IProduct[]; pagination: IPagination },
            Partial<{
                page: number;
                limit: number;
                search?: string;
                minPrice?: number;
                maxPrice?: number;
                category?: string;
                brand?: string;
                maxDownpayment?: number;
                minTenure?: number;
            }>
        >({
            query: (queryParams = {}) => ({
                url: `/get-all-product`,
                method: "GET",
                params: queryParams,
            }),
            transformResponse: (data: { message: string; result: IProduct[]; pagination: IPagination }) => data,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message,
            providesTags: ["Product"],
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id) => ({
                url: `/get-product/${id}`,
                method: "GET",
            }),
            transformResponse: (data: { message: string; result: IProduct }) => data.result,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message,
            providesTags: ["Product"],
        }),
        getProductBySlug: builder.query<IProductWithEmiPlans, string>({
            query: (slug) => ({
                url: `/slug/${slug}`,
                method: "GET",
            }),
            transformResponse: (data: { message: string; result: IProductWithEmiPlans }) => data.result,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message,
            providesTags: ["Product"],
        }),
        createProduct: builder.mutation<{ message: string; result: IProduct }, Partial<IProduct>>({
            query: (body) => ({
                url: `/create/product`,
                method: "POST",
                body,
            }),
            transformResponse: (data: { message: string; result: IProduct }) => data,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message,
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation<string, { id: string; body: Partial<IProduct> }>({
            query: ({ id, body }) => ({
                url: `/update/product/${id}`,
                method: "PUT",
                body,
            }),
            transformResponse: (data: { message: string }) => data.message,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message,
            invalidatesTags: ["Product"],
        }),
        deleteProduct: builder.mutation<string, string>({
            query: (id) => ({
                url: `/delete/product/${id}`,
                method: "DELETE",
            }),
            transformResponse: (data: { message: string }) => data.message,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message,
            invalidatesTags: ["Product"],
        }),
    }),
});
export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetProductBySlugQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;