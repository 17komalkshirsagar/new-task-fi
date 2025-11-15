import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "./customBaseQuery.api";
import { IEmiPlan, IPagination } from "../../models/emiPlan.interface";
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/emi`;
const customBaseQuery = createCustomBaseQuery(baseUrl);
export const emiPlanApi = createApi({
    reducerPath: "emiPlanApi",
    baseQuery: customBaseQuery,
    tagTypes: ["EmiPlan"],
    endpoints: (builder) => ({
        getAllEmiPlans: builder.query<
            { message: string; result: IEmiPlan[]; pagination: IPagination },
            Partial<{ page: number; limit: number }>
        >({
            query: (params = {}) => ({
                url: `/get-all-emi-plans`,
                method: "GET",
                params,
            }),
            providesTags: ["EmiPlan"],
        }),
        getEmiPlansByProductId: builder.query<{ message: string; result: IEmiPlan[] }, string>({
            query: (productId) => ({
                url: `/product/${productId}`,
                method: "GET",
            }),
            providesTags: ["EmiPlan"],
        }),
        createEmiPlan: builder.mutation<{ message: string; result: IEmiPlan }, Partial<IEmiPlan>>({
            query: (body) => ({
                url: `/create`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["EmiPlan"],
        }),
        updateEmiPlan: builder.mutation<string, { id: string; body: Partial<IEmiPlan> }>({
            query: ({ id, body }) => ({
                url: `/update/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["EmiPlan"],
        }),
        deleteEmiPlan: builder.mutation<string, string>({
            query: (id) => ({
                url: `/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["EmiPlan"],
        }),
    }),
});
export const {
    useGetAllEmiPlansQuery,
    useGetEmiPlansByProductIdQuery,
    useCreateEmiPlanMutation,
    useUpdateEmiPlanMutation,
    useDeleteEmiPlanMutation,
} = emiPlanApi;