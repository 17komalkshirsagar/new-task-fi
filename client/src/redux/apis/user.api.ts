import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store"
import { logoutUser, openSessionExpiredModal } from "../slices/auth.slice";
export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: number;
    profile?: string;
    role: 'user';
    status: 'active' | 'inactive';
    token: string;
}


const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/user`,
    credentials: "include",
    prepareHeaders(headers, { getState }) {
        const state = getState() as RootState;
        // const token = state.auth.user?.token ?? "";
        const token = (state.auth.user as IUser | null)?.token ?? "";

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});
const customBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const response = await baseQuery(args, api, extraOptions);
    if (response.error?.status === 401) {
        const errorData = response.error.data as { message?: string };
        if (errorData?.message === "Session has expired. Please log in again.") {
            api.dispatch(logoutUser());
            api.dispatch(openSessionExpiredModal())
        }
    }
    return response;
};
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: customBaseQuery,
    endpoints: (builder) => {
        return {
            registerUser: builder.mutation<
                { message: string; result: IUser },
                {
                    firstName: string;
                    lastName: string;
                    email: string;
                    phone: string;
                    password: string;
                    confirmPassword: string;
                }>({
                    query: (newUser) => ({
                        url: "/register",
                        method: "POST",
                        body: newUser,
                    }),
                    transformResponse: (data: { message: string; result: IUser }) => {
                        localStorage.setItem("user", JSON.stringify(data.result));
                        return data;
                    },
                    transformErrorResponse: (error: { status: number; data: { message: string } }) => {
                        return error.data?.message || "Registration failed";
                    },
                }),
            signInUser: builder.mutation<{ message: string, result: IUser }, { email: string, password: string }>({
                query: userData => {
                    return {
                        url: "/sign-in",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: (data: { message: string, result: IUser }) => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data
                },
                transformErrorResponse: (error: { status: number, data: { message: string } }) => {
                    return error.data?.message
                }
            }),
            signOutUser: builder.mutation<string, void>({
                query: () => {
                    return {
                        url: "/sign-out",
                        method: "POST",
                    }
                },
                transformResponse: (data: { message: string }) => {
                    localStorage.removeItem("user")
                    return data.message
                },
                transformErrorResponse: (error: { status: number, data: { message: string } }) => {
                    return error.data?.message
                }
            }),
            continueWithGoogleUser: builder.mutation({
                query: (googleData) => ({
                    url: "/continue-with-google",
                    method: "POST",
                    body: googleData,
                }),
                transformResponse: (data: { message: string; result: IUser }) => {
                    localStorage.setItem("user", JSON.stringify(data.result));
                    return data;
                },
                transformErrorResponse: (error: { status: number; data: { message: string } }) => {
                    return error.data?.message || "Google login failed";
                },
            }),

            verifyOtp: builder.mutation<{ message: string; result: IUser }, { email?: string; phone?: string; otp: string }>({
                query: (data) => ({
                    url: "/verify-otp",
                    method: "POST",
                    body: data,
                }),
                transformResponse: (data: { message: string; result: IUser }) => {
                    localStorage.setItem("user", JSON.stringify(data.result));
                    return data;
                },
                transformErrorResponse: (error: { status: number; data: { message: string } }) => error.data?.message,
            }),
            sendOtp: builder.mutation<{ message: string }, { email?: string; phone?: string }>({
                query: (data) => ({
                    url: "/send-otp",
                    method: "POST",
                    body: data,
                }),
                transformResponse: (data: { message: string }) => data,
                transformErrorResponse: (error: { status: number; data: { message: string } }) => error.data?.message,
            }),
        }
    }
})
export const {
    useRegisterUserMutation,
    useSignInUserMutation,
    useSignOutUserMutation, useSendOtpMutation,
    useVerifyOtpMutation,
    useContinueWithGoogleUserMutation
} = userApi
