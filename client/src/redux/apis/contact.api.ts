import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "./customBaseQuery.api";
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/contact`;
const customBaseQuery = createCustomBaseQuery(baseUrl);
interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}
interface IContact {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status: "pending" | "reviewed" | "resolved";
    createdAt: string;
    updatedAt: string;
}
interface IPagination {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
}
export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: customBaseQuery,
    tagTypes: ["Contact"],
    endpoints: (builder) => ({
        submitContactForm: builder.mutation<
            { message: string; result: any },
            ContactFormData
        >({
            query: (body) => ({
                url: `/submit`,
                method: "POST",
                body,
            }),
            transformResponse: (data: { message: string; result: any }) => data,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message || "Failed to submit contact form",
            invalidatesTags: ["Contact"],
        }),
        getAllContacts: builder.query<
            { message: string; result: IContact[]; pagination: IPagination },
            Partial<{ page: number; limit: number; status?: string }>
        >({
            query: (queryParams = {}) => ({
                url: `/get-all`,
                method: "GET",
                params: queryParams,
            }),
            transformResponse: (data: { message: string; result: IContact[]; pagination: IPagination }) => data,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message || "Failed to fetch contacts",
            providesTags: ["Contact"],
        }),
        updateContactStatus: builder.mutation<
            { message: string; result: IContact },
            { id: string; status: string }
        >({
            query: ({ id, status }) => ({
                url: `/update-status/${id}`,
                method: "PUT",
                body: { status },
            }),
            transformResponse: (data: { message: string; result: IContact }) => data,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message || "Failed to update contact status",
            invalidatesTags: ["Contact"],
        }),
        deleteContact: builder.mutation<{ message: string }, string>({
            query: (id) => ({
                url: `/delete/${id}`,
                method: "DELETE",
            }),
            transformResponse: (data: { message: string }) => data,
            transformErrorResponse: (error: { status: number; data: { message: string } }) =>
                error.data?.message || "Failed to delete contact",
            invalidatesTags: ["Contact"],
        }),
    }),
});
export const {
    useSubmitContactFormMutation,
    useGetAllContactsQuery,
    useUpdateContactStatusMutation,
    useDeleteContactMutation,
} = contactApi;